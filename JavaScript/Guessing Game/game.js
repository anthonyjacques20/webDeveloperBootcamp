//create secret number
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number yo!");

//check guess
if (Number(guess) === secretNumber){
    alert("You got it right!!");
}
else{
    if(Number(guess) > secretNumber){
        alert("Guess lower!");
    }
    else{
        alert("Guess Higher!");
    }
}
//To show the type
//alert(typeof(guess));