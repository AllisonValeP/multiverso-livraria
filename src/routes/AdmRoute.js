const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')

router.get('/', admController.index);

module.exports = router;