var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: TextTrackCue,
    },
    link: String,
    image: String,
    description: String
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model('Book', BookSchema);

// Export the User model
module.exports = Book;
