
mongoose = require('mongoose');
var Memo = mongoose.model('Memo');

process.app.get('/', function(req, res){
  Memo.latests(40).exec(function(err, docs){
    if(err) res.send(error, 500)
    else{
      res.render('index', { title: 'Memo2', memos: docs});
    }
  });
});

process.app.post('/', function(req, res){
  var body = req.body.memo;
  console.log('post : '+body);
  var m = new Memo();
  m.body = body;
  m.save();
  res.redirect('/');
});