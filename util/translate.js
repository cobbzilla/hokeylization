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

const translateString = async (translate, value, lang, handlebars) => {
    if (handlebars) {
        const hbs = replaceHandlebars(value)
        const [translation] = await translate.translate(hbs.value, {to: lang, format: 'text'})
        return revertHandlebars(translation, hbs)
    } else {
        const [translation] = await translate.translate(value, lang)
        return translation
    }
}

module.exports = {
    REPLACEMENT_STUB, LANG_PLACEHOLDER,
    translateString, replaceHandlebars, revertHandlebars
}
