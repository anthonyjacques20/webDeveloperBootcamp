var express = require("express");
var app = express();

animals = {
	pig: "Oink",
	cow: "Moo",
	dog: "Woof Woof!"
}

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	animal = req.params.animal.toLowerCase();
	if (animals[animal]){
		res.send("The " + animal + " says '" + animals[animal] + "'");
	}
	else {
		res.send("No animal found...");
	}
	
});

app.get("/repeat/:word/:count", function(req, res){
	var responseString = "";
	for(var i = 0; i < Number(req.params.count); i++){
		if(i == 0){
			responseString = req.params.word;
		}
		else{
			responseString += " " + req.params.word;
		}
	}
	res.send(responseString);
})

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
})

app.listen(3000, function(){
	console.log("Starting server on port 3000");
})