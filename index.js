require('dotenv').config()
const fs = require('fs')
const commander = require('commander')
const { Translate } = require('@google-cloud/translate').v2
const { readMessageKeys, processFile } = require('./util/messageFile')
const { readDirFiles, processDirectory } = require('./util/templateDir')

// When run from a global installation, we lose the user's original cwd
// The wrapper script passes it via this env var
if (process.env.___HOKEY_PWD) {
    process.chdir(process.env.___HOKEY_PWD)
}

// verify env vars
const projectId = process.env.GOOGLE_TRANSLATE_PROJECT_ID

const VERSION = require('./package.json').version;

const verifyEnv = () => {
    if (!projectId) {
        console.error('Env var GOOGLE_TRANSLATE_PROJECT_ID not defined')
        process.exit(1)
    }
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        console.error('Env var GOOGLE_APPLICATION_CREDENTIALS not defined')
        process.exit(1)
    }
}

const program = new commander.Command()
    .command('hokey')
    .summary(`Quick translation service using Google Translate\nVersion ${VERSION}`)
    .description('Set the GOOGLE_TRANSLATE_PROJECT_ID environment variable to your Google Translate project\n' +
        'Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to point to your credentials JSON file')
    .option('-i, --input-language <lang>', '2-letter codes for languages to translate from. Default is en')
    .option('-p, --process-as <type>', 'Type can be text or html. Default is text')
    .requiredOption('-l, --languages <lang>', 'Comma-separated list of 2-letter codes for languages to translate into')
    .requiredOption('-o, --outfile <out-file>', 'Write JS output to this file. Default is input filename with lang extension\n' +
        'For directory processing, this is the output directory. It will be created if it does not exist')
    .option('-f, --force', 'Always generate fresh translations, overwriting any existing output files')
    .option('-H, --handlebars', 'Ensure {{ handlebars }} content is NOT translated')
    .argument('<js-file>', 'A JS file that exports strings to translate\nOr, if a directory, a directory filled with text files to translate')
    .version(VERSION)
    .showHelpAfterError()
    .action(async (jsFile, opts) => {
        verifyEnv()
        const langs = opts.languages.toLowerCase().split(',')
        const outfile = opts.outfile
        const fromLang = opts.fromLanguage || 'en'
        const processAs = opts.processAs || 'text'
        const translate = new Translate({projectId})

        const stat = fs.lstatSync(jsFile)
        if (stat.isDirectory()) {
            const inFiles = await readDirFiles(jsFile)
            for (const lang of langs) {
                if (lang.trim().length === 0) {
                    continue
                }
                await processDirectory(translate, jsFile, fromLang, inFiles, lang, outfile, opts.force, opts.handlebars, processAs)
            }
        } else {
            const keys = await readMessageKeys(jsFile)
            for (const lang of langs) {
                if (lang.trim().length === 0) {
                    continue
                }
                await processFile(translate, jsFile, fromLang, keys, lang, outfile, opts.force, opts.handlebars)
            }
        }
    })

const args = process.argv

try {
    program.parse(args)
} catch (e) {
    console.error(`FATAL ERROR: ${e}`)
    throw e
}
