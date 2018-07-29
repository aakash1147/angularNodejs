const BodyParser = require('body-parser');

var UserAuthentication = require('./controllers/authenticateUser');

var userApi = require('./controllers/userApi');
var loginApi = require('./controllers/loginApi');
var mailApi = require('./controllers/varificationmail');

module.exports = function(app) {
    app.use(BodyParser.json());
    // app.use(UserAuthentication.authentication);

    app.post('/login', loginApi.login);
    app.get('/me', UserAuthentication.authentication, loginApi.me);
    app.post('/user/create', userApi.createUser);
    app.post('/user/varification', mailApi.userverifivationToken);
    app.post('/user/verifyuser', userApi.verifyUser);
}
