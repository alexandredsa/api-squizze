var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', quizController.show);
router.post('/', quizController.create);

module.exports = router;