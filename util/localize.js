const safeEval = require('safe-eval')
const fs = require('fs')
const chalk = require('chalk')
const {HokeyError} = require("./error");

// change the env var, don't change this
const DEFAULT_LOCALE = process.env.HOKEY_DEFAULT_LOCALE || 'en'

function evalInContext (ctx, string) {
    const context = { ctx }
    try {
        return safeEval('ctx.' + string.trim(), context)
    } catch (error) {
        try {
            return safeEval(string.trim(), ctx)
        } catch (errorWithoutThis) {
            return ''
        }
    }
}

String.prototype.parseMessage = function (ctx) {
    return this
        ? '' + this.replace(/{{[^}]+}}/g, (match) => {
        const expression = match.slice(2, -2)
        return evalInContext(ctx, expression)
    })
        : ''
}

// adapted from https://stackoverflow.com/a/46072415/1251543
const envLang = () => {
    const env = process.env;
    const loc = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE
    if (!loc) return DEFAULT_LOCALE
    const underscore = loc.indexOf('_')
    if (underscore === -1) {
        if (loc.length === 2 || loc.length === 3) {
            return loc
        }
        // We cannot use 'messages' here, we are figuring out what the language is!
        // Unfortunately this message is hard to translate, because it occurs before we know the language
        console.warn(`envLang: env value for language (${loc}) is not a valid ISO code, using default language: ${DEFAULT_LOCALE}`)
        return DEFAULT_LOCALE
    }
    return loc.substring(0, underscore)
}

let MESSAGES = null

const messagesFromFile = (file) => {
    const data = fs.readFileSync(file).toString('utf8').trim()
    const firstCurly = data.indexOf('{')
    return eval('Object.assign({}, ' + data.substring(firstCurly) + ')')
}

const messages = () => {
    if (MESSAGES) {
        return MESSAGES
    }
    let messages
    const lang = envLang()
    const langMessages = `${__dirname}/../messages/${lang}_messages.js`
    const defaultMessages = `${__dirname}/../messages/${DEFAULT_LOCALE}_messages.js`
    try {
        messages = messagesFromFile(langMessages)
    } catch (e) {
        console.warn(chalk.yellowBright(`messages: ${e}`))
        messages = messagesFromFile(defaultMessages)
    }
    MESSAGES = messages
    return messages
}

module.exports = { messages }
