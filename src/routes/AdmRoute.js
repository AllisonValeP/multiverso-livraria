const express = require('express');
const router = express.Router()
const admController = require('../controllers/AdmController')
const isAuthAdm = require('../middlewares/authAdm');
const indexController = require('../controllers/IndexController');
const upload = require('../helpers/multer');
const imgCompress = require('../middlewares/file-compressImg');

router.get('/', isAuthAdm,admController.index);

router.get('/product',isAuthAdm,admController.productShow);
router.get('/create-product',isAuthAdm,admController.createProduct);
router.post('/create-product',isAuthAdm,upload.single('file'),imgCompress,admController.updateProduct);

router.get('/users', isAuthAdm,admController.users);
router.get('/user/:id', isAuthAdm,admController.userShow);

router.get('/order', isAuthAdm,admController.orderShow);
router.get('/profile', isAuthAdm,admController.profileShow);
router.get('/logout', isAuthAdm,indexController.logout);







module.exports = router;