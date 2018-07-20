const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const sendmail = require('sendmail')();

var VarificationSchema = mongoose.Schema({
    email:{
        type: String,
    },
    // varificationtoken:{
    //     type: String,
    // },
    userid: { 
        type: mongoose.Schema.ObjectId , 
        ref: 'user' 
    }
})

VarificationSchema.methods.toJSON =  function() {
    var varificationData = this;
    var dataObject = varificationData.toObject();

    return {
        // "_id": dataObject._id,
        "email": dataObject.email,
        // "userid": dataObject.userid,
        // "varificationtoken": dataObject.varificationtoken,
    }

}



VarificationSchema.methods.sendMail = function () {
    var mailDto = this;
    console.log(mailDto);

    var mailString = "http://localhost:4200/userverifivation/" + mailDto._id;
    sendmail({
        from: 'aakash1147@gmail.com',
        to: mailDto.email,
        subject: 'Verification Mail',
        text: mailString,
      }, function(err, reply) {
        // console.log(err && err.stack);
        // console.dir(reply);
    });

    

}

var varificationMailModel = mongoose.model('varificationmail', VarificationSchema);

module.exports = varificationMailModel
