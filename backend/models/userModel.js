
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');


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
    }
});


UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
   return _.pick(userObject, ['_id', 'email']);
};
  

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;