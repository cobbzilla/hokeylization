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

const translateString = async (translate, value, fromLang, toLang, handlebars, label) => {
    if (handlebars) {
        const hbs = replaceHandlebars(value)

        // wrap with <p> tag and translate as HTML, since we need to use <span class="notranslate">
        const [translation] = await translate.translate(`<p>${hbs.value}</p>`, {from: fromLang, to: toLang, format: 'html'})

        // unwrap <p> tag if present (it should be, but let's be safe)
        let result = translation.startsWith('<p>') ? translation.substring('<p>'.length) : translation
        result = result.endsWith('</p>') ? result.substring(result.length - '</p>'.length) : result

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
