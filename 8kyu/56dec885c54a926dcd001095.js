// Opposite number

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number
}

console.log(opposite(1))
// -1
console.log(opposite(0))
// 0
console.log(opposite(4.25))
// -4.25
console.log(opposite(3.3333333))
// -3.3333333
console.log(opposite(-12525220.3325))
// 12525220.3325
console.log(opposite(-5))
// 5


// Solution 1
function opposite(number) {
  return(-number);
}


// Solution 2
function opposite(number) {
  return -number;
}


// Solution 3
const opposite = number => -number;


// Solution 4
function opposite(number) {
    return number * (-1);
}


// Solution 5
const opposite = n => -n;


// Solution 6
function opposite(number) {
  if (number === 0) {
    return 0;
  } else if (number.toString().includes('.') && number > 0) {
    return parseFloat("-" + number, 10);
  } else if (number > 0) {
    return parseInt("-" + number, 10);
  } else if (number < 0 && number.toString().includes('.')) {
    var didget = number.toString().split('-').pop();
    return parseFloat(didget);
  } else {
    var didgets = number.toString().split('-').pop();
    return parseInt(didgets);
  }
}


// Solution 7
function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}


// Solution 8
function opposite(n) {return -n}


// Solution 9
const opposite = n => n * -1


// Solution 10
function opposite(n) {
  return n-n*2;
}