const _ = require('lodash');

var userModel = require('../models/userModel');
var sendVerificationMail = require('./varificationmail');

var validateError = require('../errors');

var createUser = function(req, res) {
    var body = _.pick(req.body, ['email', 'firstname', 'lastname', 'phoneno']);

    var user = new userModel(body);

    user.save().then((user) => {
      return user.generateAuthToken();
    }).then((token) => {
        sendVerificationMail.varificationMail(user);
        return token;
    }).then((token)=> {
        res.header('x-auth', token).send(user);
    }).catch((err) => {
        console.log(err);
         asd = validateError.validateError(err);
        res.status(400).send(asd);
    });
}



module.exports = {
    createUser
}
