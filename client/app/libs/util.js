define(function(require, exports, module) {

  // Some helpful methods...

  module.exports = {

    dateFromObjectId: function(objectId) {
      return new Date(parseInt(objectId.slice(0,8), 16) * 1000)
    },

  };

});

