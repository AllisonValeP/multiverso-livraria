const express = require('express');
const router = express.Router();
const indexController = require('../controllers/IndexController');
const {validateRegistration} = require('../helpers/express-validator');
const isAuth = require('../middlewares/auth');
const isGuest = require("../middlewares/guest");
const validateAdm = require("../middlewares/validateAdm");

 // centralizar as rotas de login, create, 

router.get('/',validateAdm, indexController.index);

router.get('/login', isGuest,indexController.login);
router.post('/login', isGuest,indexController.auth);

router.get('/register', isGuest,indexController.register);
router.post('/create', isGuest,validateRegistration, indexController.create);
router.post("/logout",isAuth,indexController.logout);

module.exports = router;



