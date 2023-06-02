const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js')
const { instance } = require('./mysql/connection.js')

instance

app.use(cors({
    header: 'Access-Control-Allow-Origin',
    origin: 'https://foodie-app-react.vercel.app/',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT']
}));

app.use(express.json());


app.use(routes);

// app.use(express.static(path.join(__dirname, 'foodie-app-react/build')));


// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/foodie-app-react/build/index.html'));
// });

app.listen('4001', () => {
    console.log('Listening on port 4001')
})