function logTenNumbers(){
    for (var i = 0; i < 10; i++){
        console.log(i);
    }
}

//debugger;
//logTenNumbers();
function runWithDebugger(ourFunction){
    debugger;
    ourFunction();
}


runWithDebugger(function logTenNumbers(){
    for (var i = 0; i < 10; i++){
        console.log(i);
    }
});


//Alarm clock using setTimeout
setTimeout(function () {
    console.log('Wake up!');
}, 5000) //After 5 seconds, displays console message "Wake up!"

var students = ['jonathan', 'jenny', 'elliot'];

function logName(name){
    console.log(name);
}

students.forEach(logName);

students.forEach(function logName(name){
    console.log(name);
});

students.forEach(function (name){
    console.log(name);
});

function forEach(myArray, myFunction){
    for (var i = 0; i < myArray.length; i++){
        myFunction(myArray[i]);
    }
}

forEach(students, function(student){
    console.log(student);
});

forEach(students, logName); //calls forEach function

var tutorialsElement = $0;

tutorialsElement.addEventListener('click', function(event){
    console.log(event);
    console.log('The tutorials element was clicked');
});











