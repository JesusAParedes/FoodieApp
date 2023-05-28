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
    let rep = ['foodItems', 'user_id', req.params.id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err, rows) => {
        if(err) return errors(res, err);
        return res.json(rows);
    });
};

const addFood = (req, res, next) => {
    //grabbing the necessary info from the header
    const auth_header = req.body.header.headers.Authorization;

     //checking that the user has sent credentials
     if(!auth_header) {res.status(401).send('Unauthorized request');}
     else {
         //removing the word Bearer from the token
         const accessToken = auth_header.split(' ')[1];
         
         //decoding the jwt to grab the id from it
         const decoded = jwt_decode(accessToken);       
 
         //verifying if the token is real
         jwt.verify(accessToken, process.env.PRIVATEKEY, (err, payload) => { 
         if (err) res.status(401).send('Unauthorized request')
         //storing the user id to use it in the sql statement
         const id = decoded.id
         
         let sql = 'INSERT INTO ??(??, ??,??) VALUES(?,?,?)';
         let rep = ['foodItems', 'user_id', 'food_name', 'rating', id ,req.body.food_name, 0];
         sql = mysql.format(sql,rep);
         
         
         pool.query(sql, (err, rows) => {
            console.log(id, 'ROWS');
            const newToken = jwt.sign({id: id}, process.env.PRIVATEKEY);
            
             if(err) return errors(res, err);

             //returning a newToken to be used
             return res.status(200).json({ newToken });
         });
         })}

    
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