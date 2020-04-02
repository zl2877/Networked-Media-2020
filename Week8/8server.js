var Datastore = require('nedb');
var db = new Datastore({filename: "data.db", autoload: true});


var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

// app.get('/', function (req, res) {
//     res.redirect("/post");
// });

var alldatas = [];
app.post('/submit', function (req, res){

    var data = { 
    breed: req.body.breed
    };

    db.insert(data, function(err, newDocs) {
        console.log("err:", err);
        console.log("newDocs" + newDocs);

    });
    res.redirect("/");
});

app.get('/data', function(req, res) {
    db.find({}, function(err, docs){
        res.send({thedata:docs})
    });
});


app.listen(80, function () {
    console.log('Example app listening on port 80!')
});