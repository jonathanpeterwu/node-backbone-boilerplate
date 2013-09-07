var index               = require('./controllers/index');
var example             = require('./controllers/example');

exports.initializeRoutes = function(app) {

  // Example route
  app.post('/example', example.showExample);

  // Waterfall route to Backbone app
  app.get('/*', index.render);
};
