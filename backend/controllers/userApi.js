const _ = require('lodash');

var userModel = require('../models/userModel');

var createUser = function(req, res) {
    console.log(req.body);
    var body = _.pick(req.body, ['email', 'password']);
    
    var user = new userModel(body);

    user.save().then((err, user) => {
        if(err) res.status(400).send(err);
        else res.status(200).send(user);
    });
}

module.exports = {
    createUser
}