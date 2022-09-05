require('dotenv').config()
const fs = require('fs')
const { dirname, resolve, join } = require('path')
const commander = require('commander')
const chalk = require("chalk")
const { Translate } = require('@google-cloud/translate').v2

const { runHokeyCommand } = require('./util/command')
const { messages } = require('./util/localize')
const { DEFAULT_LANG, ALL_LANGS, ALL_LANGS_NAME, VERSION, DEFAULT_HOKEY_JSON_FILE} = require('./util/constants')
const { runJsonCommand } = require("./util/jsonCommand");

const msg = messages()

// When run from a global installation, we lose the user's original cwd
// The wrapper script passes it via this env var
if (process.env.___HOKEY_PWD) {
    process.chdir(process.env.___HOKEY_PWD)
}

const projectId = process.env.GOOGLE_TRANSLATE_PROJECT_ID

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
    .option('-j, --json [json-file]', msg.info_option_jsonFile)
    .option('-I, --index [index-file]', msg.info_option_indexFile)
    .option('-A, --index-template <index-template-file>', msg.info_option_indexTemplateFile)
    .option('-i, --input-language <lang>', msg.info_option_inputLanguage.parseMessage({ DEFAULT_LOCALE: DEFAULT_LANG }))
    .option('-p, --process-as <type>', msg.info_option_processAs)
    .option('-m, --match <regex>', msg.info_option_match)
    .option('-e, --excludes <regexes...>', msg.info_option_excludes)
    .option('-r, --regular', msg.info_option_regular)
    .option('-T, --filter <js-file>', msg.info_option_filter)
    .option('-n, --dry-run', msg.info_option_dryRun)
    .option('-l, --languages <lang>', msg.info_option_languages)
    .option('-o, --outfile <out-file>', msg.info_option_outfile)
    .option('-f, --force', msg.info_option_force)
    .option('-H, --handlebars', msg.info_option_handlebars)
    .option('-M, --markdown', msg.info_option_markdown)
    .argument('[sources...]', msg.info_arg_sources)
    .version(VERSION)
    .showHelpAfterError()
    .action(async (sources, opts) => {
        verifyEnv() // die if env vars not set correctly
        const translate = new Translate({projectId})
        if (opts.json) {
            await runJsonCommand(program, translate, opts)
        } else {
            if (sources.length === 0) {
                program.error(chalk.redBright(msg.err_noSources))
                return
            }
            if (!opts.outfile) {
                program.error(chalk.redBright(msg.err_option_outfile_required))
                return
            }
            if (!opts.languages) {
                program.error(chalk.redBright(msg.err_option_languages_required))
                return
            }
            const languages = (opts.languages === ALL_LANGS_NAME ? ALL_LANGS : opts.languages).toLowerCase().split(',')

            let exc = opts.excludes || null
            if (exc) {
                exc = exc.map(ex => new RegExp(ex))
            } else {
                exc = null
            }
            const processAs = opts.processAs || 'text'
            if (processAs !== 'text' && processAs !== 'html') {
                program.error(chalk.redBright(msg.err_option_processAs_invalid))
                return
            }
            const command = {
                sources,
                languages,
                inputLanguage: opts.inputLanguage || DEFAULT_LANG,
                force: opts.force || false,
                match: opts.match || null,
                processAs,
                excludes: exc,
                handlebars: opts.handlebars || false,
                markdown: opts.markdown || false,
                regular: opts.regular || opts.markdown || false,
                dryRun: opts.dryRun || false,
                filter: opts.filter || null,
                outfile: opts.outfile
            }
            await runHokeyCommand(program, translate, command)
        }
    })

const args = process.argv.filter(a => a.length > 0)
try {
    program.parse(args)
} catch (e) {
    console.error(chalk.redBright(msg.err_fatal.parseMessage({error: e})))
}
