const express = require('express');
const router = express.Router()
const admProductsController = require ('../controllers/AdmProductsController')

router.get('/', admProductsController.index);

module.exports = router;