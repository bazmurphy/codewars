// Be Concise III - Sum Squares

// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843

// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot

// Good luck!

function sumSquares(array) {
  return array.reduce((acc, cv) => acc + (cv ** 2), 0);
}

console.log(sumSquares([1,2,3,4,5]));
// 55
console.log(sumSquares([7,3,9,6,5]));
// 200
console.log(sumSquares([11,13,15,18,2]));
// 843
console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]));
// 110


// Solution 1
let sumSquares = a => a.reduce((s, x) => s + x * x, 0)


// Solution 2
function sumSquares(array) {
  return array.reduce((a,b) => a + b ** 2, 0);
}


// Solution 3
var sumSquares=a=>a.map(x=>x*x).reduce((x,y)=>x+y);


// Solution 4
sumSquares=a=>a.reduce((p,c)=>p+c*c,0)


// Solution 5
const sumSquares = array =>
  array.reduce((pre, val) => pre + val ** 2, 0);


// Solution 6
const sumSquares = array => array.reduce((acc, value) => acc + value ** 2, 0);


// Solution 7
sumSquares=x=>x.reduce((a,b)=>a+b*b,0)


// Solution 8
function sumSquares(x) {
  return x.reduce(function(a, b) {
    return a + Math.pow(b, 2);
  }, 0);
}


// Solution 9
function sumSquares(array) {
  return array.map(function(el) {
    return Math.pow(el, 2);
  }).reduce(function(a, b) {
    return a + b;
  });
}


// Solution 10
function sumSquares(array) {
  return array.reduce(function(previousValue, currentItem) {
          return Math.pow(currentItem, 2) + previousValue ;
      }, 0);
}


// Solution 11
let sumSquares=a=>a.reduce((s,n)=>s+n*n,0)


// Solution 12
const sumSquares = (array) => array.reduce((a,c) => a + Math.pow(c,2),0)


// Solution 13
const sumSquares = (a) => {  
  return a.map(el => (el ** 2)).reduce((a, b) => a + b);
}


// Solution 14
const sumSquares = arr => arr.reduce((a,i) => a + i**2, 0)