const express = require('express');
// const path = require('path');
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js')
const pool = './mysql/connection.js'

// app.use((req, res, next) => {
//     if (req.method ===  'OPTIONS') {
//         res.header("Access-Allow-Control-Allow_Methods", "PUT, POST, PATCH, DELETE, GET");
//         return res.status(200).json({})
//     }
//     next()
// })

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://foodie-app-react.vercel.app/"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(express.json());

const port = process.env.PORT || 4001

app.use(routes);

app.get('/hello', (req, res) => {
    res.json({message: "HELLO WORLD!!"})
})

app.get('/get-users', (req, res) => {
    console.log('inside GET all users route')
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) return errors(res, err);
        console.log(rows)
        return res.json(rows);
    });
});

// app.use(express.static(path.join(__dirname, 'foodie-app-react/build')));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/foodie-app-react/build/index.html'));
// });

app.listen(port, () => {
    console.log('Listening on port', port)
})