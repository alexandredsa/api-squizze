var express = require('express');
var router = express.Router();
var performanceController = require('../controllers/performance');
var middleware = require('../middleware/interceptor');

router.get('/', middleware, performanceController.show);
router.post('/', middleware, performanceController.create);
module.exports = router;