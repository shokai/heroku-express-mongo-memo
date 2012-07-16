
var async = require('async');
mongoose = require('mongoose');

process.app.get('/', function(req, res){
  async.parallel(
    [
      function(exit){
        Memo.latests(40).exec(function(err, docs){
          if(err) res.send('memo get error', 500);
          else{
            exit(null, docs);
          }
        });
      }, function(exit){
        Memo.find({}).exec(function(err, docs){
          if(err) res.send('memo count error', 500);
          else{
            exit(null, docs.length);
          }
        })
      }
    ], function(err, results){
      if(err) res.send('error', 500);
      else{
        var memos = results[0];
        var count = results[1];
        res.render('index', {title: 'Memo2', memos: memos, count: count});
      }
    }
  );
});

process.app.post('/', function(req, res){
  var body = req.body.memo;
  var m = new Memo();
  m.body = body;
  m.save();
  res.redirect('/');
});

process.app.get(/^\/([a-zA-Z0-9]+)$/, function(req, res){
  var id = req.params[0];
  Memo.find_by_id(id).exec(function(err, docs){
    if(err || docs.length < 1) res.send('not found', 404);
    else{
      res.render('memo', {title : 'Memo2 - '+id, memo : docs[0]});
    }
  });
});