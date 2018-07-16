const _ = require('lodash');

const varificationMailModel = require('../models/verificationmailModels');
const sendmail = require('sendmail')();

var varificationMail = function(user) {    
    body = {
        email: user.email,
        userid: user._id,
    }
    var varification = new varificationMailModel(body);
    varification.generateVerificationToken()
    console.log("%%%%% varification ###########");
    console.log(varification);


    var mailString = "http://localhost:4200/userverifivation/" + varification.varificationtoken;
    sendmail({
        from: 'aakash1147@gmail.com',
        to: user.email,
        subject: 'Verification Mail',
        text: mailString,
      }, function(err, reply) {
        // console.log(err && err.stack);
        // console.dir(reply);
    });


}

module.exports = {
    varificationMail
}