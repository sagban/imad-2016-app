var express = required('express');
var morgan = required('morgan');
var path = required('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname,'ui','index.html'));
});
app.get('/ui/styl.css', function (req, res){
res.sendFile(path.join(__dirname,'ui','style.css'));
});
app.get('/ui/madi.png', function (req, res){
res.sendFile(path.join(__dirname,'ui','madi.png'));
});

var port = 800;
app.listen(8080, function () {
console.log(`IMAD course app listening on port ${port}!`);
});