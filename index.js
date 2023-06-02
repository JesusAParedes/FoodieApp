const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js')

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'foodie-app-react/build')));

app.use(routes);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/foodie-app-react/build/index.html'));
});

app.listen('3306', () => {
    console.log('Listening on port 4001')
})