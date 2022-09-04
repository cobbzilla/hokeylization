const fs = require('fs')

const { translateString, LANG_PLACEHOLDER } = require('./translate')

const readMessageKeys = async (file) => {
    const stat = fs.lstatSync(file, {throwIfNoEntry: false})
    if (!stat) {
        return {}
    }
    const data = fs.readFileSync(file).toString('utf8').trim()
    if (!data.startsWith('export default ')) {
        throw new TypeError(`readMessageKeys: expected file to start with 'export default' but found: ${data.length < 20 ? data : data.substring(0, 20)}...`)
    }
    const firstCurly = data.indexOf('{')
    if (firstCurly === -1) throw new TypeError(`invalid json in ${file}`)
    return eval('Object.assign({}, ' + data.substring(firstCurly) + ')')
}

const processFile = async (translate, infile, fromLang, keys, lang, outfile, options) => {
    const force = options.force || false
    const dryRun = options.dryRun || false
    const langOut = outfile.replace(LANG_PLACEHOLDER, lang)
    if (langOut === outfile || !langOut.includes(lang)) {
        throw new TypeError(`processFile: expected outfile to contain 'LANG' (to be replaced with ${lang})`)
    }
    if (langOut === infile) {
        throw new TypeError(`processFile: refusing to overwrite input lang file: ${infile}`)
    }
    const langKeys = force ? {} : await readMessageKeys(langOut)
    try {
        for (const key of Object.keys(keys)) {
            // Does the translation already exist?
            if (!force && langKeys[key]) {
                continue
            }
            langKeys[key] = dryRun
                ? `(dry run) not writing translation for key: ${keys[key]}`
                : await translateString(translate, keys[key], fromLang, lang, key, options)
        }
        // write lang file
        let first = true
        let result = 'export default {'
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
        result += '\n}'
        if (dryRun) {
            console.log(`(dry run) WOULD HAVE WROTE: ${langOut}`)
        } else {
            try {
                fs.writeFileSync(langOut, result)
            } catch (e) {
                console.error(` **** Error writing to outfile for ${lang}: ${langOut}: ${e}`)
            }
        }
    } catch (e) {
        console.error(` **** Error translating: ${e}`)
    }
}

module.exports = { readMessageKeys, processFile }
