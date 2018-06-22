const _ = require('lodash');

var userModel = require('../models/userModel');

var createUser = function(req, res) {
    var body = _.pick(req.body, ['email', 'password']);
    
    var user = new userModel(body);

    user.save().then((err, user) => {
        res.status(200).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    }) ;
}

module.exports = {
    createUser
}