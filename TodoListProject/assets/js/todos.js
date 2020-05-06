// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(){
    //Fade out and remove the li parent of the span
    $(this).parent().fadeOut(500, function(){
        //(this) corresponds to the parent because that is what is passed into the function
        $(this).remove();
    });
    //Stop the other events from running
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    //Check for the enter character code
    if(event.which === 13){
        //Grab new todo text
        var todoText = $(this).val()
        $(this).val("");
        //Create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});