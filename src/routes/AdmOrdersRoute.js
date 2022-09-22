const express = require('express');
const router = express.Router()
const admOrdersController = require ('../controllers/AdmOrdersController')

router.get('/', admOrdersController.index);

module.exports = router;