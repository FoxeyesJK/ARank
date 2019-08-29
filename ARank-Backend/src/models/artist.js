const mongoose = require('mongoose');

const { Schema } = mongoose;

const Artist = new Schema({
    name: String,
    genres: [String],
    publishedDate: {
        type: Date,
        default: new Date()
    },
    like: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Artist', Artist);