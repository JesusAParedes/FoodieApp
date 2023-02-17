const mysql = require('mysql2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors');

const defaultRoute = (req, res) => {
    console.log('Welcome to Foodies!');
    res.send('Welcome to Foodies!');
};

const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};

const userById = (req, res) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['users', 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};

const addUser = (req, res) => {
    let sql = 'INSERT INTO ??(??, ??, ??) VALUES (?,?,?)';
    let rep = ['users', 'first_name', 'last_name', 'email', req.body.first_name, req.body.last_name, req.body.email];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User added");
    });
};

const updateUser = (req, res) => {
    let sql = 'UPDATE ?? SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?';
    let rep = ['users', 'first_name', req.body.first_name, 'last_name', req.body.last_name, 'email', req.body.email, 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User updated");
    });
};

const deleteUser = (req, res) => {
    let sql = 'DELETE FROM ?? WHERE ?? = ?';
    let rep = ['users', 'user_id', req.params.id];
    sql = mysql.format(sql,rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User deleted");
    });
}

module.exports = {
    defaultRoute,
    getAllUsers,
    userById,
    addUser,
    updateUser,
    deleteUser
};