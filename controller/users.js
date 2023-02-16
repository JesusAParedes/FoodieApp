const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors');

const defaultRoute = (req, res) => {
    console.log('Welcome to Foodies!')
    res.send('Welcome to Foodies!')
}

const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    }) 
};

const userById = (req, res) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['users', 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows)
    })
}

module.exports = {
    defaultRoute,
    getAllUsers,
    userById
}