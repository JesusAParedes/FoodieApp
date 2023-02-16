const express = require('express');
const app = express();


app.use(express.json());

app.get('/foodapi/users', (req,res) => {
    
})


app.listen('4001', () => {
    console.log('Listening on port 4001')
})