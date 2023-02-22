const express = require('express');
const app = express();
const router = express.Router();
const usersRoutes = require('./users.js');
const foodRoutes = require('./foodItems.js')

router.use((req,res,next) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('Today:', today.toString())
    next();
});

router.use(usersRoutes);

router.use(foodRoutes);

module.exports = router;