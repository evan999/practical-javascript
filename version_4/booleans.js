//Store todos of an object

// var todos = ['item1', 'item2', 'item3'];

var todoList = {
    todos: [],
    displayTodos: function(){ // function within object to display todos
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText){ 
        this.todos.push({ 
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

/*
{
    todoText: 'item1',
    completed: false
}
*/