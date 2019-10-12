var express = require('express');
var mongoose = require('mongoose');

// initialize express
var app = express();


//!Need to connect to mongoose
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/bookFinder", { useNewUrlParser: true });

require('./routes/api-routes.js')(app);

// Listen on port 3000
app.listen(3000, function () {
    console.log('App running on port 3000!')
});
