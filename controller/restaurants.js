const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors.js');

const getAllRestaurants = (req, res, next) => {
    pool.query('SELECT * FROM restaurants', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};


module.exports = {
    getAllRestaurants
};