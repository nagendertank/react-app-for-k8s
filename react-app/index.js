'use strict';

const express = require('express');
const app = express();
const path = require('path');



// Instruct the app
// to use the forceSSL
// middleware
//app.use(forceSSL());



app.use(express.static(path.join(__dirname, '/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log('Listening on localhost:' + (process.env.PORT || 3000));
