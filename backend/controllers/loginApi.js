const _ = require('lodash');
var userModel = require('../models/userModel');

var login = function(req, res) {
    console.log(req.body);
    var body = _.pick(req.body, ['email', 'password']);

    userModel.findByCrediential(body.email, body.password).then((user) => {
        res.send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
}




module.exports = {
    login
}