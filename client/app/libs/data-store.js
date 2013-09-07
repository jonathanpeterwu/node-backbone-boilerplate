define(function(require, exports, module) {

  var $                     = require('jquery');
  var _                     = require('underscore');
  var Backbone              = require('backbone');
  var Handlebars            = require('handlebars');
  var ExampleCollection     = require('collections/example');  

  var DataStore = Backbone.View.extend({

    initialize: function() {
      this.Projects       = new ExampleCollection();
    },

  });
  
  module.exports = DataStore;

});

