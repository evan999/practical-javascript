var todos = ['item 1', 'item 2', 'item 3'];

//Function to display todos
function displayTodos(){
    console.log('My todos', todos);
}

console.log(displayTodos());

//Function to add a todo

function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

console.log(addTodo('hello there'));

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

console.log(changeTodo(0, 'changed'));
console.log(deleteTodo(2)); // delete third item


