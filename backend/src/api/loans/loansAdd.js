const Book = require('../../database/models/book');
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

        let {isbn, email, issueDate} = req.body;
        const dueDate = new Date(issueDate);
        issueDate = new Date(issueDate);
        const nowDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);

        let status = 'inProgress';

        const book = await Book.findOne({isbn});

        if (!book) {
            return res.status(400).json({ message: 'Такой книги нет'})
        }

        if (book.numberOfCopies < 1 || book.status === "unavailable" ) {
            return res.status(400).json({ message: 'Таких книг сейчас нет в наличии'})
        }

        const member = await User.findOne({email, role: 'member'});

        if (!member) {
            return res.status(400).json({ message: 'Такого читателя нет'})
        }

        const candidate = await Loan.findOne({book, member});

        if (candidate) {
            return res.status(400).json({ message: 'Этот читатель уже взял эту книгу'})
        }

        if ( nowDate >= issueDate && nowDate <= dueDate) {
            status = 'inProgress';
        }
        else if (nowDate > dueDate) {
            status = 'overdue';
        }

        loan = new Loan({book, member, issueDate, dueDate, status});

        await loan.save();
        const numberOfCopies = book.numberOfCopies;
        const newNumberOfCopies = Number(numberOfCopies) - 1;
        if (numberOfCopies === 1) {
           book.numberOfCopies = newNumberOfCopies;
           book.status = 'unavailable';
           book.save();
        }
        else {
            book.numberOfCopies = newNumberOfCopies;
            book.save();
        }

        member.loans.push(loan);
        member.save();

        res.status(201).json({message: 'Данные о выдаче книги успешно занесены'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};