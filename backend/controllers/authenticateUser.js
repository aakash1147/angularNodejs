// var userModel = require('../models/userModel');

// var authentication = function (req, res) {
//     var token = req.header('x-auth');

//     userModel.findByToken(token).then((user)=> {
//         if(!user) return Promise.reject();
//         req.user = user;
//         req.token = token;
//         next();
//     }).catch((err) => {
//         res.status(401).send();
//     })

// }

// module.exports = {
//     authentication
// }