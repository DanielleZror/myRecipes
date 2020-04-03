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
    var query = { };
    selectFromDB(sendRes, query);
    function sendRes(result){
        res.send(result);
    }
})

app.get('/api/byID', function(req, res) {
    var query = { id: req.query.id };
    selectFromDB(sendRes, query);
    function sendRes(result){
        res.send(result[0]);
    }
})

app.post('/api/add', function(req) {
    var document = { id: '4', name: 'pizza', text: 'ext text'}
    addToDB(document)
})

app.listen(8080, function() {
    console.log("Listening on port " + 8080)
});

function connectToDB(callback){
    MongoClient.connect(uri, function(err, db) {
        if(!err) {
            console.log("connected");
            var dbo = db.db("recipes");
            callback(dbo.collection("recipes"))
            db.close();
            MongoClient.close;    
            }
        });
}

function selectFromDB(callback, query){
    connectToDB(find)
    function find (collection) {
        collection.find(query).toArray(function(err, result) {
            if (err) throw err;
            callback(result)
        })
    }
}

function addToDB(document){
    connectToDB(insert)
    function insert(collection) {
        collection.insertOne(document, function(err, result) {
            if (err) throw err;
            console.log(result)
        })
    }
}