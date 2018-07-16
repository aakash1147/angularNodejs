const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


var VarificationSchema = mongoose.Schema({
    email:{
        type: String,
    },
    varificationtoken:{
        type: String,
    },
    userid: { 
        type: mongoose.Schema.ObjectId , 
        ref: 'user' 
    }
})

VarificationSchema.methods.generateVerificationToken = function(user) {
    var varification = this;
    var access = "varificationauth"
    var token = jwt.sign({_id: varification._id.toHexString(), access}, 'akash1147').toString();
    varification.varificationtoken = token;    
    return varification.save().then(() => {
        return token;
    });
}

var varificationMailModel = mongoose.model('varificationmail', VarificationSchema);

module.exports = varificationMailModel;