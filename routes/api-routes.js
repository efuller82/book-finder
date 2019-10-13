// var path = require('path');
var axios = require('axios');
var db = require('../models/index')
//! How do I connect to mongodb here?
//! I'm having trouble understanding how models interact with mongodb

module.exports = function (app) {
    //! object data in console looks strange; times out on postman
    // getting the books from google books api
    app.get('/search', (req, res) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=1984')
            .then((response) => {
                console.log('response', response.data)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    )

    // ! no error but nothing happens
    // api route to post saved books
    app.post('/saved', (req, res) => {
        console.log(req.body);
        db.Book.create(req.body).then(
            (response) => {
                console.log(response);
                res.json(response);
            }
        ).catch(
            err => {
                res.json(err);
            }
        );
    });

    // ! no error but nothing happens
    // api route to get saved books from database
    app.get('/saved', function (req, res) {
        //Find all results from the scrapedData collection in the db
        db.Book.find({}, function (error, found) {
            // Throw any errors to the console
            if (error) {
                console.log(error);
            }
            // If there are no errors, send the data to the browser as json
            else {
                res.json(found);
            }
            console.log(found);
        });
    });


};