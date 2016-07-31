var Quiz = require('../models/quiz');

module.exports = {
    show: function(req, res) {
        Quiz.find({}, function(err, quizzes) {
            if (!err)
                res.json(quizzes);
            else
                throw err;

        });
    },
    create: function(req, res) {
        var quiz = new Quiz(req.body);

        quiz.save(function(err) {
            res.status(err !== null ? 400 : 200);
            res.send(err);
        });
    }
};