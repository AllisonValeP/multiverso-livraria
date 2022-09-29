const express = require('express');
const router = express.Router()
const productController = require('../controllers/ProductController')
const isGuest = require("../middlewares/guest");

router.get('/:id',productController.show);

module.exports = router;