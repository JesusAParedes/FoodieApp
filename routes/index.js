const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.js');

router.use((req,res,next) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('Today:', today.toString())
    next();
})

router.get('/', usersController.defaultRoute);

router.get('/users', usersController.getAllUsers);

router.get('/users/:id', usersController.userById);

router.post('/users', usersController.addUser);

router.put('/users/:id', usersController.updateUser);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;