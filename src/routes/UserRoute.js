const express = require('express');
const router = express.Router()
const userController = require('../controllers/UserController')
const isGuest = require("../middlewares/guest");
const isAuth = require('../middlewares/auth');


router.get("/perfil", isAuth,userController.showPainel)

module.exports = router;