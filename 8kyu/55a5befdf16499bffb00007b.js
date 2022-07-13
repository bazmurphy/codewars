// Fundamentals: Return

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide(both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a(operation) b


function add(a, b) {
    return a + b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

function mod(a, b) {
    return a % b
}

function exponent(a, b) {
    return a ** b
}

function subt(a, b) {
    return a - b
}

console.log(add(1, 2));
// 3
console.log(multiply(1, 2));
// 2
console.log(divide(2, 1));
// 2
console.log(mod(1, 2));
// 1
console.log(exponent(1, 2));
// 1
console.log(subt(1, 2));
// -1


// Solution 1
const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;


// Solution 2
function add(a, b) {
    return a + b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

function mod(a, b) {
    return a % b
}

function exponent(a, b) {
    return a ** b
}

function subt(a, b) {
    return a - b
}


// Solution 3
const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;
const subt = (a, b) => a - b;


// Solution 4
function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return Math.pow(a, b);
}

function subt(a, b) {
    return a - b;
}


// Solution 5
{
    var { add, subtract, multiply, divide, modulo } = require('ramda')
    var [mod, subt, exponent] = [modulo, subtract, Math.pow]
}


// Solution 6
const [{ pow: exponent }, { add, subtract: subt, multiply, divide, modulo: mod }] = [Math, require('ramda')] 


// Solution 7
add = (a, b) => a + b
subt = (a, b) => a - b
multiply = (a, b) => a * b
divide = (a, b) => a / b
exponent = (a, b) => a ** b
mod = (a, b) => a % b


// Solution 8
const add = (x, y) => Number(x) + Number(y)
const subt = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y
const mod = (x, y) => x % y
const exponent = (x, y) => x ** y


// Solution 10
const { add, divide, multiply, modulo: mod, subtract: subt } = require('ramda');
const { pow: exponent } = Math;


// Solution 11
const add = (_, __) => _ + __

const divide = (_, __) => _ / __

const multiply = (_, __) => _ * __

const mod = (_, __) => _ % __

const exponent = (_, __) => _ ** __

const subt = (_, __) => _ - __


// Solution 12
function add(a, b) {
    let c = a + b
    return c
}

function divide(a, b) {
    let c = a / b
    return c
}

function multiply(a, b) {
    let c = a * b
    return c
}

function mod(a, b) {
    let c = a % b
    return c
}

function exponent(a, b) {
    let c = a ** b
    return c
}

function subt(a, b) {
    let c = a - b
    return c
}