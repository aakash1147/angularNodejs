
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

// UserSchema.statics.findByToken = function(token) {
//     // to find the user with token
//     var user = this;
//     var decoded;
//     try {
//       decoded = jwt.verify(token, 'akash1147');
//     } catch (e) {
//       return Promise.reject();
//     }
//     return User.findOne({
//         '_id': decoded._id,
//         'tokens.token': token,
//         'tokens.access': 'auth'
//     });
// };

// UserSchema.methods.findByCrediential = function (email, password) {
//     // to find the user by crediential email id
//     var user = this;
//     return user.findOne({email}).then((user) => {
//         if(!user) {
//             return Promise.reject();
//         }
//         return new Promise((resolve, reject) => {
//             // to compare the user given password & the enycripted password present in the datebase
//             bcrypt.compare(password, user.password, (err, res) => {
//                 if(res) {
//                     resolve(user);
//                 } else {
//                     reject();
//                 }
//             })
//         })
//     });
// }

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