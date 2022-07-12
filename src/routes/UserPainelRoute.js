const express = require('express');
const router = express.Router()
const userPainelController = require('../controllers/UserPainelController')

router.get('/', userPainelController.index);

module.exports = router;