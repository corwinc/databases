var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan'); //logger
var parser = require('body-parser'); //parser

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing ** "MOUNTS" TO WHOLE APPLICATION ?
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes (for API requests)
app.use('/classes', router);//router functions will only be used on directory /classes

// Serve the client files
app.use(express.static(__dirname + '/../client')); 

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

