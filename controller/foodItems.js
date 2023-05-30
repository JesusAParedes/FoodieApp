const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors.js');
const { verifyHeader } = require('../controller/auth_header.js');
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');

const getAllFood = (req, res, next) => {
    pool.query('SELECT * FROM foodItems', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};

const foodById = (req, res, next) => {

    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['foodItems', 'user_id', req.userInfo];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        if(err) return errors(res, err);
        return res.json(rows);
    }
    );
}

const addFood = (req, res, next) => {
         console.log(req.userInfo);
         let sql = 'INSERT INTO ??(??,??,??,??) VALUES(?,?,?,?)';
         let rep = ['foodItems', 'user_id', 'food_name', 'restaurant', 'rating', req.userInfo ,req.body.food_name, req.body.restaurant, 0];
         sql = mysql.format(sql,rep);
         
         
         pool.query(sql, (err, rows) => {
            console.log(rows, 'ROWS');            
             if(err) return errors(res, err);
             return res.send("Food Added")
         });
         };


const updateFood =(req, res) => {
    console.log(req, 'REQ')
    let sql = 'UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?'
    let rep = [ 'foodItems', 'food_name', req.body.food_name, 'restaurant', req.body.restaurant, 'food_id', req.params.id ]

    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        console.log(rows);
        if(err) return errors(res, err);
        return res.send("Updated");
    })
}

const deleteFood = (req, res, next) => {
    console.log(req.userInfo)
    let sql = 'DELETE FROM ?? WHERE ?? = ?';
    let rep = [ 'foodItems', 'food_id', req.params.food_id ];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        console.log(rows, 'response from server')
        if(err) return errors(res, err);
        return res.send("Food Item Deleted");
    });
};

module.exports = {
    getAllFood,
    foodById,
    addFood,
    updateFood,
    deleteFood
};