const _ = require('lodash');
const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('./backend/db/dbConnection');



var User = require('./backend/models/users');



var app = express();

app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
});


app.use(bodyParse.json());

app.post('/create/user', (req, res) => {
    var reqBody = _.pick(req.body, ['email', 'password']);
    console.log(reqBody);

    var user = new User(reqBody);

    user.save().then((err, user) => {
        if(err) res.status(400).send(err);
        else res.status(200).send(user);
    })
})