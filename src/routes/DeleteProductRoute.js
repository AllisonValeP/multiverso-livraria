const express = require('express');
const router = express.Router()
const deleteProductController = require ('../controllers/DeleteProductController')

router.get('/', deleteProductController.index);

module.exports = router;