var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    quizzes: [Schema.Types.ObjectId],
    requirements: {
        categories: [Schema.Types.ObjectId],
        itens: [Schema.Types.ObjectId]
    }
}, {
    versionKey: false
});

var Category = mongoose.model('category', categorySchema);

module.exports = Category;