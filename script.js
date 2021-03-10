// function scope example
/*
function cool(){
    var message = "Hello world";
}
// message; // ReferenceError
*/

// Block scope example
/*
if(true){
    let a = "Hello";
    const b = "World";
    var c = "c u soon";
}

console.log(a); //ReferenceError
console.log(b); //ReferenceError
console.log(c); //prints c u soon
*/

// lexical scope & closure example
/*
function outerFunction(){
    let variable1 = 'Hello';
    return function innerFunction (){
        console.log(variable1);
    }
}

const newFunction = outerFunction();
newFunction(); //  Hello
*/

// Hoisting example
/*
 var vehicle = "Car";
 console.log(vehicle); // Car

 console.log(vehicle);
 var vehicle = "Car"; // undefined 

 console.log(vehicle);
 var vehicle = "Car";

 var vehicle;
 console.log(vehicle);
 vehicle = "Car";

*/

// Hoisting in functions 
/*
 sing();
 function sing(){
     console.log('lalala')
 }

 sing(); // Type Error sing not a function                
 var sing = function (){
     console.log('lalala')
 }
 */
