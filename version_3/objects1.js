var myComputer = {
    operatingSystem: 'windows',
    screenSize: '15 inches',
    purchaseYear: '2011'
}

console.log(myComputer);

console.log(myComputer.operatingSystem);
console.log(myComputer.screenSize);
console.log(myComputer.purchaseYear);

//Function in an object

var Evan = {
    name: 'Evan',
    sayName: function(){
        console.log(this.name); //refers to the object's property
        //sayName is a method to the object Evan
    }
}