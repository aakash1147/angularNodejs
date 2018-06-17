const express = require('express');
const mongoose = require('./backend/db/dbConnection');

var URL = require('url');

var app = express();


app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
});