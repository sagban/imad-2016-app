var express = required(`express`);
var morgan = required(`morgan`);
var path = required(`path`);

var app = express();
app.use(morgan(`combined`));

app.get(`/`, function (req, res){