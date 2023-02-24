const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors.js');

const getAllRestaurants = (req, res, next) => {
    pool.query('SELECT * FROM restaurants', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};

const RestaurantById = (req, res, next) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['restaurants', 'store_id', req.params.id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
}


module.exports = {
    getAllRestaurants,
    RestaurantById
};