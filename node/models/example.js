var _             = require('underscore');
var mongoose      = require('mongoose');

var Example = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
});


////
//   EXAMPLE METHOD
////

Order.methods.getUppercaseName = function() {
  return this.name.toUpperCase();
};

////
//   EXAMPLE STATIC FN
////

Order.statics.getByAge = function(age, cb) {
  this.find({
    age: age
  }, function(err, example) {
    if (err) return cb(err);
    return cb(null, example);
  })
};


mongoose.model('Example', Example);
