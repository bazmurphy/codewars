// Maximum Product 

// Task

// Given an array of integers, Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes

// Array / list size is at least 2.

// Array / list numbers could be a mixture of positives, negatives also zeroes.

// Input >> Output Examples

// adjacentElementsProduct([1, 2, 3]); ==> return 6

// Explanation:

// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

// Explanation:

// Max product obtained from multiplying 5 * 10 = 50.

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) ==>  return -14

// Explanation:

// The maximum product obtained from multiplying - 2 * 7 = -14, and they're adjacent numbers in the array.

function adjacentElementsProduct(array) {

    let maxProduct = -Infinity;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] * array[i + 1] > maxProduct) {
            maxProduct = array[i] * array[i + 1];
        }
    }

    return maxProduct;

}

console.log(adjacentElementsProduct([5, 8]));
// 40
console.log(adjacentElementsProduct([1, 2, 3]));
// 6
console.log(adjacentElementsProduct([1, 5, 10, 9]));
// 90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
// 48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
// 6

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// 21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
// 50
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]));
// 30
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
// -14
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
// 6

console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]));
// 0
console.log(adjacentElementsProduct([1, 2, 3, 0]));
// 6


// Solution 1
function adjacentElementsProduct(array) {
    let newArr = []
    for (i = 0; i < array.length - 1; i++) {
        newArr.push(array[i] * array[i + 1])
    }
    return Math.max(...newArr)
}


// Solution 2
function adjacentElementsProduct(a) {
    return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1))
}


// Solution 3
function adjacentElementsProduct(array) {
    let answerArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        answerArray.push(array[i] * array[i + 1]);
    }

    return Math.max(...answerArray);
}


// Solution 4
function adjacentElementsProduct(array) {
    let max = array[0] * array[1]
    for (let i = 1; i < array.length - 1; i++) {
        max = Math.max(max, array[i] * array[i + 1])
    }
    return max
}


// Solution 5
const adjacentElementsProduct = (array) => array.slice(1).reduce(
    (max, cur, i) => Math.max(array[i] * cur, max), -Infinity
);


// Solution 6
function adjacentElementsProduct(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] * array[i + 1] > max) max = array[i] * array[i + 1];
    }
    return max;
}


// Solution 7
function adjacentElementsProduct(array) {

    let maxProduct = array[0] * array[1];

    for (let i = 1; i < array.length; i++) {

        product = array[i] * array[i + 1];

        if (product > maxProduct)
            maxProduct = product;

    }

    return maxProduct;

}


// Solution 8
function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i) => n * array[i - 1]).slice(1));
}


// Solution 9
const adjacentElementsProduct = (a) => Math.max(...a.map((el, i, arr) => i > 0 ? el * arr[i - 1] : -Infinity))


// Solution 10
const adjacentElementsProduct = array => Math.max(...array.slice(1).map((val, idx) => val * array[idx]));


// Solution 11
const adjacentElementsProduct = array => {
    const set = new Set();
    array.forEach((a, i, arr) => i < arr.length - 1 ? set.add(a * (arr[i + 1])) : null);
    return Math.max(...set)
}


// Solution 12
function adjacentElementsProduct(arr) {
    for (var r = -Infinity, i = 1; i < arr.length; i++) r = Math.max(arr[i] * arr[i - 1], r); return r
}