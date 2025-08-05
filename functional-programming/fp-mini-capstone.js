// Ties together basic functional-programming concepts with a program that
// uses mapping, scoring, and recursive sorting to recommend musicians based 
// on user preferences for instrument, style, location, and price. Demonstrates 
// the use of higher-order functions, immutability via object spreading, and 
// recursion as an elegant sorting solution that avoids loops. 

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

function sortMusicians(values, index = 0) {
  if (index >= values.length - 1) return values; // base case

  let didSwap = false;

  for (let i = index + 1; i < values.length; i++) {
    if (values[index].compatibility < values[i].compatibility) {
      // swap if current value is less than the one being compared to
      [values[index], values[i]] = [values[i], values[index]];
      didSwap = true;
    }
  }

  // if we swapped, recheck the new number at the current index
  if (didSwap) {
    return sortMusicians(values, index);
  } else {
    // otherwise, move to the next index
    return sortMusicians(values, index + 1);
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Let's help you find the perfect musician for your event!"); 
rl.question("What instrument are you looking for? ", function(instrument) {
    rl.question("What style do you prefer? ", function(style) {
        rl.question("Where are you located? ", function(location) {
            rl.question("What pricing do you prefer ($, $$, or $$$)? ", function(price){
                console.log("\nGreat! Here's what you told us: ");
                console.log("Instrument: " + instrument);
                console.log("Style: " + style);
                console.log("Location: " + location);
                console.log("Pricing: " + price);
                console.log("Top results for your search: ");
                // maps compatibility score onto musician objects and returns updated array of results 
                let results = musicians.map(musician => {
                let score = calculateCompatibility(musician, instrument, style, location, price);
                return addCompatibility(musician, score);
                });
                // prints results to terminal
                console.log(sortMusicians(results, 0));
                rl.close();
            })
        })
    })
});
