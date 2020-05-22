const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const databaseMiddleware = require('../database/databaseInit');

app.use(databaseMiddleware);
app.use(bodyParser.json());


const routes = express.Router();
require('./auth')(routes);
require('./users')(routes);
require('./books')(routes);
require('./loans')(routes);
require('./profile')(routes);
app.use('/api', routes);

const frontendDir = path.join(
    __dirname,
    "../../../frontend/dist",
);

if (fs.existsSync(frontendDir)){
      app.use('/', express.static(frontendDir));

      app.get('*', function(request, response) {
        response.sendFile(
            path.resolve(frontendDir, 'index.html'),
        );
    });
}


module.exports = app;