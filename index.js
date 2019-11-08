var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/linkgen', function(req, res) {
  res.sendfile(__dirname + '/linkgen.html');
});


app.listen(3000);