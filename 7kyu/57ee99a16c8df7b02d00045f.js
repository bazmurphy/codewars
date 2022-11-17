// Flatten and sort an array

// Challenge:

// Given a two-dimensional array of integers, 
// return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. 

// For more information, please consult:
// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well


"use strict";

function flattenAndSort(array) {
    
    // return [].concat.apply([], array).sort((a,b) => a - b);

    return [].concat(...array).sort((a, b) => a - b);
    
}

console.log(flattenAndSort([]));
// []
console.log(flattenAndSort([[], []]));
// []
console.log(flattenAndSort([[], [1]]));
// [1]
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
// [1, 2, 3, 4, 5, 6, 100]


// Solution 1
function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b);
}


// Solution 2
function flattenAndSort(array) {
    return array
        .reduce((result, current) => [...result, ...current], [])
        .sort((a, b) => a - b);
}


// Solution 3
function flattenAndSort(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
        }
    }

    return newArray.sort((a, b) => a - b);
}


// Solution 4
const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b)


// Solution 5
const flattenAndSort = $ => $.toString().split(',').filter(e => e).map(Number).sort((a, b) => a - b)


// Solution 6
function flattenAndSort(array) {
    return flatten(array).sort((a, b) => a - b);
}

function flatten(array) {
    return array.reduce(function (acc, el) {
        return acc.concat(Array.isArray(el) ? flatten(el) : el);
    }, []);
}


// Solution 7
const flattenAndSort = array => array
    .reduce((a, c) => [...a, ...c], [])
    .sort((a, b) => a - b);


// Solution 8
function flattenAndSort(a) {
    return JSON.parse(JSON.stringify([].concat(...a))).sort((a, b) => a - b);
}


// Solution 9
const flattenAndSort = (array) => {
    return array.reduce((e, i) => e.concat(i), []).sort((a, b) => a - b)
}


// Solution 10
const flattenAndSort = a => a.reduce((a, b) => a.concat(b), []).sort((a, b) => a - b)


// Solution 11
const flattenAndSort = (arr) => {
    let temp = [];
    arr.forEach((a) => {
        for (let i = 0; i < a.length; i++) {
            temp.push(a[i]);
        }
    });
    temp.sort((a, b) => {
        return a - b;
    });
    return temp;
};


// Solution 12
function flattenAndSort(array) {
    let flatArray = [].concat(...array);
    array = flatArray.sort((a, b) => a - b);
    return array;
}