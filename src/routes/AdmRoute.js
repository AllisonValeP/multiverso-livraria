const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')
const isAuthAdm = require('../middlewares/authAdm');
const indexController = require('../controllers/IndexController');

router.get('/', isAuthAdm,admController.index);
router.get('/product',isAuthAdm,admController.productShow);
router.get('/user', isAuthAdm,admController.userShow);
router.get('/order', isAuthAdm,admController.orderShow);
router.get('/profile', isAuthAdm,admController.profileShow);
router.get('/logout', isAuthAdm,indexController.logout);







module.exports = router;