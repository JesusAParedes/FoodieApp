const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js')
const { instance } = require('./mysql/connection.js')

instance

app.use((req, res, next) => {
    if (req.method ===  'OPTIONS') {
        res.header("Access-Allow-Control-Allow_Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({})
    }
    next()
})

// app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://foodie-app-react.vercel.app/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());

app.use(routes);

app.use(express.static(path.join(__dirname, 'foodie-app-react/build')));


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/foodie-app-react/build/index.html'));
});

app.listen('4001', () => {
    console.log('Listening on port 4001')
})