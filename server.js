var express = require('express');
var mongoose = require('mongoose');

const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// initialize express
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// define api routes
require('./routes/api/')(app);
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/bookFinder", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
