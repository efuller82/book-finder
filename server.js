var express = require('express');
var mongojs = require('mongojs');
var path = require('path');

var mongoose = require('mongoose');

// initialize express
var app = express();

// database configuration
var databaseUrl = 'bookFinder';
var collections = ['savedBooks'];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on('error', function (error) {
    console.log('Database Error', error);
});


require('./routes/api-routes.js')(app);

// Listen on port 3000
app.listen(3000, function () {
    console.log('App running on port 3000!')
});
