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

  var $                 = require('jquery');
  var _                 = require('underscore');
  var Backbone          = require('backbone');
  var Auth              = require('libs/auth');
  var EventBus          = require('libs/event-bus');
  var Util              = require('libs/util');
  var Router            = require('router');
  var Handlebars        = require('handlebars');
  var DataStore         = require('libs/data-store');
  var ModalController   = require('libs/modal-controller');
  var HeaderView        = require('views/headers/main');  
  require('templates');
  require('libs/handlebars-extensions');
  require('libs/backbone-extensions');

  var launchApp = function() {

    // Globals
    window.EventBus       = new EventBus();
    window.Auth           = new Auth();
    window.Util           = Util;

    // Create user model
    window.Auth.createActiveUser(window.globals.user);

    // Create data store
    window.Data           = new DataStore();

    // Create modal controller
    window.Modals         = new ModalController();
    
    // Router
    window.Router = new Router();
    Backbone.history.start({ pushState: true });

    // Create global views
    new HeaderView();
  }

  // Launch app;
  launchApp();

});

