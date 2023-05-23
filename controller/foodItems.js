const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors.js');

const getAllFood = (req, res, next) => {
    pool.query('SELECT * FROM foodItems', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};

const foodById = (req, res, next) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['foodItems', 'user_id', req.params.id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        if(err) return errors(res, err);
        return res.json(rows);
    });
};

const addFood = (req, res, next) => {
    let sql = 'INSERT INTO ??(??,??) VALUES(?,?)';
    let rep = ['foodItems', 'food_name', 'rating', req.body.food_name, 0];
    sql = mysql.format(sql,rep);
    
    pool.query(sql, (err, rows) => {
        if(err) return errors(res, err);
        return res.send("Food Item Added");
    });
};

const deleteFood = (req, res, next) => {
    let sql = 'DELETE FROM ?? WHERE ?? = ?';
    let rep = ['foodItems', 'user_id', req.params.id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        if(err) return errors(res, err);
        return res.send("Food Item Deleted");
    });
};

module.exports = {
    getAllFood,
    foodById,
    addFood,
    deleteFood
};