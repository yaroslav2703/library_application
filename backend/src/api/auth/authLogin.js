const User = require('../../database/models/user');
const config = require('../../../config')();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');

module.exports = async (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({ message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пороль, попробуйте снова'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.authJwtSecret,
            {expiresIn: '1h'}
        );

        await res.json({message: 'Пользователь успешно найден', token, userId: user.id, userRole: user.role})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
