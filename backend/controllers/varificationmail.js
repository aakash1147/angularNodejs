const _ = require('lodash');
const varificationMailModel = require('../models/verificationmailModels');


var varificationMail = function(user) {    
    body = {
        email: user.email,
        userid: user._id,
    }
    var varification = new varificationMailModel(body); 
    console.log(varification);   
    setTimeout(()=>{
        varification.sendMail();
    }, 2000);    

    varification.save().then((varg) => {
        console.log("########################");
        console.log(varg);
    })

}

var userverifivationToken = function (req, res) {
    console.log("@@@@@@ varification Token @@@@@@@@222");
    console.log(req.body.token);
    var id = req.body.token;
    
    varificationMailModel.findOne({ _id: id }, function(err, varData) {
        if(err) return res.status(400).send({"Response": "Unable to find User"});
        console.log(varData);
        res.status(200).send(varData);
    })
}

module.exports = {
    varificationMail, userverifivationToken
}