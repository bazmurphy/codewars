// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {

    // console.log(n)
    return n.toString(2).split('').filter(element => element === '1').length

};

console.log(countBits(0));
// 0
console.log(countBits(4));
// 1
console.log(countBits(7));
// 3
console.log(countBits(9));
// 2
console.log(countBits(10));
// 2


// Solution 1
countBits = n => n.toString(2).split('0').join('').length;


// Solution 2
var countBits = function (n) {
    return n.toString(2).replace(/0/g, '').length;
};


// Solution 3
function countBits(n) {
    for (c = 0; n; n >>= 1)c += n & 1
    return c;
}


// Solution 4
const countBits = n => n.toString(2)
    .split('')
    .filter(ele => ele == 1)
    .length


// Solution 5
var countBits = function (n) {
    var count = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            count++;
        }
        n = Math.floor(n / 2);
    }
    return count;
};


// Solution 6
var countBits = function (n) {
    a = n.toString(2).match(/1/g);
    return a == null ? 0 : a.length;
};


// Solution 7
var countBits = function (n) {
    return n.toString(2).split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
};


// Solution 8
var countBits = function (n) {
    var bits = 0;
    for (; n; n >>= 1) {
        if (n & 1) bits++;
    }

    return bits;
};


// Solution 9
var countBits = function (n) {
    return n !== 0 ? n.toString(2).match(/1/g).length : 0;
};


// Solution 10
var countBits = function (n) {
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
};


// Solution 11
var countBits = function (n) {
    // from http://graphics.stanford.edu/~seander/bithacks.html
    n = n - ((n >>> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
    return ((n + (n >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
};


// Solution 12
var countBits = function (n) {
    return (n.toString(2).match(/1/g) || []).length;
};