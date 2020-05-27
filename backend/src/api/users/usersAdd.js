const User = require('../../database/models/user');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

module.exports = async (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {email, firstName, secondName, phoneNumber, role} = req.body;
        const password = '123456';
        const candidate = await User.findOne({email});

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует'})
        }
        if (role !== 'member' && role !== 'librarian') {
            return res.status(400).json({ message: 'Неправильно указана роль'})
        }
        const hashedPassword = await bcrypt.hash(password, 15);
        const user = new User({ firstName, lastName: secondName, phoneNumber, email, password: hashedPassword,  role: role });

        await user.save();

        res.status(201).json({message: 'Пользователь добавлен'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
