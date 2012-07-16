
mongoose = require('mongoose');
var Memo = mongoose.model('Memo');
console.log(Memo.length);

process.app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});

process.app.post('/', function(req, res){
  var body = req.body.memo;
  console.log('post : '+body);
  var m = new Memo();
  m.body = body;
  m.save();
  res.redirect('/');
});