const {check} = require('express-validator');

module.exports = (app) => {
    app.post(
        '/books/add',
        [
            check('isbn', 'Введите isbn').exists(),
            check('title', 'Введите название').exists(),
            check('author', 'Введите автора').exists(),
            check('numberOfCopies', 'Введите количество копий').exists()
        ],
        require('./booksAdd')
    );

    app.delete(
        '/books/delete',
        [
            check('isbn', 'Введите isbn').exists()
        ],
        require('./booksAdd')
    )
};