const BodyParser = require('body-parser');

var userApi = require('./controllers/userApi');

module.exports = function(app) {
    app.use(BodyParser.json());
    app.post('/create/user', userApi.createUser);
}