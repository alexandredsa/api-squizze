var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var quizSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    bestScore: Number,
    lastScore: Number,
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

// the schema is useless so far
// we need to create a model using it
var Quiz = mongoose.model('quiz', quizSchema);

// make this available to our users in our Node applications
module.exports = Quiz;