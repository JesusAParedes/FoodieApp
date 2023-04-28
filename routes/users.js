const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.js');

router.get('/', usersController.defaultRoute);

//get all users
router.get('/users', usersController.getAllUsers);

//get user by id
router.get('/users/:id', usersController.userById);

//create a new user
router.post('/users', usersController.addUser);

//update a user's info
router.put('/users/:id', usersController.updateUser);

//delete the user off the app
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;