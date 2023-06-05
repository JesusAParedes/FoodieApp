const express = require('express');
// const path = require('path');
const cors = require('cors');
const app = express();
const routes = require('./routes/index.js')

app.use(cors())

app.use(express.json());

const port = process.env.PORT || 4001

app.use(routes);

app.get('/hello', (req, res) => {
    res.json({message: "HELLO WORLD!!"})
})

// app.use(express.static(path.join(__dirname, 'foodie-app-react/build')));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/foodie-app-react/build/index.html'));
// });

app.listen(port, () => {
    console.log('Listening on port', port)
})