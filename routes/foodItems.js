const express = require('express');
const router = express.Router();
const { checkToken } = require('../controller/auth_header')
const foodController = require('../controller/foodItems.js');

//get all types of food
// router.get('/food', foodController.getAllFood);

//get food for each user
router.get('/:id', checkToken, foodController.foodById);

//add food to user's list
router.post('/', checkToken,  foodController.addFood);

//update food
router.put('/:id', checkToken, foodController.updateFood)

//update rating
router.put('/rating/:food_id', checkToken, foodController.updateRating)

//delete food from user's list
router.delete('/:food_id', checkToken, foodController.deleteFood);

module.exports = router;