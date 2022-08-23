const express = require('express');
const router = express.Router()
const finalizeOrderController = require ('../controllers/FinalizeOrderController')

router.get('/', finalizeOrderController.index);

module.exports = router;