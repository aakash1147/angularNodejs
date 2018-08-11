const _ = require('lodash');

var fs = require('fs');
// var multer = require('multer');


var imageModel = require('../models/imageModels');


var imageCreate = function(req, res) {
    console.log(req.headers);
    console.log(req.files);
}

module.exports = {
  imageCreate
}
