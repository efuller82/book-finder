var path = require('path');
var axios = require('axios');
var models = require('../models')

module.exports = function (app) {
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

    // api route for saved books
    app.post('/saved')
}