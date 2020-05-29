var https = require('https');
const WebSocket = require('ws');
var fs = require('fs');
const api = require('./src/api');

const PORT = process.env.PORT || 5000;

const wss = new WebSocket.Server({
    port: 8080
});

wss.on('connection', ws => {
    ws.on('message', message => {
        ws.send(message);
    });
});

var options = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.cer')
};

https.createServer(options, api).listen(PORT);

/*
api.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});*/