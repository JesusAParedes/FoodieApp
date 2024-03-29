const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.js');
const foodRoutes = require('./foodItems.js');
// const restaurantsRoutes = require('./restaurants.js');

router.use((req, res, next) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('Today:', today.toString())
    next();
});

router.use('/food', foodRoutes);

router.use(usersRoutes);

// router.use(restaurantsRoutes);

module.exports = router;