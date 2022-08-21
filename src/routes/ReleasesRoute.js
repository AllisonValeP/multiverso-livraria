const express = require('express');
const router = express.Router()
const releasesController = require ('../controllers/ReleasesController')

router.get('/', releasesController.index);

module.exports = router;