var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

//Add methods that come with passport local mongoose to our UserSchema
//This adds the serializeUser and deserializeUser methods to the UserSchema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);