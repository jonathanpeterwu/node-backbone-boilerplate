var mongoose     = require('mongoose'),
    config       = require('config');

// Require models
require('./example');

exports.initialize = function(cb) {
  cb = cb || function() {};

  // Connect
  mongoose.set('debug', config.mongo.debug)
  mongoose.connect(config.mongo.connectionString);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Mongo connection error:'));

  db.once('open', function() {
    console.log('Mongo ready');
    cb()
  });
}

