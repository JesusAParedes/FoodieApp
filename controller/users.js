const pool = require('./mysql/connection.js');
const { errors } = require('./mysql/errors');


const getAllUsers = (req,res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    }) 
};

module.exports = {
    getAllUsers
}