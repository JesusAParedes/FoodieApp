// const axios = require('axios');
// const mysql = require('mysql2');

const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
// const pool = require('../sql/connection');
// const { handleSQLError } = require('../sql/error');

const checkToken = (req, res, next) => {
    const header = req.body.header.headers['Authorization']
    
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        res.status(403).send("Error");
    }

}

const verifyHeader = (req, res) => {
    const auth_header = req.body.header.headers.Authorization;
    
    //checking that the user has sent credentials
    if(!auth_header) {res.status(401).send('Unauthorized request');}
    else {
        //removing the word Bearer from the token
        const accessToken = auth_header.split(' ')[1];
        
        const decoded = jwt_decode(accessToken);
        console.log(decoded.id, 'DECODED')
        // const newToken = jwt.sign({id: rows[0].user_id}, process.env.PRIVATEKEY)

        //verifying if the token is real
        jwt.verify(accessToken, process.env.PRIVATEKEY, (err, payload) => { 
        if (err) res.status(401).send('Unauthorized request')
        return decoded.id
        // return res.status(200).json({ newToken })
        })}
}

module.exports = { verifyHeader, checkToken }