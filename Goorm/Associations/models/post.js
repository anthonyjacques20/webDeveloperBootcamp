var mongoose = require("mongoose");

//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

//We consolidated this line in the module.exports line at the bottom
//var Post = mongoose.model("Post", postSchema);

//You need to export something, like a return from a function
//In our case, we are exporting the model
module.exports = mongoose.model("Post", postSchema);