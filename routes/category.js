var express = require('express');
var router = express.Router();
var middleware = require('../middleware/interceptor');
var categoryController = require('../controllers/category');

router.get('/', middleware, categoryController.show);
router.post('/', middleware, categoryController.create);
router.put('/', middleware, categoryController.update);

module.exports = router;