var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/mainPage.html'));
});

app.get('/api/all', function(req, res) {
    allRecipes = [{"name":"pancakes", "text":"the best pancakes ever"}, {"name":"burger", "text":"so yammm"}, {"name":"pasta", "text":"pasta with pesto"},
    {"name":"pancakes1", "text":"the best pancakes ever"}, {"name":"burger1", "text":"so yammm"}, {"name":"pasta1", "text":"pasta with pesto"} ]
    res.send(allRecipes)

})

app.listen(8080, function() {
    console.log("Listening on port " + 8080)
});