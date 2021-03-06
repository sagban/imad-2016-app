var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/sagban', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sagban.html'));
});
app.get('/uk', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'uk.html'));
});
app.get('/varsha', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'VARSHA.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/contactus', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});