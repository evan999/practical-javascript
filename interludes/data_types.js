1 === 1; //evaluates to true

'evan' === 'evan'; //true

'evan1' === 'evan'; //false

1 === 2; //false

100 === 100; //true

true === true; //true

true === false; //false

undefined === undefined; //true

null === null; //true

2 === 3; //false

2 === 2; //true

// {} === {}; //false

[1, 2, 3] === [1, 2, 3]; //false

var houseA = {};

houseA === houseA; //true

var myPrimitive = 10;
var myObject = {name: 'evan'}; //Memory address 1 -> {name: 'evan'}

var myHouse = {color: 'blue'};
myHouse.color = 'red'; //Memory address 1 -> {color: 'blue'}

var myHouseB = {color: 'blue'};
var color = myHouseB.color;
color = 'red';
//blue

var myHouse1 = {color: 'blue'}; //Memory address 1 -> {color: 'blue'}
var myHouse2 = myHouse1; //Memory address 1 -> myHouse2
myHouse2.color = 'red'; 

//myHouse1.color = red
//myHouse2.color = red

var myHouse3 = {color: 'blue'}; 
var myHouse4 = {color: 'blue'};
myHouse4.color = 'red';

//myHouse3.color = blue
//myHouse4.color = red
















