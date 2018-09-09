const BodyParser = require('body-parser');

var UserAuthentication = require('./controllers/authenticateUser');

var userApi = require('./controllers/userApi');
var loginApi = require('./controllers/loginApi');
var mailApi = require('./controllers/varificationmail');

var imageApi = require('./controllers/imageApi');

var multipart = require('connect-multiparty');

module.exports = function(app) {
    app.use(BodyParser.urlencoded({extended: false}));
    app.use(BodyParser.json());
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method === 'OPTIONS') {
          res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
          return res.status(200).json({});
      }
      next();
    });

    app.post('/login', loginApi.login); // for getting token of user
    app.get('/me', UserAuthentication.authentication, loginApi.me); // hit with user token to get user data
    app.post('/user/create', userApi.createUser); // to create user & send mail to email id with token
    app.post('/user/varification', mailApi.userverifivationToken); // to get email id of user on the bases of token send to mailid
    app.post('/user/verifyuser', userApi.verifyUser); // to verify email id & set password


    app.use( multipart() );

    app.post('/image/create', imageApi.imageCreate);
}
