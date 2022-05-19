// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit.
// If limit is a multiple of integer, it should be included as well.
// There will only ever be positive integers passed into the function, not consisting of 0. 
// The limit will always be higher than the base.

// For example, if the parameters passed are(2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i += integer) {
        arr.push(i)
    }
    return arr;
}

console.log(findMultiples(5, 25));
// [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2));
// [1, 2]
console.log(findMultiples(5, 7));
// [5]
console.log(findMultiples(4, 27));
// [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54));
// [11, 22, 33, 44]


// Solution 1
function findMultiples(int, limit) {
    let result = []

    for (let i = int; i <= limit; i += int)
        result.push(i)

    return result
}


// Solution 2
function findMultiples(int, limit) {
    return Array(Math.floor(limit / int)).fill(1).map((x, i) => int * (i + 1));
}


// Solution 3
function findMultiples(int, limit) {
    let multiples = [];
    for (let i = int; i <= limit; i += int) { multiples.push(i); }
    return multiples;
}


// Solution 4
function findMultiples(int, limit) {
    return Array.from({ length: parseInt(limit / int) }, (_, i) => (i + 1) * int)
}


// Solution 5
function findMultiples(int, limit) {
    var arr = [];
    for (var i = 1; limit >= i * int; i++) {
        arr.push(i * int)
    }
    return arr
}


// Solution 6
const findMultiples = (integer, limit) =>
    [...Array(limit / integer ^ 0)].map((_, idx) => ++idx * integer);


// Solution 7
const findMultiples = (n, l) => Array.from({ length: ~~(l / n) }, (a, i) => i * n + n);


// Solution 8
findMultiples = (x, y) => Array.from({ length: ~~(y / x) }, (a, i) => i * x + x);


// Solution 9
var findMultiples = (integer, limit) => [...Array(Math.floor(limit / integer) + 1).keys()].map(e => e * integer).slice(1)


// Solution 10
const findMultiples = (int, limit) => Array.from({ length: limit / int }, (_, i) => (i + 1) * int);


// Solution 11
function findMultiples(int, limit) {
    var array = [];
    for (i = 1; int * i <= limit; i++) {
        array[i - 1] = int * i;
    }
    return array;
}


// Solution 12
function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i++) {
        if (!(i % integer)) {
            arr.push(i)
        }
    }
    return arr;
}