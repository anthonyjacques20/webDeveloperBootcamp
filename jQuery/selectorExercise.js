$("h1").text(); //Returns the text
$("h1").text("New Text"); //changes the h1's text to "New Text"
//Text is considered HTML safe so it treats it as text rather than HTML
$("h1").html(); //Returns the inner text
$("ul").html("<li>I hacked your UL!</li>"); //Changes the inner text to be a list
