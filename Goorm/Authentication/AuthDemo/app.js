var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
//An example of using a package without setting a variable equal to a variable
app.use(require("express-session")({
	secret: "Get buckets all day errday",
	resave: false,
	saveUninitialize: false
}));

//We need these two lines anytime we are going to use passport
app.use(passport.initialize());
app.use(passport.session());

//Create a new local strategy that is coming from passport-local-mongoose so we don't have to write one ourselves
passport.use(new LocalStrategy(User.authenticate()));
//Read the session and encode/unencode it
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//=====================
//ROUTES 
//=====================
//Landing page
app.get("/", function(req, res){
	res.render("home");
});

//Secret page
app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
});

//Auth Routes
//Show sign up form
app.get("/register", function(req, res){
	res.render("register");
});

//Handle user signup
app.post("/register", function(req, res){
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		//This authenticate method actually authenticates the user
		passport.authenticate("local")(req, res, function(){
			res.redirect("/secret");
		});
	});
});

//LOGIN Routes
app.get("/login", function(req, res){
	res.render("login");
});

//Middleware is code that runs before our final route callback
//By putting passport.authenticate before the redirect, it runs immediately at the beginning
//Passport automatically takes the username and password from the body of the post, which is why we don't have it here
app.post("/login", passport.authenticate("local", {
	//Give passport routes depending on if authenticate is successful or not
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res){
	//We don't need to do anything here as the redirect happens in the authenticate method call
});

app.get("/logout", function(req, res){
	//Passport is destroying all of the user data in this session
	req.logout();
	res.redirect("/");
});

//Next corresponds to the callback function where we place this middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}



app.listen(3000, function(){
	console.log("Started auth app!");
});