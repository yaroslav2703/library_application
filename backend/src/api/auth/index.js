const {check} = require('express-validator');

module.exports = (app) => {
    app.post(
        '/auth/register',
        [
            check('email', 'Некоректный email').isEmail(),
            check('password', 'Минимальная длина пароля 6 символов')
                .isLength({min: 6})
        ],
        require('./authRegister')
    );

    app.post(
        '/auth/login',
        [
            check('email', 'Введите коректный email').normalizeEmail().isEmail(),
            check('password', 'Введите пароль').exists()
        ],
        require('./authLogin')
    );
};