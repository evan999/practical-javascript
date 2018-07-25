//A place to store todos
var todos = ['item1', 'item2', 'item3'];

//Display todos
console.log('Hello there', 'Evan');
console.log('My Todos: ', todos);

//Add new todos
todos.push('item4');

console.log(todos);

todos.push('item5');

console.log(todos);

//Change a todo

todos[0] = 'item 1 updated';

var firstItem = todos[0];

//Delete a todo

var removeFirstItem = todos.splice(0, 1); //Remove first item

console.log(todos);

var removeFifthItem = todos.splice(3, 1); //Remove fifth item

todos.splice(3, 1); //Remove item that is not in array. Returns empty array.



