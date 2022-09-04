require('dotenv').config()
const fs = require('fs')
const commander = require('commander')
const { Translate } = require('@google-cloud/translate').v2
const { readMessageKeys, processFile } = require('./util/messageFile')
const { readDirFiles, processDirectory } = require('./util/templateDir')
const { messages } = require('./util/localize')
const { HokeyError } = require('./util/error')
const chalk = require("chalk")

// change the env var, don't change this
const DEFAULT_LOCALE = process.env.HOKEY_DEFAULT_LOCALE || 'en'

const msg = messages()

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
        console.error(chalk.redBright(msg.err_env_googleProjectId))
        process.exit(1)
    }
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        console.error(chalk.redBright(msg.err_env_googleCredentials))
        process.exit(1)
    }
}

const program = new commander.Command()
    .command('hokey')
    .summary(msg.info_summary.parseMessage({ VERSION }))
    .description(msg.info_description)
    .option('-i, --input-language <lang>', msg.info_option_inputLanguage.parseMessage({ DEFAULT_LOCALE }))
    .option('-p, --process-as <type>', msg.info_option_processAs)
    .option('-m, --match <regex>', msg.info_option_match)
    .option('-e, --excludes <regexes...>', msg.info_option_excludes)
    .option('-T, --filter <js-file>', msg.info_option_filter)
    .option('-n, --dry-run', msg.info_option_dryRun)
    .requiredOption('-l, --languages <lang>', msg.info_option_languages)
    .requiredOption('-o, --outfile <out-file>', msg.info_option_outfile)
    .option('-f, --force', msg.info_option_force)
    .option('-H, --handlebars', msg.info_option_handlebars)
    .option('-M, --markdown', msg.info_option_markdown)
    .argument('<source>', msg.info_arg_source)
    .version(VERSION)
    .showHelpAfterError()
    .action(async (jsFile, opts) => {
        verifyEnv() // die if env vars not set correctly
        const langs = opts.languages.toLowerCase().split(',')
        const outfile = opts.outfile
        const fromLang = opts.fromLanguage || 'en'
        const handlebars = opts.handlebars || false
        const markdown = opts.markdown || false
        const processAs = opts.processAs || 'text'
        if (processAs !== 'text' && processAs !== 'html') {
            program.error(chalk.redBright(msg.err_option_processAs_invalid))
            return
        }
        const dryRun = opts.dryRun || false
        const force = opts.force || false
        const match = opts.match || null
        const excludes = opts.excludes || null
        const filter = opts.filter || null
        const options = { fromLang, handlebars, markdown, processAs, dryRun, force, match, excludes, filter }
        const translate = new Translate({projectId})
        const stat = fs.lstatSync(jsFile, {throwIfNoEntry: false})
        if (!stat) {
            program.error(chalk.redBright(msg.err_infileNotFound.parseMessage({ jsFile })))
            return
        }
        try {
            if (stat.isDirectory()) {
                const inFiles = await readDirFiles(jsFile, options)
                for (const lang of langs) {
                    if (lang.trim().length === 0) {
                        continue
                    }
                    await processDirectory(translate, jsFile, inFiles, lang, outfile, options)
                }
            } else {
                const msgKeys = await readMessageKeys(jsFile)
                for (const lang of langs) {
                    if (lang.trim().length === 0) {
                        continue
                    }
                    await processFile(translate, jsFile, msgKeys, lang, outfile, options)
                }
            }
        } catch (e) {
            if (e instanceof HokeyError) {
                program.error(chalk.redBright(msg.err_processing.parseMessage({ e: e.message })))
            } else {
                program.error(chalk.redBright(msg.err_processing.parseMessage({ e })))
            }
        }
    })

const args = process.argv.filter(a => a.length > 0)
try {
    program.parse(args)
} catch (e) {
    console.error(chalk.redBright(msg.err_fatal.parseMessage({error: e})))
}
