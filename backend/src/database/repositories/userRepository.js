const AbstractRepository = require('./abstractRepository');
const User = require('../models/user');

module.exports = class UserRepository extends  AbstractRepository {
    static async findByEmail(email, options) {
        return this.wrapWithSessionIfExists(
            User.findOne({ email }),
            options,
        );
    }

    static async findByEmailWithoutAvatar(email, options) {
        return this.findByEmail(email, options);
    }

    static async findById(id, options) {
        return this.wrapWithSessionIfExists(
            User.findById(id),
            options,
        );
    }

    static async findByIdWithoutAvatar(id, options) {
        return this.findById(id, options);
    }
};