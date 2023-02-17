const express = require('express');
const app = express();
const routes = require('./routes/index')

app.use(express.json());

app.use(routes);

app.listen('4001', () => {
    console.log('Listening on port 4001')
})