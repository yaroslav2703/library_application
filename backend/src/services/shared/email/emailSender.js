const config = require('../../../../config')();

module.exports = class EmailSender {
    constructor(email) {
        this.email = email;
    }

    static get isConfigured() {
        return (!!config.email && !!config.email.host);
    }
};