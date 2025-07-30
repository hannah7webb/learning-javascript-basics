// note: to run code, type node recursion-examples.js into your terminal and click enter 
// how recursion works + examples of usecases: 
    // recursion is a programming technique where a function calls itself
    // each call works on a smaller part of the problem 
    // the function keeps calling itself until it reaches a base case (a condition that stops further recursion)
    // once the base case is met, the function returns and previous calls compound upon each other backwards
    // recursion is useful for solving complex, naturally nested problems (e.g. factorials, traversing through trees)
// --------------------------------------------------------------------
// example #1: uses a recursive function to calculate factorials 
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // function call inside the function itself
}
console.log("We can use recursion to calculate the factorial of 5, " + factorial(5) + "."); 
// when n = 5: return 5 * factorial(4)
// when n = 4: return 4 * factorial(3)
// when n = 3: return 3 * factorial(2)
// when n = 2: return 2 * factorial(1)
// when n = 1: return 1 * factorial(0)
// when n = 0: factorial(0) returns 1 <-- hits base case: stops recursion, plugs in 1 for factorial(0), and begins evaluating backwards
//  for n = 1: return 1 * 1 = 1 
//  for n = 2: return 2 * 1 = 2 
//  for n = 3: return 3 * 2 = 6 
//  for n = 4: return 4 * 6 = 24 
//  for n = 5: return 5 * 24 = 120
// --------------------------------------------------------------------
// example #2: uses a recursive function to 
const comments = [
  {
    text: "I like this video!",
    replies: [
      {
        text: "Me too!",
        replies: [
          { text: "Especially the part at 2:10", replies: [] },
        ],
      },
      { text: "Really? I didn't really like it.", replies: [] },
    ],
  },
];

function printComments(comments, indent = 0) {
  comments.forEach(comment => {
    console.log(' '.repeat(indent) + comment.text);
    printComments(comment.replies, indent + 2);
  });
}

printComments(comments);
