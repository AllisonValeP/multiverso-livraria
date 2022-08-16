const express = require('express');
const router = express.Router()
const purchaseController = require("../controllers/PurchaseController")
const isAuth = require('../middlewares/auth');

router.get('/',isAuth,purchaseController.index)

module.exports = router;