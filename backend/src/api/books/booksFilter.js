const Book = require('../../database/models/book');

module.exports = async (req, res) => {
    try{

        const {isbn, title, author, status} = req.body;

        const find_obj = {};
        if (isbn != null) {
            find_obj['isbn'] = isbn
        }
        if (title != null) {
            find_obj['title'] = title
        }
        if (author != null) {
            find_obj['author'] = author
        }
        if (status != null) {
            find_obj['status'] = status
        }

        const books = await Book.find(find_obj);

        res.status(201).json({message: 'Список отфильтрован', books: books})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
