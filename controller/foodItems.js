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
    //grabbing the necessary info from the header

    const auth_header = req.headers.authorization;

     //checking that the user has sent credentials
     if(!auth_header) {res.status(401).send('Unauthorized request');}
         //removing the word Bearer from the token
         const accessToken = auth_header.split(' ')[1];
         
         //decoding the jwt to grab the id from it
         const decoded = jwt_decode(accessToken);       
 
         //verifying if the token is real
         jwt.verify(accessToken, process.env.PRIVATEKEY, (err, payload) => { 
         if (err) res.status(401).send('Unauthorized request')
         //storing the user id to use it in the sql statement
         const id = decoded.id 

    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['foodItems', 'user_id', id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        if(err) return errors(res, err);
        return res.json(rows);
    }
    );
})}

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