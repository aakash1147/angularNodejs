const _ = require('lodash');


var userModel = require('../models/userModel');

var createUser = function(req, res) {
    var body = _.pick(req.body, ['email', 'firstname', 'lastname', 'phoneno']);
    
    var user = new userModel(body);

    user.save().then((user) => {
      return user.generateAuthToken();
    }).then((token) => {
        user.sendVerificationMail();
        return token;
    }).then((token)=> {
        res.header('x-auth', token).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
}






module.exports = {
    createUser
}