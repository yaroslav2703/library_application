const Book = require('../../database/models/book');

module.exports = async (req, res) => {
    try{

        const books = await Book.find();

        res.status(201).json({message: 'Выбраны все книги', books: books})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
