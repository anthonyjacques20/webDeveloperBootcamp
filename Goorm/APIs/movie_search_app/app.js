var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var search = req.query.search;
	var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + search;
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var parsedData = JSON.parse(body);
			//res.send(parsedData.Search[0]);
			res.render("results", {data: parsedData});
		}
	})
});


app.listen(3000, function(){
	console.log("Movie app has started on port 3000!");
});