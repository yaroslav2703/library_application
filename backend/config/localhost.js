const os = require('os');

module.exports = {
    env: 'localhost',

    database: {
        connection: 'mongodb+srv://admin:nodejs2020@clustercp-lpv1r.mongodb.net/web_library',
        transactions: false,
    },

    email: {
        comment: 'See https://nodemailer.com',
        from: 'yaroslav.pitsukha@gmail.com',
        host: null,
        auth: {
            user: null,
            pass: null,
        },
    },

    graphiql: true,

    clientUrl: 'http://localhost:8081',

    defaultUser: 'yaroslav.pitsukha@gmail.com',

    uploadDir: os.tmpdir(),

    authJwtSecret: '406e4987-e9a3-4281-8373-b14ca10e6886',

};