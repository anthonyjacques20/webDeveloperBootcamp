var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});


//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


/*
var newUser = new User({
	email: "hermione@hogwarts.edu",
	name: "Hermione Granger"
});

newUser.posts.push({
	title: "How to brew polyguice potion",
	content: "Just kidding.  Go to potions class to learn it"
});

newUser.save(function(err, user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
});


var newPost = new Post({
	title: "Reflections on Appples",
	content: "They are delicious"
});

newPost.save(function(err,post){
	if(err){
		console.log(err)
	}
	else{
		console.log(post);
	}
});
*/

User.findOne({name: "Hermione Granger"}, function(err, user){
	if(err){
		console.log(err)
	}
	else{
		console.log(user)
		user.posts.push({
			title: "Three things I really hate",
			content: "Voldemort, Voldemort, Voldemort"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}
			else{
				console.log(user)
			}
		});
	}
});