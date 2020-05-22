const Book = require('../../database/models/book');
const {validationResult} = require('express-validator');

module.exports = async (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при удалении книги'
            })
        }

        const {isbn} = req.body;

        const book = await Book.findOne({isbn});

        if(!book) {
            return res.status(400).json({ message: 'Книга не найдена'})
        }


        await Book.delete({isbn});

        await book.save();

        res.status(200).json({message: 'Книга удалена'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
