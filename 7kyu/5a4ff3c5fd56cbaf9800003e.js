// Working with arrays I (and why your code fails in some katas)

// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// Some good reading: MDN Docs about arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// function withoutLast(arr) {
//     // Fix it
//     arr.pop(); // removes the last element
//     return arr;
// }

function withoutLast(arr) {
    let newArr = [...arr]
    newArr.pop
    return newArr;
}


// Solution 1
function withoutMax(arr) {
    return arr.slice(0,-1);
}


// Solution 2
const withoutLast = arr => arr.slice(0, -1)


// Solution 3
function withoutLast(arr) {
    return arr.slice(0,-1);
}


// Solution 4
function withoutLast(arr) {
    var arr2 = arr.slice(); // this way I use a shallow copy of an array
    arr2.pop();
    return arr2;
}


// Solution 5
const withoutLast = (arr, len = arr.length-1) => arr.slice(0, len)


// Solution 7
function withoutLast(arr) {
    arr = arr.filter((e,i)=> i !== arr.length-1)
    return arr;
}