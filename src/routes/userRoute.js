<<<<<<< HEAD
const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.index);
router.get('/create', userController.create);


=======
const express = require('express');
const router = express.Router()
const userController = require('../controllers/UserController')

router.get('/', userController.index);
router.get('/create', userController.create);


>>>>>>> ca5a81fa3c38c60e2015352db2ec0db23c3d823f
module.exports = router;