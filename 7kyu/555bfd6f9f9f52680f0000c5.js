// Reverse a Number

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  // let result = n.toString().split("");
  // if (result[0] === "-") {
  //   return Number([...result.slice(0,1), ...result.slice(1).reverse()].join(""));
  // } else {
  //   return Number(result.reverse().join(""));
  // }

  return n.toString().split("")[0] === "-" ? Number([...n.toString().split("").slice(0,1), ...n.toString().split("").slice(1).reverse()].join("")) :  Number(n.toString().split("").reverse().join(""));
}

console.log(reverseNumber(123));
// 321
console.log(reverseNumber(-123));
// -321, 'Negative Numbers should be preserved'
console.log(reverseNumber(1000));
// 1, 'Should handle numbers ending with "0"'
console.log(reverseNumber(4321234));
// 4321234
console.log(reverseNumber(5));
// 5
console.log(reverseNumber(0));
// 0
console.log(reverseNumber(98989898));
// 89898989


// Solution 1
function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}


// Solution 2
reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')


// Solution 3
function reverseNumber(n) {
  return Math.sign(n) * Math.abs(n)
    .toString()
    .split``
    .reverse()
    .join``;
}


// Solution 4
function reverseNumber(n) {
  let x = Math.abs(n)
  let y = 0
  while (x > 0) {
    y = y * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return Math.sign(n) * y
}


// Solution 5
const reverseNumber = ( $ ) => (parseInt( `${$}`.match(/\w/g).reverse().join('') ) )*( $ < 0 ? -1 : 1)


// Solution 6
function reverseNumber(n) {
  return (n+'').match(/\d/g).reverse().join('') * (n<0? -1 : 1)
}


// Solution 7
function reverseNumber(n) {
  return +[...(""+Math.abs(n))].reverse().join("")*(n<0 ? -1:1);
}


// Solution 8
const reverseNumber = n =>
  Math.sign(n) * [...`${Math.abs(n)}`].reverse().join(``);


// Solution 9
const reverseNumber = n => Number(Math.abs(n).toString().split('').reverse().join('')) * (n > 0 ? 1 : -1);


// Solution 10
const reverseNumber = n => +(''+n).replace(/(-?)(\d+)/,(a,b,c)=> b+c.split('').reverse().join(''));


// Solution 12
function reverseNumber(number) {
  let result = 0;

  while (number) {
    result = result * 10 + number % 10;
    number = Math.trunc(number / 10);
  }

  return result;
}


// Solution 13
function reverseNumber(n) {
  return parseInt(n.toString().split("-").map(x=> x.split("").reverse().join("")).join("-"))
}


// Solution 14
function reverseNumber(n) {
  let x = Math.abs(n).toString().split("").reverse().join("")
  return n<0? -x : +x 
}