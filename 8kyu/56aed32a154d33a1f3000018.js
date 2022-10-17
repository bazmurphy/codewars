// Fix the Bugs (Syntax) - My First Kata

// Overview

// Hello, this is my first Kata so forgive me if it is of poor quality.

// In this Kata you should fix/create a program that returns the following values:

// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers

// You may assume the following:

// If a and b are both numbers, neither of a or b will be 0.

// Language-Specific Instructions
// Javascript and PHP

// In this Kata you should try to fix all the syntax errors found in the code.

// Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

// Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.

function myFirstKata(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    } else {
        return (a % b) + (b % a);
    }
}

console.log(myFirstKata(3,5),(3 % 5 + 5 % 3));
console.log(myFirstKata("hello",3),false);
console.log(myFirstKata(67,"bye"),false);
console.log(myFirstKata(true,true),false);
console.log(myFirstKata(314,107),(107 % 314 + 314 % 107));
console.log(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));

// Solution 1
function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}


// Solution 2
const myFirstKata = (a, b) => typeof a !== "number" || typeof b !== "number" ? false : a % b + b % a;


// Solution 3
function myFirstKata(a,b) {
  if (typeof a!="number"||typeof b!="number") return false;
  return a % b + b % a
}


// Solution 4
function myFirstKata(a, b) {
  if ([a, b].some(x => typeof x !== 'number')) return false;
  return (a % b) + (b % a);
}


// Solution 5
var myFirstKata =(a, b)=> (+a===a && +b===b) ? (a%b + b%a) : !!0


// Solution 6
const myFirstKata = (a, b) => 
  +a === a && +b === b ? a % b + b % a : false;


// Solution 7
const areNumber = (...ns) => ns.every(n => typeof n === 'number');
const myFirstKata = (a, b) => areNumber(a, b) ? a % b + b % a : false;


// Solution 8
const myFirstKata = (a, b) => (typeof a === 'number' && typeof b === 'number')  ? (a % b) + (b % a) : false;


// Solution 9
function myFirstKata(a, b) {
  console.log(a, b);
  if (typeof(a) != typeof(1) | typeof(b) != typeof(1)) { return false; }
  else { return a % b + b % a; }
}


// Solution 10
function myFirstKata(a, b) {
  return typeof a == 'number' && typeof b == 'number' ? a % b + b % a : false;
}


// Solution 11
const myFirstKata=(a, b)=>(typeof(a) != "number" || typeof(b) != "number") ? false : a % b + b % a;


// Solution 12
function myFirstKata(a, b) {
//   if (typeof(a) === "number" && typeof(b) === "number") {
//     return a % b + b % a
//   } else return false
// }
  return (typeof(a) === "number" && typeof(b) === "number") ? a % b + b % a : false
}

