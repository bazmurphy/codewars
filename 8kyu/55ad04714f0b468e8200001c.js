// get character from ASCII Value

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)

// should return:

// 'A'

// For ASCII table, you can refer to http://www.asciitable.com/


function getChar(c) {
    return String.fromCharCode(c)
}

console.log(getChar(55));
// '7'
console.log(getChar(56));
// '8'
console.log(getChar(57));
// '9'
console.log(getChar(58));
// ':'
console.log(getChar(59));
// ';'
console.log(getChar(60));
// '<'
console.log(getChar(61));
// '='
console.log(getChar(62));
// '>'
console.log(getChar(63));
// '?'
console.log(getChar(64));
// '@'
console.log(getChar(65));
// 'A'


// Solution 1
const getChar = String.fromCharCode;


// Solution 2
function getChar(c) {
    return String.fromCharCode(c)
}


// Solution 3
var getChar = c => String.fromCharCode(c);


// Solution 5
getChar = c => String.fromCharCode(c);


// Solution 6
function getChar(c) {
    return String.fromCodePoint(c);
}


// Solution 7
const getChar = c => String.fromCharCode(c);


// Solution 8
var getChar = (c) => { return String.fromCharCode(c); };


// Solution 9
function getChar(c) {
    var char = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

    return char[c - 32];
}


// Solution 10
var getChar = String.fromCharCode


// Solution 11
getChar = String.fromCharCode;


// Solution 12
let getChar = String.fromCharCode;