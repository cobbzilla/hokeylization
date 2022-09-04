
const filter = async (data) => {
    return data.replaceAll(/]\(lang\//g, '](../')
}

module.exports = { filter }
