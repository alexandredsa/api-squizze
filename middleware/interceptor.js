var Credential = require('../models/credential');

module.exports = function(req, res, next) {
    var token = req.headers['app-token'];

    if (!token) {
        res.status('403');
        res.send('Does not have a token');
        return;
    }


    isTokenValid(token, function(result) {
        if (result)
            return next();

        res.status('403');
        res.send('Invalid token');
    });


};

function isTokenValid(headerToken, callback) {
    Credential.count({
            token: headerToken
        },
        function(err, count) {
            if (err)
                callback(false);

            callback(count > 0);
        });
}