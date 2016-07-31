var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var credentialSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

var Credential = mongoose.model('credential', credentialSchema);

module.exports = Credential;