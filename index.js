var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/mainPage.html'));
});

app.get('/api/all', function (req, res) {
    res.send(getAllRecipes());
})

app.get('/api/byID', function(req, res) {
    let data = getAllRecipes() 
    res.send(data.find(x => x.id === req.query.id))
})

function getAllRecipes(){
    let allRecipes = [{'id':'1', 'name':'pancakes', 'text':'the best pancakes ever'}, {'id':'12', 'name':'burger', 'text':'so yammm'}, {'id':'3', 'name':'pasta', 'text':'pasta with pesto'},
    {'id':'4', 'name':'pancakes1', 'text':'the best pancakes ever'}, {'id':'5', 'name':'burger1', 'text':'so yammm'}, {'id':'63', 'name':'pasta1', 'text':'pasta with pesto'} ]
    return allRecipes;
}

app.listen(8080, function() {
    console.log("Listening on port " + 8080)
});