// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    return a.filter(element => b.indexOf(element) < 0)
}


console.log(arrayDiff([1, 2], [1]));
// [2]
console.log(arrayDiff([1, 2, 2], [1]));
// [2, 2]
console.log(arrayDiff([1, 2, 2], [2]));
// [1]
console.log(arrayDiff([1, 2, 2], []));
// [1, 2, 2]
console.log(arrayDiff([], [1, 2]));
// []
console.log(arrayDiff([1, 2, 3], [1, 2]));
// [3]


// Solution 1
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}


// Solution 2
function array_diff(a, b) {
    return a.filter(function (x) { return b.indexOf(x) == -1; });
}


// Solution 3
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}


// Solution 4
function array_diff(a, b) {
    return a.filter(function (v) { return b.indexOf(v) === -1 });
}


// Solution 5
function array_diff(a, b) {

    var arr = new Array();

    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            arr.push(a[i]);
        }
    }

    return arr;
}


// Solution 6
array_diff = require("lodash").difference;


// Solution 7
var array_diff = (a, b) => a.filter(item => b.indexOf(item) < 0)


// Solution 8
function arrayDiff(a, b) {
    if (b.length == 0 || a.length == 0)
        return a;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                a.splice(i, 1);
                i--;
            }
        }
    }
    return a;
}


// Solution 9
function array_diff(a, b) {
    return a.filter(x => b.indexOf(x) == -1);
}


// Solution 10
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}


// Solution 11
function array_diff(a, b) {
    return a.filter(item => !b.includes(item));
}


// Solution 12
const arrayDiff = (a, b) => a.filter(e => !b.includes(e))