const LANG_PLACEHOLDER = 'LANG';
const REPLACEMENT_STUB = '<span class="notranslate">' + '_'.repeat(10) + '</span>'

const nextCurly = (value, index) => {
    const triple = value.indexOf('{{{', index)
    const double = value.indexOf('{{', index)
    if (triple !== -1 && triple <= double) {
        return {
            endIndex: value.indexOf('}}}', triple) + '}}}'.length,
            index: triple,
        }
    }
    if (double !== -1) {
        return {
            endIndex: value.indexOf('}}', double) + '}}'.length,
            index: double
        }
    }
    return { index: -1 }
}

// It is probably possible to do this with RegExp and capturing groups,
// but that code would be very hard to read
// This approach is more cumbersome but also clearer
const replaceHandlebars = (value) => {
    const hData = {
        value: '',
        replacements: []
    }
    let index = 0
    let startCurly = nextCurly(value, index)
    while (index < value.length) {
        if (startCurly.index === -1) {
            hData.value += value.substring(index)
            return hData
        } else {
            hData.value += value.substring(index, startCurly.index) + REPLACEMENT_STUB
            index = startCurly.endIndex
            hData.replacements.push(value.substring(startCurly.index, index))
        }
        startCurly = nextCurly(value, index)
    }
    return hData
}

const revertHandlebars = (translation, hbs) => {
    let result = translation
    for (let i = 0; i<hbs.replacements.length; i++) {
        result = result.replace(REPLACEMENT_STUB, hbs.replacements[i])
    }
    return result
}

const translateString = async (translate, value, fromLang, toLang, handlebars, label, format = 'text') => {
    if (handlebars) {
        const hbs = replaceHandlebars(value)


        // We need to use <span class="notranslate">
        // If format is text, we wrap with <p> tag, replace newlines with <br/> and translate as HTML
        const inValue = format === 'text' ? `<p>${hbs.value.replaceAll('\n', '<br/>')}</p>` : hbs.value
        const [translation] = await translate.translate(inValue, {from: fromLang, to: toLang, format: 'html'})

        let result
        if (format === 'text') {
            // replace <br/> with newline
            result = translation.replaceAll('<br/>', '\n')

            // unwrap <p> tag if present (it should be, but let's be safe)
            if (result.startsWith('<p')) {
                result = result.substring(result.indexOf('>'))
            }
            if (result.endsWith('</p>')) {
                result = result.substring(0, result.length - '</p>'.length)
            }
        } else {
            result = translation
        }
        console.log(`translateString(${fromLang}, ${toLang}) ${label} translated ${value.length} chars to ${result.length} chars`)
        return revertHandlebars(result, hbs)
    } else {
        const [translation] = await translate.translate(value, {from: fromLang, to: toLang, format: 'text'})
        return translation
    }
}

module.exports = {
    REPLACEMENT_STUB, LANG_PLACEHOLDER,
    translateString, replaceHandlebars, revertHandlebars
}
