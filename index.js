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
    .description('=== Source ===\n' +
        'GitHub: https://github.com/cobbzilla/hokeylization\n' +
        'npm: https://www.npmjs.com/package/hokeylization\n\n' +
        '=== REQUIRED environment variables ===\n' +
        ' * GOOGLE_TRANSLATE_PROJECT_ID: your Google Translate project\n' +
        ' * GOOGLE_APPLICATION_CREDENTIALS: your credentials JSON file\n\n' +
        '=== ISO language codes ===\n' +
        'When specifying ISO codes (either input language or target languages) use these codes:\n' +
        'https://cloud.google.com/translate/docs/languages')
    .option('-i, --input-language <lang>', 'ISO code for languages to translate from. Default is en')
    .option('-p, --process-as <type>', 'Type can be text or html. Default is text')
    .option('-m, --match <regex>', 'When processing a directory, only consider files that match this regex')
    .option('-n, --dry-run', 'Do not make write any files or make any API calls to Google Translate, but log what would have been done')
    .requiredOption('-l, --languages <lang>', 'Comma-separated list of ISO codes for languages to translate into')
    .requiredOption('-o, --outfile <out-file>', 'For JS file processing: write JS output to this file\n' +
        'For directory processing: write files to this directory, which will be created if it does not exist')
    .option('-f, --force', 'Always generate fresh translations, overwriting any existing output files')
    .option('-H, --handlebars', 'Ensure {{ handlebars }} content is preserved as-is and NOT translated')
    .argument('<source>', 'The source for translations; can be a JS file or a directory of files to translate')
    .version(VERSION)
    .showHelpAfterError()
    .action(async (jsFile, opts) => {
        verifyEnv()
        const langs = opts.languages.toLowerCase().split(',')
        const outfile = opts.outfile
        const fromLang = opts.fromLanguage || 'en'
        const handlebars = opts.handlebars || false
        const processAs = opts.processAs || 'text'
        if (processAs !== 'text' && processAs !== 'html') {
            throw new TypeError(`Invalid option value for -p / --process-as : this option only supports values of 'text' or 'html'`)
        }
        const dryRun = opts.dryRun || false
        const force = opts.force || false
        const match = opts.match || null
        const translate = new Translate({projectId})

        const options = {
            fromLang, handlebars, processAs, dryRun, force, match: new RegExp(match)
        }

        const stat = fs.lstatSync(jsFile)
        if (stat.isDirectory()) {
            const inFiles = await readDirFiles(jsFile)
            for (const lang of langs) {
                if (lang.trim().length === 0) {
                    continue
                }
                await processDirectory(translate, jsFile, fromLang, inFiles, lang, outfile, options)
            }
        } else {
            const keys = await readMessageKeys(jsFile)
            for (const lang of langs) {
                if (lang.trim().length === 0) {
                    continue
                }
                await processFile(translate, jsFile, fromLang, keys, lang, outfile, options)
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
