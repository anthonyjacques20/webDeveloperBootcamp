console.log("Between -10 and 19");
var i = -10;
while (i <= 19){
    console.log(i);
    i++;
}

console.log("For loop version");
for(var i = -10; i <= 19; i++){
    console.log(i);
}

console.log("even numbers between 10 and 40");
var i = 10;
while (i <= 40){
    if (i % 2 == 0){
        console.log(i);
    }
    i++;
}

console.log("For loop version");
for(var i = 10; i <= 40; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

console.log("Odd between 300 and 333");
var i = 300;
while (i <= 333){
    if(i % 2 == 1) {
        console.log(i);
    }
    i++;
}

console.log("For loop version");
for(var i = 300; i <= 333; i++){
    if(i % 2 == 1) {
        console.log(i);
    }
}


console.log("Divisible by 5 and 3 between 5 and 50");
var i = 5;
while (i <= 50){
    if(i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
    i++;
}
console.log("For loop version");
for(var i = 5; i <= 50; i++){
    if(i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}
