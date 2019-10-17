import axios from "axios";
var path = require("path");
var mongojs = require('mongojs');
var db = require('../models');
var mongoose = require('mongoose');

var express = require('express');


// // Database configuration
// var databaseUrl = 'bookFinder';
// var collections = ['books'];

// // Hook mongojs configuration to the db variable
// var db = mongojs(databaseUrl, collections);
db.on('error', function (error) {
    console.log('Database Error:', error);
});

module.exports = function (app) {
    app.get('/api/books', function (req, res) {
        //find all saved books
        db.books.find({})
            .then(function (dbBook) {
                res.json(dbBook);
            })
            .catch(function (err) {
                res.json(err);
            });
    })

    app.post('/api/books', function (req, res) {
        db.books.create(req.body)
            .then(function (response) {
                console.log(response);
                res.json({ successful: response });
            });
    });
    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}
