var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://localhost:27017/recipes';

app.use(express.static('public'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/mainPage.html'));
});

app.get('/api/all', function (req, res) {
    MongoClient.connect(uri, function(err, db) {
        if(!err) {
            console.log("connected");
            var dbo = db.db("recipes");
            dbo.collection("recipes").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result)
                db.close();
            });
            MongoClient.close;    
            }
        });
})
function collect
app.get('/api/byID', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/recipes", function(err, db) {
    if(!err) {
        console.log("connected");
        var dbo = db.db("recipes");
        var query = { id: req.query.id };
        dbo.collection("recipes").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result[0])
            db.close();
        });
        MongoClient.close;    
        }
    });
})


app.listen(8080, function() {
    console.log("Listening on port " + 8080)
});



