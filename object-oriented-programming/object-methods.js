// this file explains how to use object methods and the 'this' keyword to access and manipulate object properties.
// it also introduces how using a class can help programmers avoid writing redundant code in object creation 
    // use the 'this' keyword (this.property) when you plan to manipulate object properties in the same way across mulitple objects 
    // use dot notation (object.property) when you plan to manipulate object properties on a single, specific object 
// --------------------------------------------------------------------
// example #1: demonstrates a use case for 'this' keyword & how using a class significantly cleans up our code. 
// using the 'this' keyword and a LibraryItem class, we are able to create custom library objects and efficiently apply methods 
// like checkOut and return across each item type. 

// ---- creates custom objects ----
var libraryBook = {
    title: "The Great Divorce", 
    isCheckedOut: true, 
    return: function() {
        this.isCheckedOut = false; 
    },
    checkOut: function() {
        this.isCheckedOut = true; 
    }
} 

var libraryLaptop = {
    number: 15,
    isCheckedOut: false, 
    return: function() {
        this.isCheckedOut = false; 
    },
    checkOut: function() {
        this.isCheckedOut = true; 
    }
}
// instead of creating a new object with new properties each time as seen above, we can cut down our 
// amount of code written by creating a class as a blueprint to define the shared structure and behaviors. 
// Then, we create individual instances of the class using the 'new' keyword, which helps reduce code 
// duplication and keeps the code organized.

class LibraryItem {
    constructor(type, idOrTitle) {
        this.type = type; 
        this.idOrTitle = idOrTitle;
        this.isCheckedOut = false; 
    }
    checkOut() {
        this.isCheckedOut = true; 
    }
    return() {
        this.isCheckedOut = false; 
    }
}

let book = new LibraryItem("book", "The Great Divorce");
let laptop = new LibraryItem("laptop", 15);

console.log("is the book checked out? " + book.isCheckedOut);
console.log("ok, let's return it."); book.return(); 
console.log("is the book checked out? " + book.isCheckedOut);
console.log("ok, let's check it out."); book.checkOut(); 
console.log("is the book checked out? " + book.isCheckedOut);

console.log("is the laptop checked out? " + laptop.isCheckedOut);
console.log("ok, let's check it out."); laptop.checkOut(); 
console.log("is the laptop checked out? " + laptop.isCheckedOut);
console.log("ok, let's return it."); laptop.return(); 

// --------------------------------------------------------------------
// example #2: demonstrates a use case for dot notation:
// when you want to access or update properties of a specific object 
// in a way that applies only to that particular object instance

var singleBook = {
    title: "1984",
    author: "George Orwell",
    isCheckedOut: false
};

// checking the status using dot notation directly on the object:
console.log("is the favorite book checked out? " + singleBook.isCheckedOut);

// manually changing the property on this specific object:
singleBook.isCheckedOut = true;
console.log("ok, let's check it out.");
console.log("now, is the favorite book checked out? " + singleBook.isCheckedOut);

// changing the title just for this object only:
singleBook.title = "Animal Farm";
console.log("the updated title is: " + singleBook.title);

// Summary: Use 'this' when writing reusable methods across multiple object instances (like in classes).
// Use dot notation when directly editing or accessing values on a one-off object.

