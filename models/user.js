var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    progress: {
        categories: [Schema.Types.ObjectId],
        quizzes: [Schema.Types.ObjectId],
        itens: [Schema.Types.ObjectId]
    }
}, {
    versionKey: false
});

var User = mongoose.model('user', userSchema);

module.exports = User;