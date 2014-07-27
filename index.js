var express     = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('view cache');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res, next){
    res.render('index.ejs');
});

app.listen(process.env.PORT || 3001);