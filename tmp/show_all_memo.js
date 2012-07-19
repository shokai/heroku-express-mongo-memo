require(__dirname+'/../models');

var _ = require('underscore');
var mongoose = require('mongoose');
var Memo = mongoose.model('Memo');

Memo.find({}, function(err, docs){
  if(err){
    console.error(err);
  }
  else{
    _.each(docs, function(i){
      console.log(i.body + '  - ' + i.created_at);
    });
  }
  mongoose.disconnect();
});
