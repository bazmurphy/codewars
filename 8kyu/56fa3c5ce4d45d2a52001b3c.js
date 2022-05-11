// Exclusive "or"(xor) Logical Operator

// Exclusive "or"(xor) Logical Operator

// Overview

// In some scripting languages like PHP, there exists a logical operator(e.g. &&, ||, and, or, etc.) called the "Exclusive Or"(hence the name of this Kata).
// The exclusive or evaluates two booleans.It then returns true if exactly one of the two expressions are true, false otherwise.

// For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

// Task

// Since we cannot define keywords in Javascript(well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {

    // if (a !== b) {
    //     return true;
    // } else {
    //     return false;
    // }

    return a !== b;
}

console.log(xor(false, false));
// false, "false xor false === false");
console.log(xor(true, false));
// true, "true xor false === true");
console.log(xor(false, true));
// true, "false xor true === true");
console.log(xor(true, true));
// false, "true xor true === false");
console.log(xor(true, true));
// true, "'xor' is NOT identical to 'or'");


// Solution 1
function xor(a, b) {
    return a != b;
}


// Solution 2
function xor(a, b) {
    return (a || b) && !(a && b);
}


// Solution 3
const xor = (a, b) => a != b;


// Solution 4
const xor = (a, b) => !!(a ^ b)


// Solution 5
function xor(a, b) {
    if ((a === true) && (b !== true)) {
        return true
    } else if ((a !== true) && (b === true)) {
        return true
    } else {
        return false
    }
}


// Solution 6
xor = (a, b) => !!(a ^ b);


// Solution 7
xor = (a, b) => { return a == b ? false : true }


// Solution 8
function xor(a, b) {
    return (a ^ b) === 1
}


// Solution 9
const xor = (aX, bX) => aX === true && bX === true ? false : aX === true || bX === true;


// Solution 10
const xor = (a, b) => a && !b || b && !a;


// Solution 11
const xor = (a, b) => !a != !b;


// Solution 12
function xor(a, b) {
    return a != b && (a || b);
}