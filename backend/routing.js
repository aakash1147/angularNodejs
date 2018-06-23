const BodyParser = require('body-parser');

var UserAuthentication = require('./controllers/authenticateUser');

var userApi = require('./controllers/userApi');
var loginApi = require('./controllers/loginApi');

module.exports = function(app) {
    app.use(BodyParser.json());
    app.use(UserAuthentication.authentication);

    app.post('/login', loginApi.login);
    app.get('/me', loginApi.me);
    app.post('/create/user', userApi.createUser);
}