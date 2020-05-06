var number = prompt("Enter a number for factorial");
alert("Factorial of " + number + " is " + factorial(number));


var string = prompt("Enter a string for kebabtosnake");
alert("kebab to snake of " + string + " is " + kebabToSnake(string));


function factorial(num){
    if (num <= 1){
        return 1;
    }
    for(i = num; i > 1; i--){
        return num*factorial(i-1);
    }
}

//Note there is no replace all function for strings
//Need to apply the global modifier, g
function kebabToSnake(str){
    return str.replace(/-/g,"_");
}