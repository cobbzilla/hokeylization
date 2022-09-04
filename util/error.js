
function HokeyError (message) {
    this.message = `${message}`
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(this, TypeError)
    } else {
        // noinspection JSUnusedGlobalSymbols
        this.stack = (new Error(this.message)).stack
    }
    HokeyError.prototype.toString = () => JSON.stringify(this)
}

module.exports = { HokeyError }
