// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
// I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
    let sum = 0
    arr1.forEach(element => sum += element)
    arr2.forEach(element => sum += element)
    return sum
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
// -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); 
// 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
// 2100


// Solution 1
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }


// Solution 2
function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
  }


// Solution 3
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }


// Solution 4
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);


// Solution 5
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
}