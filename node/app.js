var express           = require('express');
var mongoose          = require('mongoose');
var models            = require('./models/models');
var lessMiddleware    = require('less-middleware');
var config            = require('config');
var router            = require('./router');

////
//  START SERVER
////
var app = express();
app.configure(function() {
  app.use(lessMiddleware({
    dest: __dirname + '../public/css',
    src: __dirname + '../public/less',
    prefix: '/css',
    compress: false,
    once: false, // should be true on prod
  }));

  // Expose public files
  app.use('/public', express.static(__dirname.replace('/node', '/public')));
  if (config.isDev) app.use('/client', express.static(__dirname.replace('/node', '/client')));

  app.use(express.bodyParser());
  app.use(express.cookieParser());  
  app.use(app.router);
});

app.set('view engine', 'ejs');

// Add routes
router.initializeRoutes(app);


////
//  START SERVICES
////

models.initialize(function() {
  // Start jobs
  jobs.initialize();
});
app.listen(3000);

console.log('Express ready');

