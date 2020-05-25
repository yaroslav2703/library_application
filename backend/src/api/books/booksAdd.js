const Book = require('../../database/models/book');
const {validationResult} = require('express-validator');

module.exports = async (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при добавлении книги'
            })
        }

        const {isbn, title, author, numberOfCopies} = req.body;

        const candidate = await Book.findOne({isbn});

        if (candidate) {
            return res.status(400).json({ message: 'Такая книга уже имеется'})
        }

        let book = null;
        if (numberOfCopies === 0){
            book = new Book({ isbn, title, author, numberOfCopies, status: "unavailable" });
        }
        else {
            book = new Book({ isbn, title, author, numberOfCopies, status: "available" });
        }


        await book.save();

        res.status(201).json({message: 'Книга добавлена'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
