// this file explains what constructors are and how to build and use them 
    // constructors allow you to build instances of objects in javascript
    // there are built-in constructors like Date() and Array(), 
    // and there are constructors that you build yourself, which you use the new keyword to call 
    // however, there are also objects that do not have constructors like Math
// --------------------------------------------------------------------
// example #1: using built-in constructors (native objects) 
var object = new Object(); // use case--> build or extend objects 
object.propkey1 = "keyval1"; 
object.propkey2 = "keyval2"; 
console.log("we can use the constructor Object() to create a generic object with properties: " + object.propkey1 + ", " + object.propkey2);

const nums = new Array(1, 2, 3); // use case--> create arrays dynamically, including fixed-size arrays
console.log("we can use the constructor Array() to create an array of numbers: " + nums);

const currentDate = new Date();
const birthday = new Date("7/22/2006"); // use case--> create and manipulate time/date values easily (almost like accessing a date/time API)
console.log("we can use the constructor Date() to create a date object representing the current date or a birthday: " + currentDate + ", " + birthday);
// --------------------------------------------------------------------
// example #2: building and using custom constructors
function CannedFood(type, expirationDate) {
    this.type = type; // 'this' keyword --> "attach type as a property to every new instance of this object" 
    this.expirationDate = expirationDate; } // 'this' keyword --> "attach expirationDate as a property to every new instance of this object" 

let can1 = new CannedFood("beans", "2025-12-01"); // create new instance of CannedFood item and storing to a variable
let can2 = new CannedFood("tomatoes", "2026-03-15"); // create new instance of CannedFood item and storing to a variable

console.log("this can of " + can1.type + " has an expiration date of " + can1.expirationDate); // calling properties of the object we created via dot notation
console.log("this can of " + can2.type + " has an expiration date of " + can2.expirationDate); // calling properties of the object we created via dot notation
// --------------------------------------------------------------------
// example #3: using objects that do not have constructors 
console.log("some built-in objects like Math do not have constructors, meaning that by using them you are not creating an instance of an object");
console.log("instead, these objects already exist in the JavaScript environment, so we can use their methods and properties directly, as if they were pre-programmed elsewhere");
console.log("let's use Math.pow to take 2 to the power of 4: 2^4 = " + Math.pow(2, 4));

