const express = require('express');
const mongoose = require('./backend/db/mongoose');

var app = express();
var routing = require('./backend/routing')(app);





app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
});


