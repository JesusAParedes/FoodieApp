const express = require('express');
const app = express();
const router = express.Router();
const loginRoutes = require('./login.js')
const usersRoutes = require('./users.js');
const foodRoutes = require('./foodItems.js');
const restaurantsRoutes = require('./restaurants.js');

router.use((req,res,next) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('Today:', today.toString())
    console.log(process.env.HOST, process.env.DBUSERNAME, process.env.PASSWORD, process.env.DATABASE, 'HOST, USERNAME, PW, DB' )
    next();
});

router.use(loginRoutes);

router.use(usersRoutes);

router.use(foodRoutes);

router.use(restaurantsRoutes);

module.exports = router;