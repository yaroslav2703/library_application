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

        const {_id, returnDate} = req.body;

       let loan =  await Loan.findOne({_id});
       loan.returnDate = returnDate;
       loan.status = "closed";
       await loan.save();
        res.status(200).json({message: 'Данные о выбранной выдаче книги обновлены'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
