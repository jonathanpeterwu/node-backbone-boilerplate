define(function(require, exports, module) {

  var $                 = require('jquery');
  var _                 = require('underscore');
  var Backbone          = require('backbone');
  var OrderModel        = require('models/example');

  module.exports = Backbone.Collection.extend({

    model: OrderModel,
    url: '/api/example',

  });

});
