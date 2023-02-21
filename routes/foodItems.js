const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodItems.js');

router.get('/food', foodController.getAllFood);

router.get('/food/:id', foodController.foodById);

module.exports = router;