//Store todos of an object

// var todos = ['item1', 'item2', 'item3'];

var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function(){ // function within object to display todos
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

console.log(todoList.displayTodos()); //display list of todos

console.log(todoList.addTodo('new item')); //add item 'new item'

console.log(todoList.changeTodo(0, 'first')); //change first item to 'first'

console.log(todoList.deleteTodo(1)); //delete second item