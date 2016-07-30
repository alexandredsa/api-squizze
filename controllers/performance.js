var Performance = require('../models/performance');

module.exports = {
    show: function(req, res) {
        Performance.find({}, function(err, performances) {
            if (!err)
                res.json(performances);
            else
                throw err;
        });
    },
    create: function(req, res) {
        var performance = new Performance(req.body);

        performance.save(function(err) {
            res.status(err !== null ? 400 : 200);
            res.send(err);
        });
    }
};