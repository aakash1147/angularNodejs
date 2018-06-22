const BodyParser = require('body-parser');

module.exports = function(app) {
    app.use(BodyParser.json());
}