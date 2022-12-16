// Is integer safe to use?

// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

// SafeInteger(9007199254740990) //true
// SafeInteger(-90) //true
// SafeInteger(9007199254740992) //false

function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

console.log(SafeInteger(9007199254740992));
// false, 'Value returned should be false');
console.log(SafeInteger(9007199254740990));
// true, 'Value returned should be true');


// Solution 1
function SafeInteger(n) {
  return Number.isSafeInteger(n);
}


// Solution 2
var SafeInteger = Number.isSafeInteger;


// Solution 3
function SafeInteger(n){
  return n <= Number.MAX_SAFE_INTEGER;
}


// Solution 4
var SafeInteger = (n) => Math.abs(n)<Number.MAX_SAFE_INTEGER



// Solution 5
const SafeInteger = $ => Number.isSafeInteger( $ )


// Solution 6
function SafeInteger(n) {
  return n < 9007199254740992
}


// Solution 7
var SafeInteger = _ => Number.isSafeInteger( _ )


// Solution 9
let SafeInteger = (n) => n < Number.MAX_SAFE_INTEGER;


// Solution 10
SafeInteger = (n) => Number.isSafeInteger(n)


// Solution 11
function SafeInteger(n) {
  return (typeof n === 'number' &&
    Math.round(n) === n &&
    Number.MIN_SAFE_INTEGER <= n &&
    n <= Number.MAX_SAFE_INTEGER);
}


// Solution 12
var SafeInteger=n=>n<2**53


// Solution 13
function SafeInteger(n) {
  var bits = n.toString(2).length;
  if(bits > 53){
    return false;
  }else{
    return true;
  }
}


// Solution 14
function SafeInteger(n) {
  return n>0&&n<9007199254740992;   
}