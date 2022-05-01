// Powers of 2

// Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {

    let arr = [];

    for (let i = 0; i <= n; i++) {
        // console.log(`2^${i}`)
        arr.push(Math.pow(2, i))
    }

    return arr;
}

console.log(powersOfTwo(0));
// [1]
console.log(powersOfTwo(1));
// [1, 2]
console.log(powersOfTwo(2));
// [1, 2, 4]
console.log(powersOfTwo(4));
// [1, 2, 4, 8, 16]


// Solution 1
function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}


// Solution 2
function powersOfTwo(n) {
    return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}


// Solution 3
function powersOfTwo(n) {
    var arr = [];

    for (var i = 0; i <= n; ++i) {
        arr.push(Math.pow(2, i));
    }

    return arr;
}


// Solution 4
function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
}


// Solution 5
powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));


// Solution 6
var powersOfTwo = n => Array.from({ length: n + 1 }, (val, i) => Math.pow(2, i));


// Solution 7
const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e ** i)


// Solution 8
const powersOfTwo = n =>
    [...Array(++n)].map((_, idx) => 2 ** idx);


// Solution 9
function powersOfTwo(n) {
    return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}


// Solution 10
let powersOfTwo = n => n ? [...powersOfTwo(n - 1), 2 ** n] : [1]


// Solution 11
function powersOfTwo(n) {
    return Array.from({ length: n + 1 }, (el, i) => 2 ** i);
}


// Solution 12
function powersOfTwo(n) {
    let res = [];
    do {
        res.unshift(Math.pow(2, n));
    } while (n--);
    return res;
}