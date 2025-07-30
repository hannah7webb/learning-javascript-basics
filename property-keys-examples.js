// note: to run code, type node property-keys-examples.js into your terminal and click enter 
// how property keys work + examples of usecases: 
    // property key-value pairs assign a value to an object 
    // property key + value = a property of the object 
    // useful for storing object-specific information
    // property keys are usually strings (name, age, ID, etc.), even if you write them unquoted
    // analogy: css property is to a css class as property key is to object 
        // both a css property and property key provide unique details about the class/object they belong to 
        // a css class holds styling rules (property-value pairs), while an object holds data (property key-value pairs)
// --------------------------------------------------------------------
// example #1: creates user with name, age, isPremium property key values 
const user = {
    name: "John Smith", // property key 'name' with string value 
    age: 40, // property key 'age' with number value 
    isPremium: false // property key 'isPremium' with boolean value
}
console.log(user.name); // prints: John Smith 
console.log(user.age); // prints: 40 
console.log(user.isPremium); // prints: false
// --------------------------------------------------------------------
// example #2: stores multiple musicians as objects in an array, uses property keys 
// to hold data and dynamically adds a 'compatibility' property based on matching criteria
let musicians = [ // creates an array with 3 musicians. each has 3 property keys: name, instrument, style
  { name: "Hannah", instrument: "clarinet", style: "classical" }, 
  { name: "Noah", instrument: "violin", style: "classical" },
  { name: "Sophia", instrument: "saxophone", style: "jazz" }
];
// searchCriteria object has two properties: preferredInstrument and preferredStyle
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
function addCompatibility(user, score) {
    return {
        ...user, // spread operator (...) copies existing properties into the new object          
        compatibility: score
    };
}
// maps compatibility score onto musician objects and returns updated array of results 
let results = musicians.map(musician => {
    let score = calculateCompatibility(musician, searchCriteria);
    return addCompatibility(musician, score);
});
// prints results to terminal
console.log(results);
// --------------------------------------------------------------------
// note that the 'compatibility' property key was dynamically added to each musician object,
// showing how property keys can be used to extend objects with new data.
