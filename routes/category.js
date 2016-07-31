var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category');

router.get('/', categoryController.show);
router.post('/', categoryController.create);
router.put('/', categoryController.update);

module.exports = router;