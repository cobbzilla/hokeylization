const { escapeRegex } = require('../constants')

const filter = async (data, dirName, newPrefix = '..') => {
    const re = new RegExp('\\]\\(' + escapeRegex(dirName) + '\/', 'gu')
    return data.replaceAll(re, '](' + newPrefix + '/')
}

module.exports = { filter }
