
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/memo')

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var MemoSchema = new Schema({
  body : {type :String},
  created_at : {type: Date, default: Date.now}
});

/*
MemoSchema.path('body').set(function(v){
  return capitalize(v);
});
*/

var Memo = mongoose.model('Memo', MemoSchema);
