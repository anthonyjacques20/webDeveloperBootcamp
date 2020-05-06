window.setTimeout(function(){
    var todos = [];
    var input = prompt("What would you like to do")

    while(input !== "quit"){
        if(input ==="list"){
            listTodos();
        }
        else if (input ==="new"){
            addTodos();
        }
        else if (input === "delete"){
            deleteTodos();
        }
        var input = prompt("What would you like to do")
    }

    function listTodos(){
        console.log("**********");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        })
        console.log("**********");
    }
    
    function addTodos(){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added " + newTodo + " to the list");
    }
    
    function deleteTodos(){
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Index " + index + " deleted");
    }
}, 500)