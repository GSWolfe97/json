var express = require('express');
var app = express();
var path = require('path');
 
app.get('/', function (req, res) {
  //res.send('Hello World');
  res.sendFile(path.join(__dirname + "/index.html"));
})
app.get('/aboutus.html', function (req, res) {
    res.sendFile(path.join(__dirname + "/aboutus.html"));
})
 
app.listen(3000);