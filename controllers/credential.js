var Credential = require('../models/credential');

module.exports = {
    auth: function(req, res) {
        var credentialDto = req.body;

        var passwordHash = toHash(credentialDto.password);

        Credential.find({
            email: credentialDto.email,
            passwordHash
        }, function(err, credential) {
            if (!err)
                res.json(quizzes);
            else
                throw err;

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