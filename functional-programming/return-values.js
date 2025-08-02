// this file uses console.log to demonstrate the nature of function return values 
// how console.log works: 
    // it is a built-in javascript function that prints a message to the terminal 
    // its return value is undefined
    // we'll show how to use console log to 
        // print a message
        // print a message and the console log return value
        // create a custom function that prints an input and sets the return value equal to the input
        // print the custom function's return value 
// --------------------------------------------------------------------
// example #1 -- prints text to terminal, return value (undefined) unstored 
console.log("example #1 text! my return value (undefined) is unstored.");
// --------------------------------------------------------------------
// example #2 -- prints text & return value (undefined) to terminal
let result = console.log("example #2 text! my return value (undefined) was stored to result. see it below:"); 
console.log(result); 
// console.log prints "example #2 text!..." to terminal; then result stores the return value (undefined),
// which we then print, so the second console.log prints: undefined
// --------------------------------------------------------------------
// example #3 -- prints text, return value (val) unstored
function logger(val) {
    console.log(val);
    return val; 
}
let text = "example #3 text! my return value (val) is unstored."; 
logger(text); // calls function that prints text to terminal (return value is the val)
// --------------------------------------------------------------------
// example #4 -- prints text & return value (val) to terminal
let otherText = logger("example #4 text! my return value (val--this very string!) was stored to otherText. see it below:"); // prints text to terminal, assigns val as return value 
logger(otherText); // prints otherText, val return value 
// --------------------------------------------------------------------
// summary: console.log itself always returns undefined; 
// functions like logger can return custom values, which you can store in variables and use later.


