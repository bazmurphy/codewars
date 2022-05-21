// Convert to Binary

// Task Overview

// Given a non - negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */


function toBinary(n) {
    return Number(n.toString(2));
}

console.log(toBinary(1));
// 1
console.log(toBinary(2));
// 10
console.log(toBinary(3));
// 11
console.log(toBinary(5));
// 101


// Solution 1
let toBinary = n => +n.toString(2)


// Solution 2
toBinary = (n) => parseInt(n.toString(2));


// Solution 3
function toBinary(n) {
    return +n.toString(2);
}


// Solution 4
function largestPowerOf(n, number) {
    var p = number;
    while (p < n) { p *= number; }
    return p
}

function toBinary(n) {
    var binaryString = '';
    var power = largestPowerOf(n, 2)
    while (power >= 1) {
        if (n - power >= 0) {
            n -= power;
            binaryString += '1';
        } else {
            binaryString += '0';
        }
        power /= 2;
    }
    return parseInt(binaryString)
}


// Solution 5
const toBinary = n => Number(n.toString(2));


// Solution 6
const toBinary = n => +n.toString(2)


// Solution 7
function toBinary(n) {
    var s = n.toString(2);
    var c = Number(s);
    return c;
}


// Solution 8
function toBinary(n) {
    return parseInt(n.toString(2));
}


// Solution 9
function toBinary(n) {
    var binary = ""
    var i = 2

    if (n == 0) {
        binary = 0
    }

    while (n > 0) {
        if (n % i == 0) {
            binary = "0" + binary
        }
        else {
            binary = "1" + binary
            n = n - (i / 2)
        }
        i = i * 2
    }
    return parseInt(binary);
}


// Solution 10
toBinary = (n) => +n.toString(2);


// Solution 11
function toBinary(n) {
    var num = n.toString(2);
    return Number(num);
}


// Solution 12
function toBinary(n) {
    return parseInt(Number(n).toString(2));
}