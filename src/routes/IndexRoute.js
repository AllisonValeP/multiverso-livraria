const express = require('express');
const router = express.Router()
const indexController = require('../controllers/IndexController')
 // centralizar as rotas de login, create, 

router.get('/', indexController.index);
router.get('/create', indexController.create);
router.get('/login', indexController.loginShow);

module.exports = router;



