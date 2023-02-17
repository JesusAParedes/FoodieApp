const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.js');

router.get('/', usersController.defaultRoute);

router.get('/users', usersController.getAllUsers);

router.get('/users/:id', usersController.userById);

router.post('/users', usersController.addUser)

module.exports = router;