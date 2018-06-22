
const mongoose = require('mongoose');
const validator = require('validator');


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

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;