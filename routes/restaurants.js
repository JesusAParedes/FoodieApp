const express = require('express');
const router = express.Router();
const restaurantsController = require('../controller/restaurants.js');

router.get('/restaurants', restaurantsController.getAllRestaurants);

router.get('/restaurants/:id', restaurantsController.RestaurantById);

module.exports = router;