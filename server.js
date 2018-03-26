// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
var express = require('express');
var app = express();

// first try serving from /dist
app.use(express.static(__dirname + '/dist'));
// if that does not work hit /dist/index.html
app.use((req, res, next) => {
  res.sendFile(__dirname + '/dist/index.html', (err) => {
    if (err) {
      console.error('Express failed to serve index.html', err);
    }
  })
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started ' + port);
