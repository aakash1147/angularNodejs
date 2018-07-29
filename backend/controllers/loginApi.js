const _ = require('lodash');
var userModel = require('../models/userModel');

var login = function(req, res) {
    console.log(req.body);
    var body = _.pick(req.body, ['email', 'password']);

    userModel.findByCrediential(body.email, body.password).then((user) => {
        res.status(200).send({
          "token":user.tokens[0].token,
        });
    }).catch((err) => {
        res.status(400).send(err);
    });
}

var me = function(req, res) {
  res.status(200).send(req.user);
}


module.exports = {
    login, me
}
