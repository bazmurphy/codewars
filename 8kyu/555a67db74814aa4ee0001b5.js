// Is it even ?

// In this Kata we are passing a number(n) into a function.

// Your code will determine if the number passed is even(or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


function testEven(n) {
        return n % 2 === 0;
}

console.log(testEven(0));
// true
console.log(testEven(0.5));
// false 
console.log(testEven(1));
// false
console.log(testEven(2));
// true
console.log(testEven(-4));
// true


// Solution 1
function testEven(n) {
    return n % 2 === 0;
}


// Solution 2
function testEven(n) {
    return !(n % 2);
}


// Solution 3
function testEven(n) {
    return n % 2 === 0 ? true : false;
}


// Solution 4
const testEven = n => !(n % 2);


// Solution 5
function testEven(n) {
    return (n % 2) == 0;
}


// Solution 7
function testEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    else return false;
}


// Solution 8
const testEven = n => n % 2 == 0