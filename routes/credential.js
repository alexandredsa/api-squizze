var express = require('express');
var router = express.Router();
var credentialController = require('../controllers/credential');

router.post('/signup', credentialController.signup);
router.post('/login', credentialController.auth);

module.exports = router;