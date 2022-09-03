const fs = require('fs')
const path = require('path')
const { LANG_PLACEHOLDER, translateString } = require("./translate");

// adapted from https://stackoverflow.com/a/26828355/1251543
const walk = (dir, files = []) => {
    let dirFiles
    try {
        dirFiles = fs.readdirSync(dir)
    } catch (e) {
        console.warn(`walk(${dir}): error reading: ${e}`)
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

const readDirFiles = async (dir) => {
    const outfileStat = fs.lstatSync(dir, {throwIfNoEntry: false})
    if (!outfileStat) {
        try {
            fs.mkdirSync(dir, {recursive: true})
        } catch (e) {
            console.error(`readDirFiles(${dir}): error reading: ${e}`)
        }
    } else if (!outfileStat.isDirectory()) {
        throw new TypeError(`processDirectory: not a directory: ${dir}`)
    }
    const paths = walk(dir)
    const files = paths.map(path => {
        return {
            file: path,
            relative: path.substring(dir.length + 1),
            data: fs.readFileSync(path, 'utf8')
        }
    })
    return files
}

const processDirectory = async (translate, inDir, inFiles, lang, outfile, force, handlebars) => {
    const langOut = outfile.replace(LANG_PLACEHOLDER, lang)
    if (langOut === outfile || !langOut.includes(lang)) {
        throw new TypeError(`processDirectory: expected outfile to contain 'LANG' (to be replaced with ${lang})`)
    }
    if (langOut === inDir) {
        throw new TypeError(`processDirectory: refusing to overwrite input lang directory: ${inDir}`)
    }
    const outFiles = await readDirFiles(langOut)
    for (const inFile of inFiles) {
        let langFile = outFiles.find(f => f.relative === inFile.relative);
        if (langFile) {
            if (!force) {
                console.log(`processDirectory(${lang}): skipping existing file: ${langFile.file}`)
                continue
            }
        } else {
            langFile = path.resolve(path.join(langOut, inFile.relative))
        }
        const translation = await translateString(translate, inFile.data, lang, handlebars)
        fs.mkdirSync(path.dirname(langFile), {recursive: true})
        fs.writeFileSync(langFile, translation)
        console.log(`WROTE: ${langFile}`)
    }
}

module.exports = { readDirFiles, processDirectory }
