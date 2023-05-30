const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const header = req.headers['authorization']

    if (header) {
        const bearer = header.split(' ');
        const token = bearer[1];

        //verifying if the token is real
        jwt.verify(token, process.env.PRIVATEKEY, (err, decoded) => {
            if (err) res.status(401).send('Unauthorized request')
            req.userInfo = decoded.id
        })
        next();
    } else {
        console.log('errorrrr')
        res.status(403).send("Error");
    }

}


module.exports = { checkToken }