const database = require('../database');
const config = require('../../../config')();

module.exports = class AbstractRepository {
    static getSession(options) {
        return (options && options.session) || undefined;
    }

    static wrapWithSessionIfExists(toWrap, options) {
        if (!this.getSession(options)) {
            return toWrap;
        }

        return toWrap.session(this.getSession(options));
    }
};