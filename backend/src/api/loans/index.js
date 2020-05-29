const {check} = require('express-validator');

module.exports = (app) => {

    app.get(
        '/loans/get',
        require('./loansGet')
    );

    app.post(
        '/loans/filter',
        require('./loansFilter')
    );

    app.post(
        '/loans/get_member',
        require('./loansGetMember')
    );

    app.post(
        '/loans/get_book',
        require('./loansGetBook')
    );

    app.post(
        '/loans/get_by_user',
        [
            check('_id', 'укажите _id').exists()
        ],
        require('./loansGetByUser')
    );

    app.post(
        '/loans/add',
        [
            check('isbn', 'Введите isbn').exists(),
            check('email', 'Введите email читателя').isEmail(),
            check('issueDate', 'Введите дату выдачи').exists()
        ],
        require('./loansAdd')
    );

    app.delete(
        '/loans/delete',
        [
            check('_id', 'укажите _id').exists()
        ],
        require('./loansDelete')
    );

    app.put(
        '/loans/update',
        [
            check('_id', 'укажите _id').exists()
        ],
        require('./loansUpdate')
    );
};