const mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
  imageUrl: {
    data: Buffer,
    contentType: String,
  }
})

var imageModel = mongoose.model('image', imageSchema);

module.exports = imageSchema;
