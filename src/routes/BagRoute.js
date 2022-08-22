const express = require('express');
const router = express.Router()
const bagController = require('../controllers/BagController')

router.get('/',bagController.index);

module.exports = router;
