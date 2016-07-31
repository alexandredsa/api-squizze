var Category = require('../models/category');

module.exports = {
    show: function(req, res) {
        Category.find({}, function(err, categories) {
            if (!err)
                res.json(categories);
            else
                throw err;
        });
    },
    create: function(req, res) {
        var category = new Category(req.body);
        category.save(function(err) {
            res.status(err !== null ? 400 : 200);
            res.send(err);
        });
    },
    update: function(req, res) {
        var category = req.body;
        Category.findByIdAndUpdate(category._id, req.body, function(err) {
            res.status(err !== null ? 400 : 200);
            res.send(err);
        });
    }
};