var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

//Define a schema (even though we don't have to because it is NoSQL)
//Can still add new keys as you would like
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

//Take the schema and compile it to a model to make new cats, remove new cats, etc.
var Cat = mongoose.model("Cat", catSchema);

/*
//Add a new cat to the DB
var george = new Cat({
	name: "Mrs. Norris",
	age: 7,
	temperament: "Evil"
});

//Save has a callback for when it is finished (successfully or unsuccessfully)
george.save(function(err, cat){
	if(err){
		console.log("Something went wrong!");
	}
	else{
		console.log("We just saved a cat!");
		console.log(cat);
	}
});
*/

//Create will make a new Cat and save it all at once
Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, cat){
	if(err){
		console.log(err);
	}
	else{
		console.log(cat);
	}
});

//Grab all of the cats
Cat.find({}, function(err,cats){
	if(err){
		console.log("Oh no! We got an error");
	}
	else{
		console.log("ALl of the cats - ");
		console.log(cats);
	}
})