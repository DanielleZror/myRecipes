var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://localhost:27017/recipes';
const assert = require('assert');
const fs = require('fs');
let mydb 

app.use(express.static('public'))
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
    extended: true,
    limit: '50mb'
  })); 


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/mainPage.html'));
});

app.get('/api/all', function (req, res) {
    var query = {userID: req.query.userID};
    selectFromDB(sendRes, query);
    function sendRes(result){
        console.log(result)
        res.send(result);
    }
})

app.get('/api/byID', function(req, res) {
    var query = { id: req.query.id, userID: req.query.userID};
    selectFromDB(sendRes, query);
    function sendRes(result){
        res.send(result[0]);
    }
})

app.post('/api/add', function(req) {
   console.log(req.body)
    addToDB(req.body)
})

app.listen(8080, function() {
    console.log("Listening on port " + 8080)
});

function connectToDB(callback){
    MongoClient.connect(uri, function(err, db) {
        if(!err) {
            console.log("connected");
            mydb = db
            dbo = db.db("recipes");
            callback(dbo.collection("recipes"))
            }
        })
}

function closeConnction(){
    if(mydb){
        mydb.close();
        MongoClient.close;
    }
}

function selectFromDB(callback, query){
    connectToDB(find)
    function find (collection) {
        collection.find(query).toArray(function(err, result) {
            if (err) throw err;
            callback(result)
            closeConnction()
        })
    }
}

function addToDB(document){
    connectToDB(insert)
    function insert(collection) {
        collection.insertOne(document, function(err, result) {
            if (err) throw err;
            console.log(result)
            closeConnction()
        })
    }
}



 