var Credential = require('../models/credential');
var hat = require('hat');

module.exports = {
    auth: function(req, res) {
        var credentialDto = req.body;
        var passwordHash = toHash(credentialDto.password);
        Credential.count({
            email: credentialDto.email,
            passwordHash
        }, function(err, count) {
            if (!err) {
                if (count > 0) {
                    res.status(200);
                    var tokenHat = hat();
                    storeToken(tokenHat,credentialDto.email);
                    res.json({token:tokenHat});
                    return;
                }
                res.status(401);
                res.send('Unauthorized');
            } else {
                res.status(500);
                res.send('Server Error');
                throw err;
            }

        });
    },
    signup: function(req, res) {
        var credentialDto = req.body;

        Credential.count({
            email: credentialDto.email
        }, function(err, count) {
            if (err) {
                res.send('Server error');
                res.status(500);
                return;
            }


            if (count < 1) {
                var credential = new Credential();
                credential.email = credentialDto.email;
                credential.passwordHash = toHash(credentialDto.password);
                credential.save(function(err) {
                    res.status(err !== null ? 500 : 201);
                    res.send(err);
                });
                return;
            }

            res.status(403);
            res.send(credentialDto.email + ' is already registered');

        });

    }
};

function storeToken(tokenHat,email) {

    Credential.findOneAndUpdate({
        "email": email
    }, {
        "token": tokenHat
    }, function(err, cred) {});
}

function toHash(password) {
    var crypto = require("crypto");
    var sha256 = crypto.createHash("sha256");
    sha256.update(password, "utf8");
    var result = sha256.digest("base64");
    return result;
}