var Credential = require('../models/credential');
var hat = require('hat');

module.exports = {
    auth: function(req, res) {
        var credentialDto = req.body;
        var passwordHash = toHash(credentialDto.password);
        Credential.find({
            email: credentialDto.email,
            passwordHash
        }, function(err, credential) {
            if (!err)
                res.send(hat());
            else
                throw err;

        });
    },
    signup: function(req, res) {
        var credentialDto = req.body;
        var credential = new Credential();
        credential.email = credentialDto.email;
        credential.passwordHash = toHash(credentialDto.password);
        credential.save(function(err) {
            res.status(err !== null ? 400 : 201);
            res.send(err);
        });
    }
};

function toHash(password) {
    var crypto = require("crypto");
    var sha256 = crypto.createHash("sha256");
    sha256.update(password, "utf8");
    var result = sha256.digest("base64");
    return result;
}