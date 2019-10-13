var express = require('express');
var mongoose = require('mongoose');

// initialize express
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

//!Need to connect to mongoose
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/bookFinder", { useNewUrlParser: true });

require('./routes/api-routes.js')(app);

// Listen on port 3000
app.listen(3000, function () {
    console.log('App running on port 3000!')
});
