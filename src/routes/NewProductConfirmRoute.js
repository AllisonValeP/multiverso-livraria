const express = require('express');
const router = express.Router()
const newProductConfirmController = require ('../controllers/NewProductConfirmController')

router.get('/', newProductConfirmController.index);

module.exports = router;