// how recursion works + examples of use cases: 
    // recursion is a programming technique where a function calls itself
    // each call works on a smaller part of the problem 
    // the function keeps calling itself until it reaches a base case (a condition that stops further recursion)
    // once the base case is met, the function returns and previous calls compound upon each other backwards
    // recursion is useful for solving complex, naturally nested problems (e.g. sequences, traversing through trees)
// --------------------------------------------------------------------
// example #1: uses a recursive function to calculate factorials 
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // function call inside the function itself
}
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
console.log("We can use recursion to calculate the factorial of 5, " + factorial(5) + "."); 
// --------------------------------------------------------------------
// example #2: uses a recursive function to calculate terms of the fibonacci sequence 
function fib(n) {
    if (n === 0) { // base case #1 
        return 0;
    }
    if (n === 1) { // base case #2 
        return 1; 
    }
    return fib(n - 1) + fib(n - 2); // we have two basecases for the two unknowns in our return statement 
}
// when n = 5: return fib(4) + fib(3) 
// when n = 4: return fib(3) + fib(2) 
// when n = 3: return fib(2) + fib(1) 
// when n = 2: return fib(1) + fib(0) 
// when n = 1: fib(1) returns 1  <-- hits base case 
// when n = 0: fib(0) returns 0  <-- hits base case 
// evaluating backwards: 
// for n = 2: return 1 + 0 = 1 
// for n = 3: return 1 + 1 = 2 
// for n = 4: return 2 + 1 = 3 
// for n = 5: return 3 + 2 = 5
console.log("We can use recursion to calculate the fifth term of the fibonacci sequence," + fib(5) + ".");
// --------------------------------------------------------------------
// example #3: uses a recursive function to traverse a tree of comments and replies, 
// building a string with indented comment text to show the nested structure 
const comments = [
  {
    text: "Comment #1",
    replies: [
      { text: "Reply #1 to Comment #1",
        replies: [
          { text: "Reply #1 to Reply #1", replies: [] },
        ],
      },
      { text: "Reply #2 to Comment #1", replies: [] },
    ],
  },
];
function renderComments(comments, indent = 0, acc = "") {

    if (comments.length === 0) { // base case 
    return acc; } // when no comments left to render, return accumulator
    
    const [first, ...rest] = comments; // array deconstruction: "first" is first comment in array, "rest" is remaining comments  

    acc += ' '.repeat(indent) + first.text + '\n'; // add indented space and text of first comment to accumulator
    acc = renderComments(first.replies, indent + 2, acc); // processes replies of current comment & indents based on depth 

    return renderComments(rest, indent, acc); // process rest of comments 
}
//renderComments(comments = [Comment #1], indent = 0, acc = "")
//|
//└─ process Comment #1 (indent 0)
//   ├─ add "Comment #1\n" to acc
//   └─ renderComments(replies of Comment #1, indent = 2, acc)
//      |
//      ├─ process Reply #1 to Comment #1 (indent 2)
//      |  ├─ add "  Reply #1 to Comment #1\n" to acc
//      |  └─ renderComments(replies of Reply #1 to Comment #1, indent = 4, acc)
//      |     |
//      |     ├─ process Reply #1 to Reply #1 (indent 4)
//      |     |  ├─ add "    Reply #1 to Reply #1\n" to acc
//      |     |  └─ renderComments(replies of Reply #1 to Reply #1, indent = 6, acc)
//      |     |     └─ comments is empty → **base case hit, return acc**
//      |     └─ renderComments(rest of replies at indent 4, acc)
//      |        └─ rest is empty → **base case hit, return acc**
//      |
//      └─ renderComments(rest of replies at indent 2, acc)
//         ├─ process Reply #2 to Comment #1 (indent 2)
//         |  ├─ add "  Reply #2 to Comment #1\n" to acc
//         |  └─ renderComments(replies of Reply #2, indent = 4, acc)
//         |     └─ comments empty → **base case hit, return acc**
//         └─ renderComments(rest of replies at indent 2, acc)
//            └─ rest empty → **base case hit, return acc**
console.log("We can also use recursion to traverse through a tree of comments and replies, adding indentations:");
let rendered = renderComments(comments);
console.log(rendered);
// --------------------------------------------------------------------
// example #4: uses a recursive algorithm to sum all elements in an array of integers 
function sumArray(integers, sum = 0) { // takes in an array of integers and an accumulator "sum" (defaulted to 0)
if (integers.length === 0) { // base case: when integers array is empty, return sum
  return sum; 
}
const [first, ...rest] = integers; // array deconstruction: allows us to grab first and rest elements of array 
sum += first; // add first element to sum. in each recursive call first is updated to the next value in the array, and sum is updated--accumulated
return sumArray(rest, sum); // recursive call: call function again with the rest of elements and updated sum 
}
console.log("We can use recursion to calculate the sum of an array of numbers 1, 5, 3, and 2: " + sumArray([1, 5, 3, 2]));
// --------------------------------------------------------------------
// example #5: uses a recursive algorithm to count all even integers in an array of integers 
function countEvens(integers, count = 0) { // takes in an array of integers and an accumulator "count" (defaulted to 0)
if (integers.length === 0) { // base case: when integers array is empty, return count
  return count; 
}
const [first, ...rest] = integers; // array deconstruction: allows us to grab first and rest elements of array 
if (first % 2 === 0) { // if first has no remainder when divided by 2 (even), add one to count 
  count ++; 
} 
return countEvens(rest, count); // recursive call: call function again with the rest of the elements and updated count 
}
console.log("We can use recursion to count the number of even values of an array of integers 1, 5, 3, and 2: " + countEvens([1, 5, 3, 2]));
// --------------------------------------------------------------------
// example #6: uses a recursive algorithm to count the number of times a specific value appears in an array of integers
function countValue(integers, value, count = 0) {
if (integers.length === 0) { // base case: when integers array is empty, return count
  return count;
}
const [first, ...rest] = integers; // array deconstruction: allows us to grab first and rest elements of array 
if (first === value) { // if first is equal to the value we're searching for, add one to the count 
  count++;
}
return countValue(rest, value, count); // recursive call: call function again with the rest of the elements, value searching for, and updated count 
}
console.log("We can use recursion to count the number of times a specific value (4) appears in an array of integers 1, 5, 3, 4, 1, 2, and 4: " + countValue([1, 5, 3, 4, 1, 2, 4], 4));
// --------------------------------------------------------------------
// example #7: uses a recursive algorithm to reverse a string 
function reverseString(str, index = str.length - 1, acc = "") {
if (index === -1) { // if we've finished traversing the string, return accumulator 
  return acc;
} 
acc += str[index]; // adds letter to accumulator at current index 
index--; // update index to be next letter 
return reverseString(str, index, acc); // recursive call: call function again with string, current index, updated accumulator 
}
console.log("We can use recursion to reverse strings like 'racecar is a palindrome': " + reverseString("racecar is a palindrome"));
// --------------------------------------------------------------------
// example #8: uses a recursive algorithm to check if a string is a palindrome
function checkPalindrome(str, index = str.length - 1, acc = "") {
if (index === -1) { // if we've finished traversing the string, return boolean checking if reverse string is same as original string 
  return str === acc; 
} 
acc += str[index]; // adds letter to accumulator at current index 
index--; // update index to be next letter 
return checkPalindrome(str, index, acc); // recursive call: call function again with string, current index, updated accumulator 
}
console.log("We can use recursion to check if string are palindromes:");
console.log("'check this string': " + checkPalindrome("check this string"));
console.log("'hannah: " + checkPalindrome("hannah"));









