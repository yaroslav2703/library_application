const Loan = require('../../database/models/loan');

module.exports = async (req, res) => {
    try{

        let loans = await Loan.find();
        const nowDate = new Date();
        for (let loan in loans) {
            if (loan.status === "inProgress" && loan.dueDate < nowDate) {
                loan.status = "overdue";
                loan.save();
            }
        }

        loans = await Loan.find();

        res.status(201).json({message: 'Выбраны все выдачи', loans: loans})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
