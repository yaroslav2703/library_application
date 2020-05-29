const User = require('../../database/models/user');

module.exports = async (req, res) => {
    try{
        const {_id} = req.body;

        const user = await User.findOne({_id});

        res.status(201).json({message: 'Выбран нужный читатель', user})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};