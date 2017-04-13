let express = require('express'),
    firebase = require('firebase');

let app = express();

    app.get('/',(req,res)=>{
        res.sendFile('index.html');
    });