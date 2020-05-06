var person = {
    name: "Anthony",
    age: 26,
    city: "Oakland"
}

person["name"] = "Baller McBuckets";

var person = {
    age: "26",
    health: 50,
    exercise: function(){
        Console.log("Good job exercising!");
    }

}
person.exercise();


var person = {
    age: "26",
    health: 50,
    exercise: function(){
        this.health += 10;
        Console.log("You increased your health!");
    }

}
person.exercise();

document.getElementById("first");
document.getElementsByClassName("special")[0]
document.querySelector("#first")
document.querySelector(".special")
document.getElementsByTagName("p")[0]

tag.style.color = "blue";
tag.classList.add("some-class");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "pink";
    });
}

document.querySelectorAll("table tr").length - document.querySelectorAll("table").length

condition ? value_if_true: value_if_false;

//jQuery
$("h1")[0].css("color", "yellow");

//alerts when any button is clicked
$('button').click(function(){
    alert("Someone clicked a button");
})

//this in JS = $(this) in jQuery
$("button").click(function(){
    var text = $(this).text();
    console.log("You clicked " + text);
});

$("input").keypress(function(event){
    if(event.which === 13){
        alert("YOU HIT ENTER");
    }
});

$("h1").on("click",function(){
    $(this).css("color", "purple");
});

$("button").on("click", function(){
    $('div').fadeOut(1000, function(){
        $(this).remove();
    });
});

var something = require('{name of package}');

app.listen(3000, function(){
    console.log('Server listeneing on port 3000');
})

PORT=3000 node app.js

app.get("/r/:subredditName", function(req, res){
	console.log(req.params);
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
})}

res.render("love.ejs", {thingVar: thing});

res.redirect("/friends");