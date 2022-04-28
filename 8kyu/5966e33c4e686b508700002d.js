// Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2-- > Output)

// "4", "5" -- > "9"
// "34", "5" -- > "39"
// "", "" -- > "0"
// "2", "" -- > "2"
// "-5", "3" -- > "-2"

// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32 - bit integer limit(2 ^ 31 - 1)

function sumStr(a, b) {
    return (Number(a) + Number(b)).toString()
}

console.log(sumStr("4", "5"));
// "9"
console.log(sumStr("34", "5"));
// "39"


// Solution 1
function sumStr(a, b) {
    return String(Number(a) + Number(b));
}


// Solution 2
function sumStr(a, b) {
    return (+a + +b) + ''
}


// Solution 3
sumStr = (a, b) => String(+a + +b);


// Solution 4
function sumStr(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
}


// Solution 5
function sumStr(a, b) {
    return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}


// Solution 6
const sumStr = (i, j) => (+i) + (+j) + '';


// Solution 7
const sumStr = (a, b) => 1 * a + 1 * b + "";


// Solution 8
const sumStr = (a, b) => String(+a + +b)


// Solution 9
function sumStr(a, b) {
    return "" + (a - -b)
}


// Solution 10
function sumStr(a, b) { return +a + +b + '' }


// Solution 11
function sumStr(a, b) {
    if ((a === "") && (b === "")) {
        return "0"
    }
    if (b === "") {
        return a
    }
    if (a === "") {
        return b
    }
    return (parseInt(a) + parseInt(b)).toString()
}


// Solution 12
function sumStr(a, b) {
    res = Number(a) + Number(b);
    return String(res);
}