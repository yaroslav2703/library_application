const {check} = require('express-validator');

module.exports = (app) => {
    app.get(
        '/users/get',
        require('./usersGet')
    );

    app.post(
        '/users/filter',
        require('./usersFilter')
    );

    app.post(
        '/users/add',
        [
            check('email', 'Некоректный email').isEmail(),
            check('role', 'Введите роль').exists()
        ],
        require('./usersAdd')
    );
};