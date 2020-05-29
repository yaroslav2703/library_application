const Loan = require('../../database/models/loan');
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

        const {_id} = req.body;

        await Loan.deleteOne({_id});

        res.status(200).json({message: 'Данные о выбранной выдаче книги удалены'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
