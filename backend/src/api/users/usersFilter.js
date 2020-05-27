const User = require('../../database/models/user');

module.exports = async (req, res) => {
    try{

        const {email, disabled, firstName, lastName, role} = req.body;


        const find_obj = {};
        if (email != null) {
            find_obj['email'] = email
        }
        if (disabled != null) {
            find_obj['disabled'] = disabled
        }
        if (firstName != null) {
            find_obj['firstName'] = firstName
        }
        if (lastName != null) {
            find_obj['lastName'] = lastName
        }
        if (role != null) {
            find_obj['role'] = role
        }

        const users = await User.find(find_obj);

        res.status(201).json({message: 'Список отфильтрован', users: users})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
