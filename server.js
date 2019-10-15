var express = require('express');
var mongoose = require('mongoose');

const routes = require('./src/routes');
const PORT = process.env.PORT || 3000;

// initialize express
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// define api routes
app.use(routes)

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/bookFinder", { useNewUrlParser: true });

//! confused; don't know if i need this anymore
// require('./routes/api-routes.js')(app);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
