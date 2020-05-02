const UserRepository = require('../../database/repositories/userRepository');
const EmailSender = require('../shared/email/emailSender');
const jwt = require('jsonwebtoken');
const config = require('../../../config')();

class AuthService {
    static async signup(email, password, options = {}) {

    }

    static async signin(email, password, options = {}) {

    }

    static async findByToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(
                token,
                config.authJwtSecret,
                (err, decoded) => {
                    if (err) {
                        reject(err);
                    }

                    const id = decoded.id;
                    this.findById(id)
                        .then((user) => resolve(user))
                        .catch((error) => reject(error));
                },
            );
        });
    }

    static async findById(id) {
        const user = await UserRepository.findByIdWithoutAvatar(id,);
    }

    static async findByEmail(email) {
        const user = await UserRepository.findByEmailWithoutAvatar(
            email,
        );

        if (user && !EmailSender.isConfigured) {
            user.emailVerified = true;
        }

        return user;
    }

    static async sendEmailAddressVerificationEmail(
        language,
        email,
    ) {

    }

    static async sendPasswordResetEmail(language, email) {

    }

    static async verifyEmail(token, options = {}) {

    }

    static async passwordReset(
        token,
        password,
        options = {},
    ) {

    }
}

module.exports = AuthService;