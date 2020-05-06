var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true});
//Don't need to end everything with .ejs
app.set("view engine", "ejs");
//Serve custom style sheet
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	//This says created should be a date and it should default to now
	created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);

//ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
})

//INDEX route
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}
		else{
			//Send index as that is the REST way to do it!
			res.render("index", {blogs: blogs});
		}
	});
});

//NEW route
app.get("/blogs/new", function(req, res){
	res.render("new");
});

//CREATE route
app.post("/blogs", function(req, res){
	//Sanitize the body to make sure there aren't any script tags in there
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			console.log(err);
			res.render("new");
		}
		else{
			console.log("Added new blog called: " + newBlog.title);
			res.redirect("/blogs");
		}
	})
});

//SHOW route
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
			res.redirect("/blogs");
		}
		else{
			res.render("show", {blog: foundBlog});
		}
	});
});

//EDIT route
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.render("edit", {blog: foundBlog});
		}
	});
});

//UPDATE route
app.put("/blogs/:id", function(req, res){
	//Sanitize the body to make sure there aren't any script tags in there
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.redirect("/blogs/" + req.params.id);
		}
	})
});

//DELETE route
app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
			res.redirect("/blogs");
		}
		else{
			res.redirect("/blogs");
		}
	});
});

app.listen(3000, function(){
	console.log("Starting RESTful Blog App!");
})