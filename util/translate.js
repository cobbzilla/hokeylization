const he = require('he')

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

const translateString = async (translate, value, fromLang, toLang, label, options) => {
    const handlebars = !!options.handlebars
    const format = options.processAs || 'text'
    const markdown = !!options.markdown

    // all callers already handle dryRun, but just in case, we also handle it because
    // the guarantee of dryRun is that we won't make any API calls to Google Translate
    const dryRun = !!options.dryRun
    if (handlebars) {
        const hbs = replaceHandlebars(value)

        // We need to use <span class="notranslate">
        // If format is text, we wrap with <p> tag, replace newlines with <br/> and translate as HTML
        const inValue = format === 'text' ? `<p>${hbs.value.replaceAll('\n', '<br/>')}</p>` : hbs.value
        const [translation] = dryRun
            ? 'dry-run-no-translation'
            : await translate.translate(inValue, {from: fromLang, to: toLang, format: 'html'})

        let result
        if (format === 'text') {
            // replace <br/> with escaped newlines, or real newlines, depending on mode
            if (options.newlines && options.newlines === 'escape') {
                result = translation.replaceAll('<br/>', '\\' + 'n')
            } else {
                result = translation.replaceAll('<br/>', '\n')
            }

            // unwrap <p> tag if present (it should be, but let's be safe)
            if (result.startsWith('<p')) {
                result = result.substring(result.indexOf('>') + 1)
            }
            if (result.endsWith('</p>')) {
                result = result.substring(0, result.length - '</p>'.length)
            }
            result = he.decode(result) // replace HTML entities with text equivalents
        } else {
            result = translation
        }
        if (markdown) {
            result = result.replaceAll(/] \(/, '](')
        }
        console.log(`translateString(${fromLang}, ${toLang}) ${label} source_length(${value.length}) --> dest_length(${result.length})`)
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
