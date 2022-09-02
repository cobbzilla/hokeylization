require('dotenv').config()
const fs = require('fs')
const path = require('path')
const commander = require('commander')

// When run globally, we lose the original user pwd
// The wrapper script passes it via this env var
if (process.env.__HOKEY_DIR) {
    process.chdir(process.env.__HOKEY_DIR)
}

// verify env vars
const projectId = process.env.GOOGLE_TRANSLATE_PROJECT_ID
if (!projectId) {
    console.error('Env var GOOGLE_TRANSLATE_PROJECT_ID not defined')
    process.exit(1)
}
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('Env var GOOGLE_APPLICATION_CREDENTIALS not defined')
    process.exit(1)
}

const { Translate } = require('@google-cloud/translate').v2

const VERSION = require('./package.json').version;

// adapted from https://stackoverflow.com/a/26828357/1251543
const processDirectory = (jsFile, lang, outfile) => {
    const outfileStat = fs.lstatSync(jsFile, {throwIfNoEntry: false})
    if (!outfileStat) {
        fs.mkdirSync(outfile, {recursive: true})
    } else if (!outfileStat.isDirectory()) {
        throw new TypeError(`processDirectory: not a directory: ${outfile}`)
    }

    const translate = new Translate({projectId})
    const visitor = async (fullPath) => {
        const contents = fs.readFileSync(fullPath, 'utf8')
        const [translation] = await translate.translate(contents, lang)
        let translationFile
        if (fullPath.includes(jsFile)) {
            const start = fullPath.indexOf(jsFile)
            const relativePath = fullPath.substring(start + jsFile.length)
            translationFile = path.resolve(path.join(outfile, relativePath))
        } else {
            translationFile = path.resolve(path.join(outfile, fullPath.replaceAll('/', '_')))
        }
        fs.mkdirSync(path.dirname(translationFile), {recursive: true})
        fs.writeFileSync(translationFile, translation)
        console.log(`WROTE: ${translationFile}`)
    }
    const walk = (directoryName) => {
        fs.readdir(directoryName, (e, files) => {
            if (e) {
                console.log('Error: ', e)
                return
            }
            for (const file of files) {
                const fullPath = path.join(directoryName,file);
                fs.stat(fullPath, (e, f) => {
                    if (e) {
                        console.log('Error: ', e)
                        return
                    }
                    if (f.isDirectory()) {
                        walk(fullPath)
                    } else {
                        visitor(fullPath).then(
                            () => {},
                            (err) => {
                                console.error(`Error translating ${fullPath}: ${err}`)
                            }
                        )
                    }
                })
            }
        })
    }
    walk(jsFile)
}

const program = new commander.Command()
    .command('hokey')
    .summary(`Quick translation service using Google Translate\nVersion ${VERSION}`)
    .description('Set the GOOGLE_TRANSLATE_PROJECT_ID environment variable to your Google Translate project\n' +
        'Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to point to your credentials JSON file')
    .requiredOption('-l, --language <lang>', '2-letter code for language to translate into')
    .requiredOption('-o, --outfile <out-file>', 'Write JS output to this file. Default is input filename with lang extension\n' +
        'For directory processing, this is the output directory. It will be created if it does not exist')
    .argument('<js-file>', 'A JS file that exports strings to translate\nOr, if a directory, a directory filled with text files to translate')
    .version(VERSION)
    .showHelpAfterError()
    .action(async (jsFile, opts) => {
        if (opts.language.length !== 2) {
            throw new TypeError(`lang must be 2 characters: ${opts.language}`)
        }
        const lang = opts.language.toLowerCase()
        const stat = fs.lstatSync(jsFile)
        if (stat.isDirectory()) {
            await processDirectory(jsFile, lang, opts.outfile || `./${path.basename(jsFile)}_${lang}_${Date.now()}`)
            return
        }

        const file = fs.readFileSync(jsFile).toString('utf8').trim()
        let keys
        if (file.startsWith('export default ')) {
            const firstCurly = file.indexOf('{')
            if (firstCurly === -1) throw new TypeError(`invalid json in ${jsFile}`)
            keys = eval('Object.assign({}, ' + file.substring(firstCurly) + ')')
        } else {
            keys = require(jsFile)
        }
        let result = "export default {"
        let first = true
        try {
            // create a client
            const translate = new Translate({projectId})

            for (const key of Object.keys(keys)) {
                // Translates some text into Russian
                const [translation] = await translate.translate(keys[key], lang)
                if (first) {
                    result += '\n'
                    first = false
                } else {
                    result += ',\n'
                }
                result += `  ${key}: '${translation.replaceAll("'", "\\'")}'`
            }
            result += '\n}\n'
        } catch (e) {
            console.error(` **** Error translating: ${e}`)
        }

        const outfile = opts.outfile || lang + '_' + Date.now() + '_' + jsFile
        try {
            fs.writeFileSync(outfile, result)
        } catch (e) {
            console.error(` **** Error writing to outfile ${opts.outputFile}: ${e}`)
        }
    })

const args = process.argv

try {
    program.parse(args)
} catch (e) {
    console.error(`FATAL ERROR: ${e}`)
    throw e
}
