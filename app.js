
var Memo = require('./models/memo');
var express = require('express');
var app = process.app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var routes = require('./routes');

app.listen(5000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
