// Demonstrates how console.log works: 
    // prints to the terminal
    // its return value is undefined
    // custom logger function can return the logged value

console.log("Hello, world!"); // prints text to terminal (return type is undefined)

let result = console.log("Hello, again!"); // prints text to terminal, assigns result undefined return type
console.log(result); // prints result (undefined)

function logger(val) {
    console.log(val);
    return val; 
}
let text = "hey!"; 
logger(text); // calls function that prints text to terminal (return type is the val)

let otherText = logger("bye!"); // prints text to terminal, assigns val as return type 
logger(otherText); // prints otherText, val return type 




