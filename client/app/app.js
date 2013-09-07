requirejs.config({
  baseUrl: '/client/app',
  paths: {
    // Shortcuts
    views:          'views',
    collections:    'collections',
    models:         'models',
    templates:      '../../public/js/templates',
    libs:           'libs',
 
    // Libs
    jquery:         'libs/vendor/jquery',
    underscore:     'libs/vendor/underscore',
    backbone:       'libs/vendor/backbone',
    handlebars:     'libs/vendor/handlebars',
  },

  shim: {
    // Common dependencies
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'backbone': {
      deps: ['underscore', 'jquery', 'templates'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'templates': {
      deps: ['handlebars']
    }
  }
});


// Create the app
define(function(require, exports, module) {
  var EventBus          = require('libs/event-bus');
  var Util              = require('libs/util');
  var Router            = require('router');
  var Handlebars        = require('handlebars');
  var DataStore         = require('libs/data-store');

  // Create app
  (function() {

    // Globals
    window.EventBus       = new EventBus();
    window.Util           = Util;

    // Create data store
    window.Data           = new DataStore();
    
    // Router
    window.Router = new Router();
    Backbone.history.start({ pushState: true });

  })();

});
