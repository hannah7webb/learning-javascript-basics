// ties together basic function-programming concepts 
let musicians = [
    { name: "Hannah", instrument: "clarinet", style: "classical", location: "Fresno", price: "$$" },
    { name: "Noah", instrument: "violin", style: "pop", location: "Oakland", price: "$$$" },
    { name: "Sophia", instrument: "saxophone", style: "jazz", location: "Santa Monica", price: "$$" },
    { name: "Harley", instrument: "piano", style: "pop", location: "Fresno", price: "$" },
    { name: "Ava", instrument: "flute", style: "classical", location: "San Diego", price: "$" },
    { name: "Lucas", instrument: "cello", style: "classical", location: "San Francisco", price: "$$$" },
    { name: "Mia", instrument: "trumpet", style: "jazz", location: "Santa Monica", price: "$" },
    { name: "Ethan", instrument: "double bass", style: "jazz", location: "Berkeley", price: "$$" },
    { name: "Olivia", instrument: "flute", style: "pop", location: "Fresno", price: "$" },
    { name: "Mason", instrument: "guitar", style: "jazz", location: "Santa Barbara", price: "$$" },
    { name: "Isabella", instrument: "trumpet", style: "classical", location: "Oakland", price: "$$" },
    { name: "Liam", instrument: "drums", style: "jazz", location: "Long Beach", price: "$" }
];

function calculateCompatibility(musician, instrumentPref, stylePref, locationPref, pricePref) {
    let score = 0; 
    if (musician.instrument === instrumentPref) {
        score += 25; 
    }
    if (musician.style === stylePref) {
        score += 25; 
    }
    if (musician.location === locationPref) {
        score += 25; 
    }
    if (musician.price === pricePref) {
        score += 25; 
    }
    return score;
}
 
function addCompatibility(user, score) {
    return {
        ...user,         
        compatibility: score
    };
}

function sortResults(data) {
    data.score
}

// goal: sort array ranging from highest to lowest value
// look at first, compare to each of the following items
    // if greater than the item it is compared to, leave it as is 
    // if less than the item it is compared to, swap the indexes 
// once done with that number 
    // if the number changed indexes, start on the new first number 
    // if the number has the same index, move onto the next number 

function sortTest([values]) {
let [first, ...rest] = values; // array deconstruction 

if (first.values < ) { // 

}
return sortTest([rest]);
}

// just realized why recursion is often the most elegant solution to problems: 
// because if you use loops with variable declarations in the first line, you 
// often lose valuable information about where you are in your iteration--however, 
// functions written purely recursively, naturally keep track of that information. 

console.log(sortTest([1, 5, 3, 4])); 
// look at 1 -- first number 
    // is 1 greater than 5? 
        // no, swap 1 and 5's place 5 1 3 4 
    // is 1 greater than 3? 
        // no, swap 1 and 3's place 5 3 1 4 
    // is 1 greater than 4?
        // no, swap 1 and 4's place 5 3 4 1 
// look at 5 -- first number, if all yes, move to next number. if one no, sort first number again
    // is 5 greater than 3? 
        // yes, don't swap 
    // is 5 greater than 4? 
        // yes, don't swap 
    // is 5 greater than 1? 
        // yes, don't swap
// look at 3 -- next number, prev was all yes 
    // is 3 greater than 4? 
        // no, swap 3 and 4's place 5 4 3 1 
    // is 3 greater than 1? 
        // yes, don't swap
    



// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// console.log("Let's help you find the perfect musician for your event!"); 
// rl.question("What instrument are you looking for? ", function(instrument) {
//     rl.question("What style do you prefer? ", function(style) {
//         rl.question("Where are you located? ", function(location) {
//             rl.question("What pricing do you prefer ($, $$, or $$$)? ", function(price){
//                 console.log("\nGreat! Here's what you told us: ");
//                 console.log("Instrument: " + instrument);
//                 console.log("Style: " + style);
//                 console.log("Location: " + location);
//                 console.log("Pricing: " + price);
//                 console.log("Top results for your search: ");
//                 // maps compatibility score onto musician objects and returns updated array of results 
//                 let results = musicians.map(musician => {
//                 let score = calculateCompatibility(musician, instrument, style, location, price);
//                 return addCompatibility(musician, score);
//                 });
//                 // prints results to terminal
//                 console.log(results);
//                 rl.close();
//             })
//         })
//     })
// });

// still need to write a recursive sorting function that displays results from most compatible to least compatible 
