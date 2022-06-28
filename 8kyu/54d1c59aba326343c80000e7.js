// Incorrect division method

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

const solve = (x, y) => x / y

console.log(solve(2, 1));
// 2
console.log(solve(2, 4));
// 0.5
console.log(solve(42, 0));
// Infinity
console.log(solve(0, 8));
// 0
console.log(solve(7, 2));
// 3.5
console.log(solve(4.2, 1));
// 4.2
console.log(solve(9999, 11));
// 909


// Solution 1
const solve = (x, y) => x / y


// Solution 3
const solve = (x, y) => {

    let s = (x / y);
    if (y == 0) {
        return Infinity;
    }
    return s;
}


// Solution 4
function solve(x, y) {
    return (y == 0) ? Infinity : (x / y);
}


// Solution 5
const solve = require('ramda').divide


// Solution 6
const solve = (x, y) => {
    return x / y == NaN ? Infinity : x / y;
}


// Solution 7
const solve = (x, y) => {

    if (typeof x !== 'number') {
        throw new Error('Parameter 1 is not Number.');
    }

    if (typeof y !== 'number') {
        throw new Error('Parameter 2 is not Number.');
    }

    if (y === 0) {
        return Infinity;
    }

    return x / y;

}


// Solution 8
function solve(x, y) {
    let f = x / y
    return f

}


// Solution 9
const solve = (x, y) => {
    let result = x / y;
    return result;
}


// Solution 10
function solve(x, y) {
    if (y == 0) {
        return Infinity
    } else {
        return x / y
    }
}