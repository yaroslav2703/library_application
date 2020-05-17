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

        const {email, password} = req.body;

        const candidate = await User.findOne({email});

        if (candidate) {
           return res.status(400).json({ message: 'Такой пользователь уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 15);
        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({message: 'Пользователь создан'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
