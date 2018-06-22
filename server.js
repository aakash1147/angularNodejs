const express = require('express');
const mongoose = require('./backend/db/mongoose');

var app = express();
var routing = require('./backend/routing')(app);





app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
});




// app.post('/create/user', (req, res) => {
//     var reqBody = _.pick(req.body, ['email', 'password']);
//     console.log(reqBody);

//     var user = new User(reqBody);

//     user.save().then((err, user) => {
//         if(err) res.status(400).send(err);
//         else res.status(200).send(user);
//     })
// })