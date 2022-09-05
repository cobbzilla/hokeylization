const {resolve, dirname} = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { readDirFiles, processDirectory } = require("./templateDir");
const { readMessageKeys, processFile } = require("./messageFile");
const { HokeyError } = require("./error");
const { messages } = require("./localize");
const {ALL_LANGS_NAME, ALL_LANGS} = require("./constants");

// from https://stackoverflow.com/a/3561711/1251543
function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

const runHokeyCommand = async (program, translate, command) => {
    const msg = messages()
    const sources = command.sources
    const langs = Array.isArray(command.languages)
        ? command.languages
        : (command.languages === ALL_LANGS_NAME ? ALL_LANGS : command.languages).split(',')

    const fromLang = command.inputLanguage
    const regular = command.regular || command.markdown
    const outfile = command.outfile
    for (const rawSource of sources) {
        const source = resolve(rawSource)
        const stat = fs.lstatSync(source, {throwIfNoEntry: false})
        if (!stat) {
            program.error(chalk.redBright(msg.err_infileNotFound.parseMessage({jsFile: source})))
            return
        }
        try {
            if (stat.isDirectory() || regular) {
                const inFiles = regular && !stat.isDirectory()
                    ? await readDirFiles(dirname(source), { match: new RegExp('^'+escapeRegex(source)+'$') })
                    : await readDirFiles(source, command)
                for (const lang of langs) {
                    if (lang.trim().length === 0 || lang === fromLang) {
                        continue
                    }
                    await processDirectory(translate, source, inFiles, lang, command)
                }
            } else {
                const msgKeys = await readMessageKeys(source)
                for (const lang of langs) {
                    if (lang.trim().length === 0 || lang === fromLang) {
                        continue
                    }
                    await processFile(translate, source, msgKeys, lang, outfile, command)
                }
            }
        } catch (e) {
            if (e instanceof HokeyError) {
                program.error(chalk.redBright(msg.err_processing.parseMessage({e: e.message})))
            } else {
                program.error(chalk.redBright(msg.err_processing.parseMessage({e})))
            }
        }
    }
}

module.exports = { runHokeyCommand }
