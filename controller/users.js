const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors');

const defaultRoute = (req, res, next) => {
    console.log('Welcome to Foodies!');
    res.send('Welcome to Foodies!');
    next();
};

const getAllUsers = (req, res, next) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
    next();
};


const userById = (req, res, next) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['users', 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
    next();
};

const addUser = (req, res, next) => {
    let sql = 'INSERT INTO ??(??, ??, ??) VALUES (?,?,?)';
    let rep = ['users', 'first_name', 'last_name', 'email', req.body.first_name, req.body.last_name, req.body.email];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User added");
    });
    next();
};

const updateUser = (req, res, next) => {
    let sql = 'UPDATE ?? SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?';
    let rep = ['users', 'first_name', req.body.first_name, 'last_name', req.body.last_name, 'email', req.body.email, 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User updated");
    });
    next();
};

const deleteUser = (req, res, next) => {
    let sql = 'DELETE FROM ?? WHERE ?? = ?';
    let rep = ['users', 'user_id', req.params.id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User deleted");
    });
    next();
}

module.exports = {
    defaultRoute,
    getAllUsers,
    userById,
    addUser,
    updateUser,
    deleteUser
};