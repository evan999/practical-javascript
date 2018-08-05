var todoList = {
    todos: [],
    displayTodos: function(){ // function within object to display todos
        debugger; //pauses when you call displayTodos
        if(this.todos.length === 0){
            console.log("Your todo list is empty!");
        }
        else
        {
            console.log('My todos:');
            for(var i = 0; i < this.todos.length; i++){
                //console.log(this.todos[i].todoText);
                if(this.todos[i].completed === true){
                    console.log('(x)', this.todos[i].todoText);
                }
                else{
                    console.log('( )', this.todos[i].todoText);
                }
             
            }
            
        }
    },
    
    addTodo: function(todoText){ 
        debugger; //pauses script when you call addTodo - adding a new todo
        this.todos.push({ 
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        debugger; //script pauses on changeTodo function call - when a todo is being modified
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        debugger; //script pauses on deleteTodo function call - when a todo is being removed
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        debugger; //script pauses on toggleCompleted function call
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function(){
        debugger; //script pauses on toggleAll function call
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        //Get number of completed todos
        for (var i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
        //Case 1: If everything's true, make everything false
        if(completedTodos === totalTodos){
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }
        else{
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

//Get access to display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);

var toggleAllButton = document.getElementById('toggleAllButton');

//Run displayTodos method when someone clicks the display todos buttond
displayTodosButton.addEventListener('click', function(){
   todoList.displayTodos(); 
});

toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});

