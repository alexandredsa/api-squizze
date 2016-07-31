var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Alternative = new Schema({
    _id: false,
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
    _id: false,
    wording: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        min: 0
    },
    alternatives: [Alternative]
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
    questions: [Question],
    questionCount: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    versionKey: false
});

// Validators
function isValidRewards() {
    return this.minReward < this.maxReward;
}


var Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;