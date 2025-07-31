// explains the concept of scoping with var, let, and const + examples of use cases: 
    // the scope of a variable describes where it can be accessed in your program 
    // if a variable has a global scope, it is accessible everywhere 
    // if a variable has a local scope, it can only be accessed within its function/block
        // in javascript there are three ways of defining variables:
            // var -- can be globally or locally accessed, can redefine variables initialized with var 
            // let -- only accessible within its block, typically used for values you do plan on changing 
            // const -- only accessible within its block, typically used for values you do not want to change 
// --------------------------------------------------------------------
// example #1: demonstrates a use case for var 
function varScope() {
    var local = "this is a local variable that can only be accessed within its function.";
    if (true) {
        var insideBlock = "this is a local variable that be accessed anywhere within its function--not just the if-statement block."; 
    }
    console.log(local);
    console.log(insideBlock); // accessing insideBlock outside of the block it was declared in!
}
varScope(); // note that console.log(local) will throw an error because local was defined within a function--locally scoped 
// --------------------------------------------------------------------
// example #2: demonstrates a use case for let
function letScope() {
    if (true) {
        let blockVar = "this variable has a block scope (only accessible within this if-statement block)."; 
        console.log(blockVar); 
        blockVar = "we can change the value of this variable as long as we're in the same block!"; 
        console.log(blockVar); 
    } 
}
letScope(); 
// --------------------------------------------------------------------
// example #3: demonstrates a use case for const 
function constScope() {
    const pi = 3.14; 
    console.log("we can use const to declare variables that we don't plan on changing, like pi: " + pi + "."); 
}
constScope();
// --------------------------------------------------------------------
// example #4: explores case where var is problematic (why block scoping became necessary)
    // when block scope is ignored, variables declared at the top of loops with var can be accessed outside the loop. 
    // we typically don't want these variables to be accessed outside the loop because tampering with them could disturb our loop's behavior.

// standard guest ticket is $10 
// after 5 guests, for every additional guest there is a large party fee: 
// 6th guest + $6, 7th guest + $7, etc. 
function costTickets(guests) {
    var cost = 0; 
    for (var i = 0; i < 5; i++) {
        if (guests > 0) {
            cost += 10; 
        }
        guests -= 1; 
    }
    // imagine if i changed i's value here--we'd mess up our next loop which relies on i's previous value
    for (guests; guests > 0; guests--) {
        if (guests > 0) {
            cost += 10; 
            cost += i + 1; 
        }
    }
    return cost
}
console.log(costTickets(6));
