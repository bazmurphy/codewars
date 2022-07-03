// Take the Derivative

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent.Then, it has to print out an expression(like 28x ^ 7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)

// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8)-- > this should output "56x^7"
// derive(5, 9)-- > this should output "45x^8"

// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0


function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}

console.log(derive(7, 8)); 
// "56x^7"
console.log(derive(5, 9));
// "45x^8"


// Solution 1
function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}


// Solution 2
function derive(a, b) {
    return (a * b) + "x^" + (b - 1);
}


// Solution 3
derive = (c, e) => `${c * e}x^${e - 1}`;


// Solution 4
const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`


// Solution 5
function derive(coefficient, exponent) {
    const product = coefficient * exponent;
    const newExponent = exponent - 1;

    return `${product}x^${newExponent}`;
}


// Solution 6
function derive(coefficient, exponent) {
    return (coefficient * exponent).toString() + "x^" + (exponent - 1).toString()

}


// Solution 7
var derive = (c, e) => `${c * e}x^${e < 2 ? 2 : e - 1}`;


// Solution 8
const derive = (coef, exp) => coef * exp + `x^${exp - 1}`;


// Solution 9
function derive(x, y) {
    let res = x * y;
    return (`${res + 'x'}^${y - 1}`)
}


// Solution 10
derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`



// Solution 11
function derive(coefficient, exponent) {
    return `${coefficient * exponent--}x^${exponent}`
}


// Solution 12
const derive = (c, e) => c * e + 'x^' + --e;