
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/memo', function(err){
  if(err){
    console.error(err);
    process.exit(1);
  }
});

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var MemoSchema = new Schema({
  body : {type: String},
  created_at : {type: Date, default: Date.now}
});

var Memo = mongoose.model('Memo', MemoSchema);

Memo.latests = function(num){
  return this.find().sort('created_at', -1).limit(num);
};

Memo.find_by_id = function(id){
  return this.find({'_id':id});
};