// Be Concise IV - Index of an element in an array

// Task

// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

const find = (array, element) => array.includes(element) ? array.indexOf(element) : "Not found";


var array = [2,3,5,7,11];
console.log(find(array, 5));
// 2
console.log(find(array, 11));
// 4
console.log(find(array, 3));
// 1
console.log(find(array, 2));
// 0
console.log(find(array, 7));
// 3
console.log(find(array, 1));
// "Not found"
console.log(find(array, 8));
// "Not found"
array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array, "Hello World"));
// 1
console.log(find(array, "lorem ipsum"));
// "Not found"
console.log(find(array, "Lorem Ipsum"));
// 3
console.log(find(array, false));
// 2
console.log(find(array, true));
// 0
console.log(find(array, Math.PI));
// 5
console.log(find(array, 3.14));
// "Not found"
console.log(find(array, 6));
// 4



// Solution 1
const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x


// Solution 2
var find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";


// Solution 3
const find = (array, element) => array.includes(element) ? array.indexOf(element) : `Not found`;


// Solution 4
const find = (arr, elem) => arr.indexOf(elem) > -1 ? arr.indexOf(elem) : "Not found"


// Solution 5
const find = (a, e) => {
    const i = a.indexOf(e);
    return i < 0 ? 'Not found' : i;
}