const User = require('../../database/models/user');
const Loan = require('../../database/models/loan');
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

        const {_id} = req.body;
        const nowDate = new Date();

        let user = await User.findOne({_id: _id});
        let loans_id = user.loans;
        let loans = await Loan.find({_id: loans_id});
        for (let loan in loans) {
            if (loan.status === "inProgress" && loan.dueDate < nowDate) {
                loan.status = "overdue";
                loan.save();
            }
        }

       loans = await Loan.find({_id: loans_id});
        res.status(201).json({message: 'Выбраны все выдачи', loans})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};