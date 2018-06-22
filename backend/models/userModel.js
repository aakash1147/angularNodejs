
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email Id is required"],
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{value} is not a valid email`,
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
    }],
});


UserSchema.methods.toJSON = function () {
    // for returning limited date to the API
    var user = this;
    var userObject = user.toObject();
   return _.pick(userObject, ['_id', 'email']);
};
  
UserSchema.methods.generateAuthToken = function () {
    // for generating auth token
    var user = this;
    var access = 'auth';    
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'akash1147').toString();
    user.tokens.push({access, token});
    return user.save().then(() => {
        return token;
    });
};

UserSchema.methods.findByCrediential = function (email, password) {
    // to find the user by crediential email id
    

}

UserSchema.pre('save', function(next) {
    var user = this;
    if(user.isModified('password')) {
        // to check if password is modified than modified it encrypted password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});




var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;