const mysql = require('mysql2');
const argon2 = require('argon2');
const pool = require('../mysql/connection.js');
const { errors } = require('../mysql/errors');
const jwt = require('jsonwebtoken');

const defaultRoute = (req, res, next) => {
    console.log('Welcome to Foodies!');
    res.send('Welcome to Foodies!');
    // next();
};

const login = async (req, res, next) => {
    const { username, password } = req.body;

    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['users', 'username', username]
    sql = mysql.format(sql,rep);

    pool.query(sql, async (err, rows) => {
        //if error return the error
        if(err) return errors(res, err);
        //if nothing is typed in to username
        if(!rows[0]) return errors(res, {err: 'This user does not exist.'});
        const hash = rows[0].password;
        const match = await argon2.verify(hash, password);
        if(!match) return errors(res, {err: 'This password does not match.'})
        if(match) {
            const token = jwt.sign({id: rows[0].user_id}, process.env.PRIVATEKEY)
            
            
            return res.status(200).json({ token })
        }
    })
};

const getAllUsers = (req, res, next) => {
    console.log('inside GET all users route')
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        console.log(rows)
        return res.json(rows);
    });
};

const userById = (req, res, next) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let rep = ['users', 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    });
};

const addUser = async (req, res, next) => {
    if(!req.body) return res.status(400);

    let sql = 'INSERT INTO ??(??, ??, ??, ??, ??) VALUES (?,?,?,?,?)';
    const hash = await argon2.hash(req.body.password);
    let rep = ['users', 'first_name', 'last_name', 'email', 'username', 'password', req.body.first_name, req.body.last_name, req.body.email, req.body.username, hash];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err,rows) => {
        console.log(rows.insertId, 'ROWS')
        if (err) return errors(res, err);
        const token = jwt.sign({id: rows.insertId}, process.env.PRIVATEKEY)
        return res.status(200).json({ token });
    });
};

const updateUser = (req, res, next) => {
    let sql = 'UPDATE ?? SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?';
    let userId = parseInt(req.params.id);
    let body = req.body;
    
    let rep = ['users', 'first_name', req.body.first_name, 'last_name', req.body.last_name, 'email', req.body.email, 'user_id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err,rows) => {
        if (err) return errors(res, err);
        return res.send("User updated");
    });
};

const deleteUser = (req, res, next) => {
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
    deleteUser,
    login
};