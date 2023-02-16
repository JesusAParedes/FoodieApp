const express = require('express');
const app = express();
const pool = require('./mysql/connection.js');
const { errors } = require('./mysql/errors');

app.use(express.json());

app.get('/foodapi/users', (req,res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    }) 
})


app.listen('4001', () => {
    console.log('Listening on port 4001')
})