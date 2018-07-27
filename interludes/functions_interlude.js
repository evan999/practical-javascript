var myName = 'Evan';


function sayName(){
    var secret = 'watchandcode';
    console.log(myName);
}

console.log(sayName());
console.log(secret); //Uncaught ReferenceError: secret is not defined

// If you're inside of sayName, you can look out and see data,
// but the opposite isn't true. If you're outside, you can't
// look in.