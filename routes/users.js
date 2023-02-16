const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.js');

router.get('/', usersController.defaultRoute)

module.exports = router;