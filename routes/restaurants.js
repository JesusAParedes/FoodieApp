const express = require('express');
const router = express.Router();
const restaurantsController = require('../controller/restaurants.js');

router.get('/restaurant', restaurantsController.getAllRestaurants);

module.exports = router;