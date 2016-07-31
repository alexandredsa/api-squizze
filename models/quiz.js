var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Alternative = new Schema({
    text: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false 
});


var Question = new Schema({
    wording: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true,
        min: 0
    },
    alernatives: [Alternative]
}, {
    versionKey: false 
});

var quizSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    passingScore: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    minReward: {
        type: Number,
        required: true,
        min: 0,
        validate: [isValidRewards, 'Minimum reward must be lower than maximum.']
    },
    maxReward: {
        type: Number,
        required: true,
        min: 0
    },
    questions: [Question]
}, {
    versionKey: false 
});

// Validators
function isValidRewards() {
    return this.minReward < this.maxReward;
}


var Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;