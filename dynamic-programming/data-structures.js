// a data structure is a way to store and organize information. 
// typical data structures in javascript include objects, arrays, maps, and sets. 
// knowing how to use data structures is an important part of improving 
// efficiency, organization, and scalability of your program. 

// --------------------------------------------------------------------
// example #1: working with objects 
// Use an object to represent a student's profile
const student = {
  name: "Hannah",
  major: "Industrial Engineering",
  year: 2,
  isEnrolled: true,
};

// Access and update properties
console.log(student.name); // "Hannah"
student.year += 1; // moving to next year
console.log(student.year); // 3
// --------------------------------------------------------------------
// example #2: working with arrays 
// Use an array to store grades and compute the average
const grades = [88, 92, 76, 95, 84];

const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Average grade:", average); // e.g. 87
// --------------------------------------------------------------------
// example #3: working with maps 
// Use a Map to track item prices in a store
const storePrices = new Map();
storePrices.set("Apples", 1.25);
storePrices.set("Bananas", 0.75);
storePrices.set("Oranges", 1.5);

console.log("Bananas cost $" + storePrices.get("Bananas")); // 0.75

// Easily iterate over key-value pairs
for (const [item, price] of storePrices) {
  console.log(`${item}: $${price}`);
}
// --------------------------------------------------------------------
// example #4: working with sets  
// Use a Set to keep track of unique class IDs a student has taken
const classes = new Set();

classes.add("MATH-220");
classes.add("IE-201");
classes.add("MATH-220"); // duplicate ignored
classes.add("CS-111");

console.log(classes); // Set(3) { 'MATH-220', 'IE-201', 'CS-111' }

// Check if a class is already taken
console.log(classes.has("CS-111")); // true
