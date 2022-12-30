// Be Concise II - I Need Squares

// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

// Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

// There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
// Don't you think the array parameter is a bit wordy? ;)

// Good luck! :D

// function squaresOnly(a) {
//   var r = [], isSquare;
//   for (let i = 0; i < a.length; i++) {
//     isSquare = !1; // !1 evaluates to false and is therefore a shorthand way of typing 'false'
//     for (let k = 0; k <= 10; k++) {
//       if (k ** 2 === a[i]) {
//         isSquare = true;
//       }
//     }
//     if (isSquare) {
//       r[r.length] = a[i];
//     }
//   }
//   return r;
// }

function squaresOnly(a) {
  return a.filter(e => Number.isInteger(Math.sqrt(e)));
}

console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]));
// [0,1,4,9]);
console.log(squaresOnly([31,33,35,37,39,38,36,34,32]));
// [36]);
console.log(squaresOnly([0,10,20,30,40,50,60,70,80,90,100]));
// [0,100]);
console.log(squaresOnly([20,19,18,17,16,15,13,11,9,1,5,4]));
// [16,9,1,4]);
console.log(squaresOnly([45,36,75,64,9,9,4,1,4,1,1,16,16,18,17,35,25,35]));
// [36,64,9,9,4,1,4,1,1,16,16,25]);


// Solution 1
function squaresOnly(array) {
  return array.filter(n => Number.isInteger(Math.sqrt(n)))
}


// Solution 2
function squaresOnly(a) {
  return a.filter(x => x ** 0.5 % 1 == 0);
}


// Solution 3
var squaresOnly = array => array.filter(number => Math.sqrt(number) % 1 === 0);


// Solution 4
squaresOnly=a=>a.filter(x=>!(x**.5%1))


// Solution 5
const squaresOnly = array =>
  array.filter(val => Number.isInteger(val ** 0.5));


// Solution 6
let squaresOnly = (a) => f(a);

function f(array) {
  var result = [], isSquare;
  for (let i = 0; i < array.length; i++) {
    isSquare = !1; // !1 evaluates to false and is therefore a shorthand way of typing 'false'
    for (let k = 0; k <= 10; k++) {
      if (k ** 2 === array[i]) {
        isSquare = true;
      }
    }
    if (isSquare) {
      result[result.length] = array[i];
    }
  }
  return result;
}


// Solution 7
/*
var squaresOnly=a=>a.filter(v=>~Array.from(Array(11),(v,i)=>i*i).indexOf(v))
var squaresOnly=a=>a.map(Math.sqrt).filter(v=>!(v%1)).map(v=>v*v)
var squaresOnly=a=>a.reduce((t,v)=>Math.sqrt(v)%1?t:[...t,v],[])
var squaresOnly=a=>a.filter(v=>s(v)==~~s(v)),s=Math.sqrt
*/
var squaresOnly=a=>a.filter(v=>!(Math.sqrt(v)%1))


// Solution 8
const squaresOnly = aa => aa.filter(a=>!((a**.5)%1))


// Solution 9
let squaresOnly = a => a.filter(e => !(e ** 0.5 % 1));


// Solution 10
let squaresOnly = a => a.filter(x => !(Math.sqrt(x) % 1))


// Solution 11
function squaresOnly(arr) {
  return arr.filter(v=>!((v**.5)%1));
}


// Solution 12
function squaresOnly(a) {
  return a.filter(f => f ** .5 % 1 == 0)
}


// Solution 13
var squaresOnly=a=>a.filter(n=>n===Math.round(Math.sqrt(n))**2)


// Solution 14
let squaresOnly = arr => arr.filter(el => Math.sqrt(el) % 1 === 0)