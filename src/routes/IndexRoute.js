const express = require('express');
const router = express.Router()
const indexController = require('../controllers/IndexController')
const validate = require('../helpers/express-validator')
const isAuth = require('../middlewares/auth')
 // centralizar as rotas de login, create, 

router.get('/', indexController.index);

router.get('/login', indexController.login);
router.post('/login', indexController.auth);

router.get('/register', indexController.register);
router.post('/create', validate.validateRegistration, indexController.create);
router.post("/logout",indexController.logout);

module.exports = router;



