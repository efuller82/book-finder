import axios from "axios";
var path = require("path");
var mongojs = require('mongojs');
var models = require('../models');
var mongoose = require('mongoose');

var express = require('express');


// Database configuration
var databaseUrl = 'bookFinder';
var collections = ['books'];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on('error', function (error) {
    console.log('Database Error:', error);
});

module.exports = function (app) {
    app.get('/books', function (req, res) {
        //find all saved books
        models.books.find({})
            .then(function (dbBook) {
                res.json(dbBook);
            })
            .catch(function (err) {
                res.json(err);
            });
    })

    app.post('/books', function (req, res) {
        models.books.create(req.body)
            .then(function (response) {
                console.log(response);
                res.json({ successful: response });
            });
    });
}
