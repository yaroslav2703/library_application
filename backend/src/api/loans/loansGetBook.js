const Book = require('../../database/models/book');

module.exports = async (req, res) => {
    try{
        const {_id} = req.body;

        const book = await Book.findOne({_id});

        res.status(201).json({message: 'Выбрана нужная книга', book})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
