const mongoose = require('mongoose');
const config = require('../../config')();

module.exports =  async (req, res, next) => {
    try{
        if (!mongoose.connection.readyState) {
             await mongoose.connect(config.database.connection,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                useCreateIndex: true
            }).then(() => console.log('MongoDB connected'))
        }
    } catch (error) {
        console.error('Server Error', error.message);
        res.sendStatus(500);
        return;
    }
    return next();
};
