// Sum of all arguments

// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum() {
  return [...arguments].reduce((elementOne, elementTwo) => elementOne + elementTwo, 0);
}

console.log( sum(1));
// 1
console.log( sum(1, 2));
// 3
console.log( sum(5, 7, 9));
// 21
console.log( sum(12, 1, 1, 1, 1));
// 16
console.log( sum(12, 1, 1, 1, 1, 1, 1));
// 18


// Solution 1
function sum() {
  var total = 0;
  for(var i in arguments){
    total += arguments[i];
  }
  return total;
}


// Solution 2
function sum(...xs) {
  return xs.reduce((x, y) => x + y);
}


// Solution 3
function sum() { return [].reduce.call(arguments, function(s,v){ return s+v },0 ) }


// Solution 4
const sum = (...xs) => xs.reduce((x, y) => x + y);


// Solution 5
function sum() {
  return Array.prototype.reduce.call(arguments, function(t, v) { 
    return t + v; 
  }, 0);
}


// Solution 6
function sum() {
  return [].reduce.call(arguments, function (sum, x) { return sum + x }, 0);
}


// Solution 7
function sum() {
  var sum = 0;
  for(var i=0; i<arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}


// Solution 8
function sum(...args) {
  // return the sum of all arguments given.
  return args.reduce((acc,cur)=>acc+cur);
}


// Solution 9
function sum() { return [...arguments].reduce(($, el) => $ + el, 0) }


// Solution 10
function sum() {
  let summ = 0;
  for(var i in arguments){
    summ += arguments[i];
  }
  return summ;
}


// Solution 11
let sum = (...arr) => require('lodash').sum(arr)


// Solution 12
const sum = (...args) =>
  args.reduce((prev,curr) => prev + curr)