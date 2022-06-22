
// Enumerable Magic #3 - Does My List Include This ?

// Create a method that accepts a list and an item, 
// and returns true if the item belongs to the list, 
// otherwise false.

function include(arr, item) {
    return arr.indexOf(item) > -1
}

console.log(include([1, 2, 3, 4], 3))
// true
console.log(include([1, 2, 4, 5], 3))
// false


// Solution 1



// Solution 2



// Solution 3
function include(arr, item) {
    return arr.includes(item);
}


// Solution 4
function include(arr, item) {
    return arr.indexOf(item) !== -1;
}


// Solution 5
const include = (arr, item) => arr.includes(item);


// Solution 6
var include = (a, i) => a.indexOf(i) > -1;


// Solution 7
function include(arr, item) {
    return Boolean(~arr.indexOf(item));
}


// Solution 8
function include(arr, item) {
    return arr.indexOf(item) > -1
}


// Solution 9
function include(arr, item) {
    return arr.some(n => n === item);
}


// Solution 10
var include = Array.includes


// Solution 11
function include(arr, item) {
    return (arr.indexOf(item) != -1)
}


// Solution 12
function include(arr, item) {
    return item == arr.find(el => el === item);
}