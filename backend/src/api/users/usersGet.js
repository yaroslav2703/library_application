const User = require('../../database/models/user');

module.exports = async (req, res) => {
    try{

        const users = await User.find();

        res.status(201).json({message: 'Выбраны все пользователи', users: users})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
