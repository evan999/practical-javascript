// Case 1: In a regular function (or if you're not in a function at all), 
// this points to window. This is the default case.

function logThis(){
    console.log(this);
}

window
// this -> window

// Case 2: When a function is called as a method, this points to the object 
// that's on the left side of the dot.

var myObject = {
  myMethod: function() {
    console.log(this);
  }
};

myObject.myMethod(); // myObject

// Case 3: In a function that's being called as a constructor, 
// this points to the object that the constructor is creating.

function Person(name) {
  // this = {};
  this.name = name; // {name: 'evan'}
  // return this;
}

var evan = new Person('evan');
console.log(evan); // {name: 'evan'}

// Case 4: When you explicitly set the value of this manually using bind, 
// apply, or call, it's all up to you.

function logThisWithArguments(greeting, name) {
  console.log(greeting, name);
  console.log(this);
}

//logThis(); // window

logThisWithArguments.apply({name: 'Evan'}, {'hi', 'evan'});
logThisWithArguments.call({name: 'Evan'}, {'hi', 'evan'});
// Method on functions
// Returns a copy of the function where 'this' 
// is set to the first argument passed into .bind().

var explicitlySetLogThis = logThis.bind({name: 'Evan'});

explicitlySetLogThis(); // {name: 'Evan'}

logThis.apply({name: 'Evan'});
logThis.call({name: 'Evan'}); 



// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
var boundOnce = logThis.bind({name: 'The first time is forever'});

// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})();
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});

// Case 5: In a callback function, apply the above rules methodically.

function outerFunction(callback){
    callback();
}

function logThis(){
    console.log(this);
}

/*
 * Case 1: The regular old default case.
 */
 
outerFunction(logThis); // window

/*
 * Case 2: Call the callback as a method
 * (You'll probably NEVER see this, but I guess it's possible.)
 */
 
function callAsMethod(callback) {
  var weirdObject = {
    name: "Don't do this in real life"
  };
  
  weirdObject.callback = callback;
  weirdObject.callback();
}

callAsMethod(logThis); // `weirdObject` will get logged to the console

/*
 * Case 3: Calling the callback as a constructor. 
 * (You'll also probably never see this. But in case you do...)
 */
 
function callAsConstructor(callback) {
  new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console

/*
 * Case 4: Explicitly setting `this`.
 */
 
function callAndBindToGordon(callback) {
  var boundCallback = callback.bind({name: 'Gordon'});
  boundCallback();
}

callAndBindToGordon(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToGordon` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToGordon(boundOnce); // {name: 'The first time is forever'}
