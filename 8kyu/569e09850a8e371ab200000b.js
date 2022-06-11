// Pre - FizzBuzz Workout #1

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one.
// n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n(inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {

    // let arr = [];
    // for (let i = 1; i <= n; i++) {
    //     arr.push(i)
    // }
    // return arr;

    return Array.from({length: n}, (_, i) => i + 1)

}

console.log(preFizz(1));
// [1], `Array should be from 1 to 1`);
console.log(preFizz(2));
// [1, 2], `Array should be from 1 to 2`);
console.log(preFizz(3));
// [1, 2, 3], `Array should be from 1 to 3`);
console.log(preFizz(4));
// [1, 2, 3, 4], `Array should be from 1 to 4`);
console.log(preFizz(5));
// [1, 2, 3, 4, 5], `Array should be from 1 to 5`);


// Solution 1
function preFizz(n) {
    var output = [];
    for (var i = 1; i <= n; i++) {
        output.push(i);
    }
    return output;
}


// Solution 2
const preFizz = n => Array.from({ length: n }, (_, i) => i + 1)


// Solution 3
let preFizz = n => [...Array(n)].map((x, i) => i + 1);


// Solution 4
function preFizz(n) {
    var arr = [];
    for (var i = 1; i < n + 1; i++) {
        arr.push(i);
    }
    return arr;
}


// Solution 5
function preFizz(n) {
    var output = [];
    for (var i = 0; i < n; i++) {
        output.push(i + 1);
    }
    return output
}


// Solution 6
function preFizz(n) {
    return [...Array(n)].map((_, i) => i + 1)
}


// Solution 7
function preFizz(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}


// Solution 8
function preFizz(n) {
    return [...Array(n)].map((_, i) => ++i)
}


// Solution 9
function preFizz(n) {
    return Array.from({ length: n }, (v, i) => i + 1)
}


// Solution 10
function preFizz(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    return arr;
}


// Solution 11
function preFizz(n) {
    return Array.from(Array(n)).map((d, i) => i + 1);
}


// Solution 12
function preFizz(n) {
    var test = [];
    for (var i = 1; i <= n; i++) {
        test.push(i);
    }
    return test;
}