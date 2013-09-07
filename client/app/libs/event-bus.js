define(function(require, exports, module) {

  var $                 = require('jquery');
  var _                 = require('underscore');
  var Backbone          = require('backbone');

  var EventBus = Backbone.Model.extend({

    initialize: function() {

    },

  });

  module.exports = EventBus;

});
