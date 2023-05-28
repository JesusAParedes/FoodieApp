const express = require('express');
const router = express.Router();
const { verifyHeader, checkToken } = require('../controller/auth_header')
const foodController = require('../controller/foodItems.js');

//get all types of food
router.get('/food', foodController.getAllFood);

//get food for each user
router.get('/food/:id', verifyHeader, foodController.foodById);

//add food to user's list
router.post('/food', checkToken,  foodController.addFood);

//delete food from user's list
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;