const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')

router.get('/', admController.index);
router.get('/admProduct', admController.productShow);
router.get('/admUser', admController.userShow);
router.get('/admOrder', admController.orderShow);




module.exports = router;