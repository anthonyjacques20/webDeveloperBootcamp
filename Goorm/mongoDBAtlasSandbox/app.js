//Const is the same as var but we are using const because those variables won't change
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//Configure dotenv so we can use usernames/passwords
require('dotenv').config();


mongoose.connect("mongodb+srv://mongoDBUser:" + process.env.DB_PASS + "@anthonyscluster-secvg.mongodb.net/test?retryWrites=true&w=majority", 
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
}).then(() => {
	console.log("Connected to DB!");
}).catch(err => {
	console.log("Error: " + err.message);
});

const PostSchema = new mongoose.Schema({
	title: String,
	description: String,
});

const Post = mongoose.model("Post", PostSchema);

//The => is the same as creating our anonymous callback function
app.get("/", async (req, res) => {
	let post = await Post.create({title: "TestPost!", description: "Test description!"});
	res.send(post);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});