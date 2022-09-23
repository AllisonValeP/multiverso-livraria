const express = require('express');
const router = express.Router();
const changePasswordController = require('../controllers/ChangePasswordController');

router.get('/', changePasswordController.index);

module.exports = router;