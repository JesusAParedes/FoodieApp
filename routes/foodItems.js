const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodItems.js');

router.get('/food', foodController.getAllFood);

module.exports = router;