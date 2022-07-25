const express = require('express');
const router = express.Router()
const userController = require('../controllers/UserController')

router.get("/panel", userController.showPainel)

module.exports = router;