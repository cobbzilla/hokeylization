const fs = require('fs')
const path = require('path')
const chalk = require("chalk")

const { LANG_PLACEHOLDER, translateString } = require("./translate")
const { messages } = require("./localize")
const { HokeyError } = require("./error");

// adapted from https://stackoverflow.com/a/26828355/1251543
const walk = (dir, files = []) => {
    const msg = messages()
    let dirFiles
    try {
        dirFiles = fs.readdirSync(dir)
    } catch (e) {
        console.warn(chalk.yellowBright(msg.warn_walk_readDir.parseMessage({ dir, e })))
        return files
    }
    for (const f of dirFiles) {
        const stat = fs.lstatSync(dir + path.sep + f)
        if (stat.isDirectory()) {
            walk(dir + path.sep + f, files)
        } else {
            files.push(dir + path.sep + f)
        }
    }
    return files
}

const readDirFiles = async (dir, options = null) => {
    const msg = messages()
    const dryRun = !!options.dryRun
    const mch = options.match ? new RegExp(options.match) : null
    const exc = options.excludes ? options.excludes.map(ex => new RegExp(ex)) : null
    const outfileStat = fs.lstatSync(dir, {throwIfNoEntry: false})
    if (!outfileStat) {
        if (dryRun) {
            return []
        }
        try {
            fs.mkdirSync(dir, {recursive: true})
        } catch (e) {
            console.error(chalk.redBright(msg.err_readDirFiles_mkdir.parseMessage({ dir, e })))
        }
    } else if (!outfileStat.isDirectory()) {
        throw new HokeyError(msg.err_readDirFiles_notDir.parseMessage({ dir }))
    }
    const paths = walk(dir)
    const filtered = paths.filter(f => !mch || f.match(mch))
        .filter(f => !exc || !exc.find(excludeRegex => f.match(excludeRegex)))
    return filtered.map(path => {
        return {
            file: path,
            relative: path.substring(dir.length + 1),
            data: fs.readFileSync(path, 'utf8')
        }
    })
}

const processDirectory = async (translate, inDir, inFiles, lang, outfile, options) => {
    const msg = messages()
    const fromLang = options.fromLang
    const force = !!options.force
    const dryRun = !!options.dryRun
    const filter = options.filter ? require(options.filter).filter : null
    const langOut = outfile.replace(LANG_PLACEHOLDER, lang)
    if (langOut === outfile || !langOut.includes(lang)) {
        throw new HokeyError(msg.err_invalidOutfile.parseMessage({ lang }))
    }
    if (langOut === inDir) {
        throw new HokeyError(msg.err_cannotWriteSource.parseMessage({ source: inDir }))
    }
    const outFiles = await readDirFiles(langOut, options)
    for (const inFile of inFiles) {
        let langFile = outFiles.find(f => f.relative === inFile.relative);
        if (langFile) {
            if (!force) {
                console.log(msg.info_processDirectory_skippingExisting.parseMessage({ lang, langFile }))
                continue
            }
            langFile = langFile.file
        } else {
            langFile = path.resolve(path.join(langOut, inFile.relative))
        }
        const translation = dryRun ? '' : await translateString(translate, inFile.data, fromLang, lang, langFile, options)
        if (dryRun) {
            console.log(msg.info_dryRun_file.parseMessage({ langOut: langFile }))
        } else {
            const filtered = filter ? await filter(translation) : translation
            if (filtered !== translation) {
                console.log(msg.info_filter_applied.parseMessage({ langFile }))
            }
            fs.mkdirSync(path.dirname(langFile), {recursive: true})
            fs.writeFileSync(langFile, filtered)
            console.log(msg.info_processDirectory_fileWritten.parseMessage({ langFile }))
        }
    }
}

module.exports = { readDirFiles, processDirectory }
