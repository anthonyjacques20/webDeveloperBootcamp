var express = require("express");
var app = express();

//Root path
app.get("/", function(req, res){
	res.send("Hi there! You getting buckets??!");
})

app.get("/dog", function(req, res){
	res.send("Dogs are dope dawg!!");
})

app.get("/bye", function(req, res){
	res.send("Adios muchacho");
})

app.get("/r/:subredditName", function(req, res){
	console.log(req.params);
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
})

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	res.send("Here are the comments!");
})

app.get("*", function(req, res){
	res.send("You are a star!");
})

//Tell Express to listen for requests (start the server)
app.listen(3000, function(){
	console.log("Listening on port 3000 yo!");
})