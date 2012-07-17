require('./../models');
_ = require('underscore');
var util = require('util');
inspect = util.inspect;

_dump = function(err, docs){
  console.log(docs);
};