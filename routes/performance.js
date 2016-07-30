var express = require('express');
var router = express.Router();
var performanceController = require('../controllers/performance');

router.get('/', performanceController.show);
router.post('/', performanceController.create);
module.exports = router;