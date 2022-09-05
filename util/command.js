const { resolve, join, dirname, basename, relative } = require("path")
const fs = require("fs")
const chalk = require("chalk")
const Handlebars = require('handlebars')

const { readDirFiles, processDirectory } = require("./templateDir")
const { readMessageKeys, processFile } = require("./messageFile")
const { HokeyError } = require("./error")
const { messages } = require("./localize")

const { ALL_LANGS_NAME, ALL_LANGS } = require("./constants")
const {LANG_PLACEHOLDER} = require("./translate");

// from https://stackoverflow.com/a/3561711/1251543
function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const indexForType = (type) => type === 'markdown' || type === 'md'
    ? 'README.md'
    : type === 'html'
        ? 'index.html'
        : 'README.txt'

const TEMPLATE_TYPE_MAP = {
    html: 'html',
    md: 'markdown',
    markdown: 'markdown',
    txt: 'text',
    text: 'text'
}

const defaultTemplates = {}
const getDefaultTemplates = () => {
    if (Object.keys(defaultTemplates).length > 0) {
        return defaultTemplates
    }
    for (const type of Object.keys(TEMPLATE_TYPE_MAP)) {
        const templatePath = `../templates/${indexForType(type)}.hbs`
        const fullPath = resolve(join(__dirname, templatePath));
        const templateData = fs.readFileSync(fullPath).toString('utf8')
        defaultTemplates[type] = Handlebars.compile(templateData)
        defaultTemplates[TEMPLATE_TYPE_MAP[type]] = defaultTemplates[type]
    }
    return defaultTemplates
}

const templateTypeOf = (file) => {
    const msg = messages()
    const f = file.toLowerCase()
    if (!f.includes('.') || f.indexOf('.') === f.length - 1) {
        throw new HokeyError(msg.err_cannotNoExtCannotDetermineType.parseMessage({file}))
    }
    const type = TEMPLATE_TYPE_MAP[f.substring(f.lastIndexOf('.')+ 1 )]
    if (!type) {
        throw new HokeyError(msg.err_cannotInvalidExtCannotDetermineType.parseMessage({file}))
    }
    return type
}

const handleIndex = (o1, o2, sources) => {
    const msg = messages()
    const index = o1.index || o2.index
    if (!index) {
        return null
    }
    if (sources.length > 1) {
        throw new HokeyError(msg.err_index_singleFileMultipleSources)
    }
    const indexTemplate = o1.indexTemplate || o2.indexTemplate
    const resolved = resolve(index)
    const indexStat = fs.lstatSync(resolved, {throwIfNoEntry: false})
    let realIndexFile
    if (!indexStat) {
        const parentDir = dirname(resolved)
        const parentStat = fs.lstatSync(parentDir, {throwIfNoEntry: false})
        if (!parentStat) {
            throw new HokeyError(msg.err_index_parentDirDoesNotExist.parseMessage({parentDir}))
        }
        realIndexFile = join(parentDir, indexForType(templateTypeOf(sources[0])))

    } else if (indexStat.isFile()) {
        // index can be a file only when there is a single source
        realIndexFile = resolved

    } else if (indexStat.isDirectory()) {
        if (indexTemplate) {
            realIndexFile = join(resolved, basename(sources[0]))
        } else {
            realIndexFile = join(resolved, indexForType(templateTypeOf(sources[0])))
        }
    }
    return {
        indexFile: realIndexFile,
        indexTemplate: indexTemplate || templateTypeOf(realIndexFile),
        defaultTemplate: !indexTemplate
    }
}

const loadTemplate = (path) => {
    const msg = messages()
    let templateData = null
    let firstError = false
    try {
        templateData = fs.readFileSync(resolve(join(__dirname, templatePath)))
    } catch (e) {
        if (!firstError) {
            firstError = e
        }
    }
    if (!templateData) {
        throw new HokeyError(msg.err_index_templateLoadingError.parseMessage({path, e: firstError}))
    }
    try {
        return Handlebars.compile(templateData)
    } catch (e) {
        throw new HokeyError(msg.err_index_templateCompilationError.parseMessage({path, e}))
    }
}

const loadLocaleNames = (lang) => {
    return require(join(__dirname, `../messages/locales_${lang}.js`))
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
            program.error(chalk.redBright(msg.err_infileNotFound.parseMessage({ jsFile: source })))
            return
        }
        const outfiles = {}
        try {
            if (stat.isDirectory() || regular) {
                const inFiles = regular && !stat.isDirectory()
                    ? await readDirFiles(dirname(source), { match: new RegExp('^'+escapeRegex(source)+'$') })
                    : await readDirFiles(source, command)
                for (const lang of langs) {
                    if (lang.trim().length === 0 || lang === fromLang) {
                        continue
                    }
                    outfiles[lang] = await processDirectory(translate, source, inFiles, lang, command)
                }
            } else {
                const msgKeys = await readMessageKeys(source)
                for (const lang of langs) {
                    if (lang.trim().length === 0 || lang === fromLang) {
                        continue
                    }
                    outfiles[lang] = [await processFile(translate, source, msgKeys, lang, outfile, command)]
                }
            }
            if (sources.length === 1 && command.index) {
                const indexFile = command.index.indexFile
                const template = command.index.defaultTemplate
                    ? getDefaultTemplates()[command.index.indexTemplate]
                    : loadTemplate(command.index.indexTemplate)
                const inputNames = loadLocaleNames(fromLang)
                const ctxLangs = langs.map((lang) => { return {
                    iso: lang,
                    nativeName: loadLocaleNames(lang)[`locale_${lang}`],
                    inputName: inputNames[`locale_${lang}`],
                    relativePath: join(relative(indexFile, outfiles[lang][0]))
                }})
                const ctx = {
                    msg,
                    source: sources[0],
                    langs: ctxLangs
                }
                const indexData = template(ctx)
                fs.writeFileSync(indexFile, indexData)
                console.log(msg.info_index_wroteFile.parseMessage({ indexFile }))
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

module.exports = { runHokeyCommand, handleIndex }
