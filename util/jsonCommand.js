const fs = require('fs')
const chalk = require('chalk')
const { resolve, join } = require('path')
const { runHokeyCommand } = require('./command')
const { messages } = require('./localize');
const { DEFAULT_LANG, ALL_LANGS_NAME, DEFAULT_HOKEY_JSON_FILE } = require('./constants')

const runJsonCommand = async (program, translate, opts) => {
    const msg = messages()
    let jsonFile = opts.json === true ? DEFAULT_HOKEY_JSON_FILE : opts.json
    let jsonFileStat = fs.lstatSync(jsonFile, {throwIfNoEntry: false})
    if (!jsonFileStat) {
        program.error(chalk.redBright(msg.err_option_json_notFound.parseMessage({ jsonFile })))
        return

    } else if (jsonFileStat.isDirectory()) {
        jsonFile = resolve(join(jsonFile, DEFAULT_HOKEY_JSON_FILE))
        jsonFileStat = fs.lstatSync(jsonFile, {throwIfNoEntry: false})
        if (!jsonFileStat) {
            program.error(chalk.redBright(msg.err_option_json_notFound.parseMessage({ jsonFile })))
            return
        }
    }
    let hokeyJson
    try {
        hokeyJson = JSON.parse(fs.readFileSync(jsonFile).toString('utf8'))
    } catch (e) {
        program.error(chalk.redBright(msg.err_option_json_errorReading.parseMessage({ jsonFile, e })))
        return
    }

    let excludes = opts.excludes || hokeyJson.excludes || null
    if (excludes) {
        excludes = excludes.map(ex => new RegExp(ex))
    } else {
        excludes = null
    }
    const defaults = {
        inputLanguage:  opts.inputLanguage ||hokeyJson.inputLanguage || DEFAULT_LANG,
        languages:  opts.languages || hokeyJson.languages || ALL_LANGS_NAME,
        force: opts.force || hokeyJson.force,
        match: opts.match || hokeyJson.match || null,
        processAs: opts.processAs || hokeyJson.processAs || null,
        excludes: excludes,
        handlebars: opts.handlebars || hokeyJson.handlebars || false,
        markdown: opts.markdown || hokeyJson.markdown || false,
        regular: opts.regular || hokeyJson.regular || false,
        dryRun: opts.dryRun || hokeyJson.dryRun || false,
        filter: opts.filter || hokeyJson.filter || null
    }

    for (const config of hokeyJson.hokey) {
        console.log(msg.info_jsonProcessing_start.parseMessage({ name: config.name }))
        const sources = config.infiles
            ? config.infiles
            : config.infile
                ? [config.infile]
                : null
        if (!sources) {
            program.error(chalk.redBright(msg.err_noSources))
            return
        }
        if (!config.outfile) {
            program.error(chalk.redBright(msg.err_option_outfile_required))
            return
        }
        let excludes = config.excludes || hokeyJson.excludes || opts.excludes || null
        if (excludes) {
            excludes = excludes.map(ex => new RegExp(ex))
        } else {
            excludes = null
        }
        const command = Object.assign({}, defaults, {
            sources,
            inputLanguage: config.inputLanguage || opts.inputLanguage || DEFAULT_LANG,
            languages: config.languages || opts.languages || ALL_LANGS_NAME,
            force: config.force || opts.force,
            match: config.match || opts.match || null,
            processAs: config.processAs || opts.processAs || null,
            excludes: excludes,
            handlebars: config.handlebars || opts.handlebars || false,
            markdown: config.markdown || opts.markdown || false,
            regular: config.regular || opts.regular || false,
            dryRun: config.dryRun || opts.dryRun || false,
            filter: config.filter || opts.filter || null,
            outfile: config.outfile
        })
        await runHokeyCommand(program, translate, command)
    }
}

module.exports = { runJsonCommand }
