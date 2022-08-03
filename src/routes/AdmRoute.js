const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')

router.get('/', admController.index);
router.get('/product', admController.productShow);
router.get('/admuser', admController.userShow);
router.get('/admorder', admController.orderShow);




module.exports = router;