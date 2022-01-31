// validate code with simple regex

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode (code) {
    let regex = /^(1|2|3)+/
    return regex.test(code)
}

console.log(validateCode(123));
// true
console.log(validateCode(248));
// true
console.log(validateCode(8));
// false
console.log(validateCode(321));
// true
console.log(validateCode(9453));
// false


// Solution 1
function validateCode (code) { return /^[123]/.test(code) }

// Solution 2
function validateCode (code) {
    return /^[1-3]/.test(code);
}

// Solution 3
const validateCode = code => /^[1-3]/g.test(code);

// Solution 4
const validateCode = (code) => /^[1-3]/.test(code);

// Solution 5
function validateCode(code) {
    return +(code + '')[0] < 4
}