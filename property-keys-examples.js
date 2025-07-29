// Demonstrates how property keys work + examples of a usecases: 
    // property keys: key-value pairs that assign a value to an object 
    // useful for storing object-specific information 
    // analogy: css property is to a css class as property key is to object 
        // both a css property and property key provide unique details about the class/object they belond to 
        // a css class holds styling rules (property-value pairs), while an object holds data (property key-value pairs)
// --------------------------------------------------------------------
// Example 1: creates user with name, age, isPremium property key values 
const user = {
    name: "John Smith", // property key 'name' with string value 
    age: 40, // property key 'age' with number value 
    isPremium: false // property key 'isPremium' with boolean value
}

console.log(user.name); // prints: John Smith 
console.log(user.age); // prints: 40 
console.log(user.isPremium); // prints: false
// --------------------------------------------------------------------
// Example 2: stores multiple musicians as objects in an array, uses property keys 
// to hold data and dynamically adds a 'compatibility' property based on matching criteria
let musicians = [ // creates an array with 3 musicians. each has 3 property keys: name, instrument, style
  { name: "Hannah", instrument: "clarinet", style: "classical" }, 
  { name: "Noah", instrument: "violin", style: "classical" },
  { name: "Sophia", instrument: "saxophone", style: "jazz" }
];

// search criteria object with sample vals for its two property keys (preferredInstrument & preferredStyle)
let searchCriteria = { preferredInstrument: "violin", preferredStyle: "jazz"};  

// function with a simple compatibility calculation algorithm 
function calculateCompatibility(musician, searchCriteria) {
    let score = 0; 
    if (musician.instrument === searchCriteria.preferredInstrument) {
        score += 50; 
    }
    if (musician.style === searchCriteria.preferredStyle) {
        score += 50; 
    }
    return score;
}

// function that returns the user info and calculated compatibility score 
function objectMaker(user, score) {
    return {
        ...user,          
        compatibility: score
    };
}

// maps compatibility score onto musician objects and returns updated array of results 
let results = musicians.map(musician => {
    let score = calculateCompatibility(musician, searchCriteria);
    return objectMaker(musician, score);
});

// prints results to terminal
console.log(results);
