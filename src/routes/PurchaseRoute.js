const express = require('express');
const router = express.Router()
const purchaseController = require("../controllers/PurchaseController")

router.get('/',purchaseController.index)

module.exports = router;