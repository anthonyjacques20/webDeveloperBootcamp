var mongoose = require("mongoose");

//USER - email, name
var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectID,
			ref: "Post"
		}
	]
});

//This line is now incorporated in the bottom module.export line
//var User = mongoose.model("User", userSchema);

//You need to export something, like a return from a function
//In our case, we are exporting the model
module.exports = mongoose.model("User", userSchema);