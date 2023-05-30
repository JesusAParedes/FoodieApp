const express = require('express');
const router = express.Router();
const { checkToken } = require('../controller/auth_header')
const foodController = require('../controller/foodItems.js');

//get all types of food
router.get('/food', foodController.getAllFood);

//get food for each user
router.get('/food/:id', checkToken, foodController.foodById);

//add food to user's list
router.post('/food', checkToken,  foodController.addFood);

//update food
router.put('/food/:id', checkToken, foodController.updateFood)

router.put('/rating/:id', checkToken, foodController.updateRating)

//delete food from user's list
router.delete('/food/:food_id', checkToken, foodController.deleteFood);

module.exports = router;