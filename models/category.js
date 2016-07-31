var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nestedQuiz = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    questionCount: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    versionKey: false
});

var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    quizzes: [nestedQuiz],
    requirements: {
        categories: [Schema.Types.ObjectId],
        itens: [Schema.Types.ObjectId]
    }
}, {
    versionKey: false
});

var Category = mongoose.model('category', categorySchema);

module.exports = Category;