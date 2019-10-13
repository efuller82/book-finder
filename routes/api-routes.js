// var path = require('path');
var axios = require('axios');
var db = require('../models/index')

module.exports = function (app) {
    //! data comes back correctly in console but does not print to /search
    // getting the books from google books api
    app.post('/search', (req, res) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=1984')
            .then((response) => {
                res.json(response.data.items);
                console.log('response', response.data.items)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    )

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

    // route for deleting from db
    app.delete('/saved/:_id', (req, res) => {
        db.Book.findByIdAndDelete(req.params.id)
            .then((response) => {
                res.json(response);
            }
            ).catch(
                (err) => {
                    res.json(err);
                });
    });

};