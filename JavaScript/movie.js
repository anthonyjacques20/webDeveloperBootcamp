var matrix = {
    title: "The Matrix",
    rating: "10/10",
    hasWatched: true
}

var tron = {
    title: "Tron",
    rating: "9/10",
    hasWatched: true
}

var onceUponATime = {
    title: "Once Upon a Time",
    rating: "8/10",
    hasWatched: false
}

var movies = [matrix,tron,onceUponATime];

movies.forEach(function(movie){
    var printString = "You have ";
    if (!movie.hasWatched){
        printString += "not ";
    }
    printString += "watched " + movie.title + " - " + movie.rating
    console.log(printString);

})