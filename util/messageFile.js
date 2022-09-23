const fs = require('fs')
const chalk = require('chalk')

const { translateString, LANG_PLACEHOLDER } = require('./translate')
const { messages } = require('./localize')
const { HokeyError } = require('./error')

const ES6_STYLE = {
    start: () => 'export default {'
}
const CJS_STYLE = {
    start: () => 'module.exports = {'
}

const readMessageKeys = async (file, defaultStyle = ES6_STYLE) => {
    const msg = messages()
    const stat = fs.lstatSync(file, {throwIfNoEntry: false})
    if (!stat) {
        return { keys: {}, style: defaultStyle }
    }
    const data = fs.readFileSync(file).toString('utf8').trim()
    let style
    if (data.startsWith('export default ')) {
        style = ES6_STYLE
    } else if (data.startsWith('module.exports')) {
        style = CJS_STYLE
    } else {
        const actualPrefix = data.length < 20 ? data : data.substring(0, 20);
        throw new HokeyError(msg.err_readMessageKeys_invalidFileStart.parseMessage({ file, actualPrefix }))
    }
    const firstCurly = data.indexOf('{')
    if (firstCurly === -1) throw new HokeyError(msg.err_readMessageKeys_invalidJson.parseMessage({ file }))
    return {
        style,
        keys: eval('Object.assign({}, ' + data.substring(firstCurly) + ')')
    }
}

const processFile = async (translate, infile, inMsgKeys, lang, outfile, options) => {
    const msg = messages()
    const fromLang = options.inputLanguage
    const force = !!options.force
    const dryRun = !!options.dryRun
    const langOut = outfile.replace(LANG_PLACEHOLDER, lang)
    if (langOut === outfile || !langOut.includes(lang)) {
        throw new HokeyError(msg.err_invalidOutfile.parseMessage({ lang }))
    }
    if (langOut === infile) {
        throw new HokeyError(msg.err_cannotWriteSource.parseMessage({ source: infile }))
    }
    const msgKeys = force ? { keys: {}, style: inMsgKeys.style } : await readMessageKeys(langOut, inMsgKeys.style)
    const inKeys = inMsgKeys.keys
    const langKeys = msgKeys.keys
    options.newlines = 'escape'
    try {
        for (const key of Object.keys(inKeys)) {
            // Does the translation already exist?
            if (!force && langKeys[key]) {
                langKeys[key] = langKeys[key].replaceAll('\n', '\\' + 'n')
                continue
            }
            langKeys[key] = dryRun
                ? msg.info_dryRun_key.parseMessage({ key: inKeys[key] })
                : await translateString(translate, inKeys[key], fromLang, lang, key, options)
        }
        // write lang file
        let first = true
        let result = msgKeys.style.start()
        for (const key of Object.keys(langKeys)) {
            if (first) {
                result += '\n  '
                first = false
            } else {
                result += ',\n  '
            }

            const val = langKeys[key]
            const quotedTranslation = val.replaceAll("'", "\\'");
            result += `${key}: '${quotedTranslation}'`
        }
        result += '\n}\n'
        if (dryRun) {
            console.log(msg.info_dryRun_file.parseMessage({ langOut }))
        } else {
            try {
                fs.writeFileSync(langOut, result)
            } catch (e) {
                console.error(chalk.redBright(msg.err_processFile_writeFile.parseMessage({ lang, langOut, e })))
            }
        }
    } catch (e) {
        console.error(chalk.redBright(msg.err_processFile_error.parseMessage({ e })))
    }
    return langOut
}

module.exports = { readMessageKeys, processFile }
