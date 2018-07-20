var userModel = require('../models/userModel');

var authentication = function (req, res, next) {
    var token = req.header('x-auth');

    console.log(req.originalUrl);
    var url = req.originalUrl;
    if(url == '/create/user' || '/login') {
        next();
    }else {
        userModel.findByToken(token).then((user)=> {
            if(!user) return Promise.reject();
            console.log(user);
            req.user = user;
            req.token = token;
            next();
        }).catch((err) => {
            res.status(401).send();
        })    
    }    
}

module.exports = {
    authentication
}