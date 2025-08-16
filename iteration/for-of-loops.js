// this file explains how for-of loops work and provides examples of usecases 
    // the for-of loop essentially states "take every element in this set (array, string, map, etc.), 
    // assign it to this variable, and perform this action on the variable."
    // it is a cleaner way to loop through each element than to use a regular for loop 
    // because it lets you access values directly rather than using an indexer variable. 
// --------------------------------------------------------------------
// example #1: demonstrates usecase of for-of loop over for loop by accessesing the elements 
// of an array variable 
const names = ["Jack", "Joel", "James", "Joe"]; // creates an array of name elements 

// for loop that prints each name so long as our indexer is less than our array length
for (let i = 0; i < names.length; i++) { 
    console.log(names[i])
}

// for-of loop that prints each name of names array 
for (const name of names) { 
    console.log(name);
}

// summary: thus, you can see that by using a for-of loop, we can directly access elements in 
// the array by instantiating a variable representing each element--no iterator needed. 
// --------------------------------------------------------------------
// example #2: demonstrates usecases of for-of loop by accessing property keys, property key values, 
// and property entries via built-in object methods.
const dog1 = {
    breed: "Golden Retriever",
    age: 3,
    owner: "Bill Merkley"
} 

console.log(Object.keys(dog1)); // prints property key names in an array 

// for every variable key of the dog1 object's property keys, print __. 
for (const key of Object.keys(dog1)) { 
    console.log(key, ":",  dog1[key]) // bracket notation lets you access key values
}

// for every variable val of the dog1 object's property key values, print __. 
for (const val of Object.values(dog1)) { 
    console.log("data piece: ", val) 
}

// for every variable entry of the dog1 object's entries, print __. 
for (const entry of Object.entries(dog1)) { 
    console.log("entry: ", entry) 
}
// --------------------------------------------------------------------
// example #3: demonstrates usecase of when to use for-in versus for-of. 
// for-in is a cleaner way to access property keys if you do not want to use the built-in object 
// method Object.keys() 
for (const key in dog1) {
    console.log("for-in key:", key, dog1[key]); // keys only
}
// however, you should not rely on for-in if you only want an object's *own* properties,
// because for-in also iterates over inherited properties from its prototype chain.

