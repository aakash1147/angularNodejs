const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/employeeProject', (err, db) => {
    if(err) console.log(err);
    else console.log('Successfully Connect to dataBase');
})