const express = require('express');
const mongoose = require('./backend/db/mongoose');

const cors = require('cors');


var app = express();
var routing = require('./backend/routing')(app);


app.listen(5000, ()=> {
    console.log("Server is running on port 5000")
});

app.use(function(req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

