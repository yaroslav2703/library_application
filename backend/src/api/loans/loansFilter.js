const Book = require('../../database/models/book');
const User = require('../../database/models/user');
const Loan = require('../../database/models/loan');

module.exports = async (req, res) => {
    try{
        const {isbn, issueDate, returnDate, email, dueDate, status} = req.body;
        let book = null;
        let member = null;

        const find_obj = {};

        if (isbn != null) {
            book = await Book.findOne({isbn});
            find_obj['book'] = book;
        }
        if (issueDate != null) {
            find_obj['issueDate'] = issueDate
        }
        if (returnDate != null) {
            find_obj['author'] = returnDate
        }
        if (email != null) {
            member = await User.findOne({email});
            find_obj['member'] = member;
        }
        if (dueDate != null) {
            find_obj['dueDate'] = dueDate
        }
        if (status != null) {
            find_obj['status'] = status
        }

        const loans = await Loan.find(find_obj);

        res.status(201).json({message: 'Список отфильтрован', loans: loans})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
