const _ = require('lodash');

var userModel = require('../models/userModel');
var varificationMailModel = require('../models/verificationmailModels');
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
        asd = validateError.validateError(err);
        res.status(400).send(asd);
    });
}

var verifyUser = function(req, res) {
    varificationtoken = req.body.token;
    email = req.body.email;
    password = req.body.password;

    varificationMailModel.findOne({ _id: varificationtoken, is_consumed: false }, function(err, varificationData) {
        if(!varificationData) return res.status(400).send({"Response": "Invalid Token"});
        if(varificationData) {
          userModel.findOne({ _id: varificationData.userid }, function(err, userData){
            if(err) return res.status(400).send({ "Response": "Unable to find User" });
            if(!err) {
              userData.password = password;
              userData.is_active = true;
              userData.save().then((user) => {
                varificationData.is_consumed = true;
                varificationData.save();
                res.status(200).send(user);
              }).catch((err) => {
                  asd = validateError.validateError(err);
                  res.status(400).send(asd);
              })
            }
          })

        }
    });
}


module.exports = {
    createUser, verifyUser
}
