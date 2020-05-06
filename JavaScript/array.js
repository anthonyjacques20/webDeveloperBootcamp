var testList = ["Get Buckets", "Make it rain", "ball out", "dunk of fools"];
console.log("List length " + testList.length);
printReverse(testList);

var uniformTest = [1,1,1,1,1,0];
console.log("The resulf of isUniform: " + isUniform(uniformTest));

var sumTest = [1,1,1,1,1,1,4];
console.log("The result of sumArray: " + sumArray(sumTest));


var maxTest = [-10,-11,-200,-1,100];
console.log("The result of max: " + max(maxTest));


function printReverse(myList){
    console.log("List length " + myList.length);
    for(var i = myList.length - 1; i >= 0; i--){
        console.log(myList[i]);
    }
    return null;
}

function isUniform(myList){
    for(var i = 0; i < myList.length; i++){
        if (myList[i] !== myList[0]){
            return false;
        }
    }
    return true;
}

function sumArray(myList) {
    var sum = 0;
    for(var i = 0; i < myList.length; i++){
        sum = sum + myList[i];
    }
    return sum;
}

function max(myList){
    var maxNum = myList[0];
    for(var i = 0; i < myList.length; i++){
        if(myList[i] > maxNum){
            maxNum = myList[i];
        }
    }
    return maxNum;
}



function myForEach(arr,func){
    for(var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

myForEach(colors, function(){alert("HI!")})
//function(){alert("HI!")}()

Array.prototype.myForEach = function(func){
    for(var i = 0;i < this.length; i++){
        func(this[i]);
    }
}
friends.myForEach(function(name){console.log("Let's hang out " + name)});
