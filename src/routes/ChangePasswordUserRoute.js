const express = require('express');
const router = express.Router();
const changePasswordUserController = require('../controllers/ChangePasswordUserController');

router.get('/', changePasswordUserController.index);

module.exports = router;