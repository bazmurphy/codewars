// Hex to Decimal

// Complete the function which converts hex number(given as a string) to a decimal number.

function hexToDec(hexString) {
    return parseInt(hexString, 16)
}

function decToHex(decimalString) {
    return decimalString.toString(16)
}

console.log(hexToDec("1"));
// 1
console.log(hexToDec("a"));
// 10
console.log(hexToDec("10"));
// 16
console.log(hexToDec("FF"));
// 255
console.log(hexToDec("-C"));
// -12

console.log(decToHex(1))
// 1
console.log(decToHex(10))
// a
console.log(decToHex(16))
// 10
console.log(decToHex(255))
// ff
console.log(decToHex(-12))
// -c


// Solution 1
function hexToDec(hexString) {
    return parseInt(hexString, 16);
}


// Solution 2
const hexToDec = h => parseInt(h, 16);


// Solution 3
function hexToDec(hexString) {
    let hexVal = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    }, clone = hexString.split('').map(x => x.toLowerCase()), isNeg = false;
    if (clone[0] === '-') {
        isNeg = true;
        clone.splice(0, 1);
    }
    let output = Number(clone
        .reverse()
        .map((e, i) => hexVal[e] ? hexVal[e] * Math.pow(16, i) : e * Math.pow(16, i))
        .reduce((a, b) => a + b), 10);
    return isNeg ? output * -1 : output;
}


// Solution 4
const hexToDec = hexString => parseInt(hexString, 16);


// Solution 5
function hexToDec(hexString){
  var htd = { '0': 0, '1': 1,  '2': 2,  '3': 3,  '4': 4,  '5': 5,  '6': 6,
  '7': 7,  '8': 8,  '9': 9,  a: 10,  b: 11,  c: 12,  d: 13,  e: 14,  f: 15 }
  return hexString.toLowerCase().split('').reverse().reduce((c,v,i)=> (v==='-')?(-c):(c+htd[v]*Math.pow(16,i)),0);
}


// Solution 6
function hexToDec(hexString) {
    // Check for a negative sign and remove it.
    var isPositive = true;
    if (hexString.startsWith("-")) {
        isPositive = false;
        hexString = hexString.substring(1, hexString.length);
    }
    // Take the rest of the array and reduce it to a single number as follows:
    // 1. Split the string into an array where each character is a separate element in the array.
    // 2. Using the reduce method, calculate the value for each position of the array and add it to an accumulating result. 
    //    The initial value of the accumulator is 0.
    //    Each position is calculated using a map of the character to the numeric value (hexMap), and a power of 16 for the position in the original number.
    //    For example:
    //      2AD = 2 * 16^2 + 10 * 16^1 + 13 * 16^0 = 685 which is correct.  
    var hexMap = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
    var value = hexString.split("").reduce(function (result, currentValue, currentIndex) {
        return result + Math.pow(16, hexString.length - currentIndex - 1) * hexMap[currentValue];
    }, 0);
    // Make the number negative if needed.
    if (!isPositive) {
        value *= -1;
    }
    // Return the result.
    return value;
}


// Solution 7
function hexToDec(hexString) {
    var ten = parseInt(hexString, 16);
    return ten;
}


// Solution 8
function hexToDec(hexString) {
    var shesn = parseInt(hexString, 16)
    return shesn
}


// Solution 9
function hexToDec(hexString) {
    let conv = {
        '0': 0, '1': 1, '2': 2, '3': 3,
        '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9, 'a': 10, 'b': 11,
        'c': 12, 'd': 13, 'e': 14, 'f': 15,
        '-': '-'
    };
    let arr = hexString.split('').map(a => conv[a.toLowerCase()]);
    let neg = false;
    if (arr[0] == '-') {
        arr = arr.slice(1);
        neg = true;
    }
    let pot = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] *= pot;
        pot *= 16;
    }
    return (neg ? -1 : 1) * arr.reduce((a, b) => a + b);
}


// Solution 10
function hexToDec(hexString) {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'].map(String);
    var neg = hexString[0] == '-';
    var val = hexString.toLowerCase()
        .split('')
        .slice(neg ? 1 : 0)
        .reduce((r, l) => 16 * r + arr.indexOf(l), 0);
    return neg ? - val : val;
}


// Solution 11
function hexToDec(hexString) {
    return hexString = parseInt(hexString, 16);
}


// Solution 12
let hexToDec = h => parseInt(h, 16)

hexToDec = h => h[0] == '-' ? -1 * ('0x' + h.slice(1)) : +('0x' + h)

hexToDec = ([s, ...h]) => s == '-' ? -1 * (`0x` + h.join``) : +(`0x` + s + (h ? h.join`` : ``))