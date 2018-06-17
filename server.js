const express = require('express');
const db = require('./backend/db/dbConnection');

var app = express();


app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
});