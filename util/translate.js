const he = require('he')
const chalk = require('chalk')

const { messages } = require("./localize")

const LANG_PLACEHOLDER = 'LANG'

const NO_TRANSLATE_START_PREFIX = '<span class="notranslate"'

const noTranslateStart = (leadingSpaces) => `${NO_TRANSLATE_START_PREFIX} hokey-leading-spaces="${leadingSpaces}">`

const NO_TRANSLATE_START = `${NO_TRANSLATE_START_PREFIX}>`
const NO_TRANSLATE_END = '</span>'
const REPLACEMENT_STUB = NO_TRANSLATE_START + '_'.repeat(10) + NO_TRANSLATE_END

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
    const msg = messages()
    const handlebars = !!options.handlebars
    const format = options.processAs || 'text'
    const markdown = !!options.markdown
    const escapeNewlines = options.newlines && options.newlines === 'escape'

    // all callers already handle dryRun, but just in case, we also handle it because
    // the guarantee of dryRun is that we won't make any API calls to Google Translate
    const dryRun = !!options.dryRun
    if (markdown) {
        let adjusted = ''
        const lines = value.split('\n');
        for (const line of lines) {
            if (line.startsWith('    ')) {
                const leadingSpaces = line.match(/^\s+/)[0].length
                adjusted += noTranslateStart(leadingSpaces) + line + NO_TRANSLATE_END + '\n'
            } else if (line.includes('`')) {
                const replacement = line.replaceAll(/`([^`]+)`/g, NO_TRANSLATE_START + "`$1`" + NO_TRANSLATE_END) + '\n';
                adjusted += replacement
            } else {
                adjusted += line + '\n'
            }
        }
        adjusted = '<pre>' + adjusted.replaceAll('\n', '<br/>') + '</pre>'
        const [translation] = dryRun
            ? 'dry-run-no-translation'
            : await translate.translate(adjusted, {from: fromLang, to: toLang, format: 'html'})

        // remove all translation stubs
        let result = ''
        let lineNumber = 0
        const translatedLines = translation.split('<br/>');
        for (const line of translatedLines) {
            lineNumber++
            if (line.startsWith(NO_TRANSLATE_START_PREFIX) && line.endsWith(NO_TRANSLATE_END)) {
                const end = line.indexOf('>');
                const tag = line.substring(line.indexOf(NO_TRANSLATE_START_PREFIX), end)
                const leadingSpaces = tag.match(/hokey-leading-spaces="([^"]+)"/)[1]
                result += ' '.repeat(+leadingSpaces) + line.substring(end + 1, line.length - NO_TRANSLATE_END.length).trim() + '\n'
            } else if (line.includes(NO_TRANSLATE_START)) {
                const start = line.indexOf(NO_TRANSLATE_START)
                let partResult = line.substring(0, start)
                let index = line.indexOf('>', start)
                let end = -1
                while (index !== -1) {
                    end = line.indexOf(NO_TRANSLATE_END, index)
                    partResult += line.substring(index + 1, end)
                    index = line.indexOf(NO_TRANSLATE_START, end)
                    if (index !== -1) {
                        partResult += line.substring(end + NO_TRANSLATE_END.length, index)
                        index = line.indexOf('>', index)
                    }
                }
                partResult += end !== -1 ? line.substring(end + NO_TRANSLATE_END.length) : ''
                result += partResult + '\n'
            } else {
                result += line + '\n'
            }
        }
        // replace HTML entities with text equivalents
        result = he.decode(result)
        // unwrap <pre> tag if present (it should be, but let's be safe)
        if (result.startsWith('<pre')) {
            result = result.substring(result.indexOf('>') + 1)
        }
        if (result.endsWith('</pre>')) {
            result = result.substring(0, result.length - '</pre>'.length)
        }
        result = result.replaceAll(/]\s+\(/g, '](')
        return result

    } else if (handlebars) {
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
            if (escapeNewlines) {
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
