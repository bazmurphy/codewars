// Digitize

// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

function digitize(n) {
  return n.toString().split("").map(element => Number(element));
}

console.log(digitize(123))
// [1,2,3]
console.log(digitize(1))
// [1]
console.log(digitize(0))
// [0]
console.log(digitize(1230))
// [1,2,3, 0]
console.log(digitize(8675309))
// [8,6,7,5,3,0,9]


// Solution 1
function digitize(n) {
  return String(n).split('').map(Number);
}


// Solution 2
function digitize(n) {
  return n.toString().split('').map(Number);
}


// Solution 3
const digitize = $ => [ ...String( $ ) ].map( Number )


// Solution 4
function digitize(n) {
  var array = [];
  
  do {
    var number = n % 10;
    n = Math.floor(n / 10);
    
    array.unshift(number);
    
  } while(n > 0);
  
  return array;
  
}


// Solution 5
const digitize = n => Array.from(String(n), e => Number(e));


// Solution 6
const digitize = n => n.toString().split('').map(x=>+x);


// Solution 7
function digitize(n){
  let string = String(n);
  let arr = [];
  for(let i = 0; i < string.length; i++){
    arr.push(Number(string[i]))
  }
  return arr
}


// Solution 8
digitize=n=>[...(""+n)].map(t=>+t)


// Solution 9
const digitize = n => n.toString().split('').map(Number);


// Solution 10
function digitize(n) {
  return n>9 ? digitize(Math.floor(n/10)).concat([n%10]) : [n];
}


// Solution 11
function digitize(n) {
  return (n + '').split('').map(function(v){return +v});
}


// Solution 12
function digitize(n) {
  return n.toString().split('').map(function(value){return parseInt(value);});
}


// Solution 13
const digitize = a =>(''+a).split``.map(i=>parseInt(i));


// Solution 14
function digitize(n) {
  return n.toString().split('').map(item => +item);
}