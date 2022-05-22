// Enumerable Magic #25 - Take the First N Elements

// Create a function that accepts a list / array and a number n, and returns a list / array of the first n elements from the list / array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
    return arr.slice(0, n)
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));
// [0, 1, 2]


// Solution 1
function take(arr, n) {
    return arr.slice(0, n);
}


// Solution 2
let take = (arr, n) => arr.slice(0, n);


// Solution 3
const take = (a, n) => a.slice(0, n);


// Solution 4
function take(arr, n) {

    return arr.length < n ? arr.slice() : arr.slice(0, n)
}


// Solution 5
const take = (arr, n) => arr.slice(0, n);


// Solution 6
function take(arr, n) {
    return arr.filter((elem, i) => i < n)
}


// Solution 7
const take = (arr, n) => arr.filter((a, index) => index < n);


// Solution 8
var take = (a, n) => a.filter((el, i) => i < n);


// Solution 9
function take(arr, n) {
    n = arr.slice(0, n)
    return n
}


// Solution 10
function take(arr, n) {
    let res = [];
    for (let i in arr) {
        if (i < n && i < arr.length) {
            res.push(arr[i]);
        }
    }
    return res;
}


// Solution 11
function take(arr, n) {
    let counter = 0;
    let res = [];
    for (let i of arr) {
        counter += 1;
        if (counter <= n && counter <= arr.length) {
            res.push(i);
        }
    }
    return res;
}


// Solution 12
function take(arr, n) {
    let res = [];
    let i = 0;
    while (i < n && i < arr.length) {
        res.push(arr[i]);
        i++;
    }
    return res;
}