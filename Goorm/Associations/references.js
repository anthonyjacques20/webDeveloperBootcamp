var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

//Grab the mongoose models from other files
var Post = require("./models/post");
var User = require("./models/user");
console.log(Post);
console.log(User);

/*
User.create({
	email: "bob@gmail.com",
	name: "Bob Belcher"
});
*/

Post.create({
	title: "How to cook the best burger part 4",
	content: "With salsa and guacamole!!"
}, function(err, post){
	User.findOne({name: "Bob Belcher"}, function(err, foundUser){
		if(err){
			console.log(err);
		}
		else{
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if(err){
					console.log(err);
				}
				else{
					console.log(data);
				}
			});
		}
	});
});


/*
//Find user first and then populate the field posts with all of the data associated with the object ids
//Then we run exec to start the query
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
});
*/