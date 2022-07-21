// Grasshopper - Check for factor

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. 
// If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder

// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


function checkForFactor(base, factor) {
    return base % factor === 0;
}

console.log(checkForFactor(10, 2));
// true
console.log(checkForFactor(63, 7));
// true
console.log(checkForFactor(2450, 5));
// true
console.log(checkForFactor(24612, 3));
// true
console.log(checkForFactor(9, 2));
// false
console.log(checkForFactor(653, 7));
// false
console.log(checkForFactor(2453, 5));
// false
console.log(checkForFactor(24617, 3));
// false


// Solution 1
function checkForFactor(base, factor) {
    return base % factor === 0;
}


// Solution 2
const checkForFactor = (base, factor) => base % factor === 0;


// Solution 3
const checkForFactor = (base, factor) => !(base % factor);


// Solution 4
function checkForFactor(base, factor) {
    return base % factor == 0;
}


// Solution 5
function checkForFactor(base, factor) {
    return !(base % factor);
}


// Solution 6
function checkForFactor(base, factor) {
    return !(!!(base % factor));
}


// Solution 7
checkForFactor = (b, f) => !(b % f) && f != 0;


// Solution 8
const checkForFactor = (b, f, r = !(b % f)) => r;


// Solution 9
function checkForFactor(base, factor) {
    if (base % factor === 1) return false;
    if (base % factor === 0) return true;
    return false;
}


// Solution 10
const checkForFactor = (base, factor) => base % factor === 0 ? true : false; 


// Solution 11
function checkForFactor(base, factor) {
    //   return base%factor ===0;
    return !(base % factor)
    // resultado igual com operações diferentes, o ! "não" Me da o mesmo efeito que ===0
}


// Solution 12
function checkForFactor(base, factor) {
    return base % factor === [].length
}