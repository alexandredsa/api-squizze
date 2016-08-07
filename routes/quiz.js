var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz');
var middleware = require('../middleware/interceptor');

/* GET home page. */
router.get('/', middleware, quizController.show);
router.post('/', middleware, quizController.create);
module.exports = router;