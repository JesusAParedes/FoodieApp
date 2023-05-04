const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.js');
const { checkJwt } = require('../middleware')

router.get('/', usersController.defaultRoute);

//get all users
router.get('/users', usersController.getAllUsers);

//get user by id
router.get('/users/:id', usersController.userById);

//create a new user
router.post('/users', checkJwt, usersController.addUser);

//update a user's info
router.put('/users/:id', checkJwt, usersController.updateUser);

//delete the user off the app
router.delete('/users/:id', checkJwt, usersController.deleteUser);

module.exports = router;