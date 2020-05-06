var express = require("express");
var app = express();

//This tells ejs to expose everything in the public folder for use
//Without it, we wouldn't be able to link our .ejs files with our .css files in the public folder
app.use(express.static("public"));
//This allows us to omit the ".ejs" on all of the .ejs files that we render
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	//res.send("You fell in love with " + thing);
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "Baller City!", author: "McBuckets"},
		{title: "Dope Sauce", author: "Dope Sizzle"}
	];
	
	res.render("posts", {posts:posts});
});

app.listen(3000, function(){
	console.log("Starting the server on port 3000!");
})