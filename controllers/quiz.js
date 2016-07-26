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
    create: function(req, res){
      var quiz = new Quiz(req.body);

      quiz.save(function (err){
           res.send(err == null) ? {msg: 'success'} : {msg : err}
      });
    }
};

//var Quiz = require('./models/quiz');
//
//var quizController = {
//  create: function(req, res) {
//    var quiz = req.body.quiz;
//     quiz.save(function(err) {
//        res.send(err == null) ? {msg: ''} : {msg : err}
//      });
//    };
//
//  show: function(req, res) {
//    Quiz.find({},function(err, quizzes){
//      if(!err)
//        res.send(quizzes);
//      else
//        throw err;
//        
//    });
//  }
//}
//
//module.exports = quizController;
