// server.js
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// tu configuración express aquí

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// Para http
httpServer.listen(8080);
// Para  https
httpsServer.listen(8443);

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});