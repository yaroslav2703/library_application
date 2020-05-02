const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const authMiddleware = require('../auth/authMiddleware');
const {
    init: databaseInit,
    middleware: databaseMiddleware,
} = require('../database/databaseInit');

databaseInit().catch((error) => console.error(error));

app.use(databaseMiddleware);
app.use(authMiddleware);
app.use(bodyParser.json());


const routes = express.Router();

app.use('api/', routes);

const frontendDir = path.join(
    __dirname,
    "../../../frontend/",
);

if (fs.existsSync(frontendDir)){
    app.use('/', express.static(frontendDir));
}

module.exports = app;