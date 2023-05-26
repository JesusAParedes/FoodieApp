// const axios = require('axios');
// const mysql = require('mysql2');

const jwt = require('jsonwebtoken');
// const pool = require('../sql/connection');
// const { handleSQLError } = require('../sql/error');

const checkToken = (req, res, next) => {
    const header = req.headers['authorization']
    console.log(header, 'header')
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        res.status(403).send("Error");
    }
}

const header = (req, res) => {
    const auth_header = req.headers.authorization;
    console.log(auth_header)
    //checking that the user has sent credentials
    if(!auth_header) res.status(401).send('Unauthorized request');

    const accessToken = auth_header.split('')[1];

    jwt.verify(accessToken, process.env.PRIVATEKEY, (err, payload) => { 
    if (err) res.status(401).send('Unauthorized request')
    res.send('Request sent')
    })
    
}

module.exports = { header, checkToken }