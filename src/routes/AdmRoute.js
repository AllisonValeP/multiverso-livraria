const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')
const isAuthAdm = require('../middlewares/authAdm');

router.get('/', isAuthAdm,admController.index);
router.get('/product',isAuthAdm,admController.productShow);
router.get('/user', isAuthAdm,admController.userShow);
router.get('/order', isAuthAdm,admController.orderShow);
router.get('/profile', isAuthAdm,admController.profileShow);





module.exports = router;