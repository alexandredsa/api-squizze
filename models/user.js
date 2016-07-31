var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
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