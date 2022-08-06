const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')

router.get('/', admController.index);
router.get('/product', admController.productShow);
router.get('/user', admController.userShow);
router.get('/order', admController.orderShow);
router.get('/profile', admController.profileShow);





module.exports = router;