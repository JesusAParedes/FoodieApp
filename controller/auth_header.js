// const axios = require('axios');
// const mysql = require('mysql2');

const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
// const pool = require('../sql/connection');
// const { handleSQLError } = require('../sql/error');

const checkToken = (req, res, next) => {
    console.log(req.headers);
    const header = req.headers['authorization']

    if (header) {
        console.log('we have a header')
        const bearer = header.split(' ');
        const token = bearer[1];

        // const decoded = jwt_decode(token);
        // console.log(decoded.id, 'DECODED')
        // const newToken = jwt.sign({id: rows[0].user_id}, process.env.PRIVATEKEY)

        //verifying if the token is real
        jwt.verify(token, process.env.PRIVATEKEY, (err, decoded) => {
            console.log(err, decoded, 'hellooooo')
            if (err) res.status(401).send('Unauthorized request')
            console.log(decoded, 'DECODED ***************')
            req.userInfo = decoded.id
        })
        // req.token = token;
        next();
    } else {
        console.log('errorrrr')
        res.status(403).send("Error");
    }

}

const verifyHeader = (req, res, next) => {
    console.log(req.token, 'tokennnnnnnnnnnnnnnnnn')
    const auth_header = req.body.header.headers.Authorization;
    console.log(auth_header, '*************')

    //checking that the user has sent credentials
    if (!auth_header) { res.status(401).send('Unauthorized request'); }
    else {
        //removing the word Bearer from the token
        const accessToken = auth_header.split(' ')[1];

        const decoded = jwt_decode(accessToken);
        console.log(decoded.id, 'DECODED')
        // const newToken = jwt.sign({id: rows[0].user_id}, process.env.PRIVATEKEY)

        //verifying if the token is real
        jwt.verify(accessToken, process.env.PRIVATEKEY, (err, payload) => {
            if (err) res.status(401).send('Unauthorized request')

            req.userInfo = decoded.id
            // return res.status(200).json({ newToken })
        })
    }
    next()
}

module.exports = { verifyHeader, checkToken }