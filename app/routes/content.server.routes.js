module.exports = function(app) {
    const content = require('../controllers/content.server.controller');

    app.get('/', index.render);
};