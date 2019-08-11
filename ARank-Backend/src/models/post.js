const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
    name: String,
    genre: [String],
    publishedDate: {
        type: Date,
        default: new Date()
    },
    like: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Post', Post);
