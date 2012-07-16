require(__dirname+'/../models/memo');

var _ = require('underscore');
var mongoose = require('mongoose');
var Memo = mongoose.model('Memo');

Memo.latests(3).exec(function(err, docs){
  if(err) console.error(err);
  else{
    _.each(docs, function(d){
      console.log(d.body + ' - ' + d.created_at);
      console.log(d.toString());
    });
  }
});
