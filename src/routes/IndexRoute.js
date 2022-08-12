const express = require('express');
const router = express.Router()
const indexController = require('../controllers/IndexController')
const validate = require('../helpers/express-validator')
 // centralizar as rotas de login, create, 

router.get('/', indexController.index);

router.get('/login', indexController.loginShow);
router.post('/login', indexController.loginAuth);

router.get('/create', indexController.create);
router.post('/create', validate.validateRegistration, indexController.store);
router.post("/logout",indexController.logout);

module.exports = router;



