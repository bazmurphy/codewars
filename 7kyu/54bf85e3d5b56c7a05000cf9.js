// Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

var number = function(array){
    return array.map((element, index) => `${index+1}: ${element}`)
}

console.log(number([]))
// []
console.log(number(["a", "b", "c"]))
// ["1: a", "2: b", "3: c"]


// Solution 1
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
}


// Solution 2
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)


// Solution 3
const number = array => array.map((n, i) => `${i + 1}: ${n}`);


// Solution 4
function number(arr) {
    return arr.map((e, i) => `${++i}: ${e}`);
}


// Solution 5
var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
}


// Solution 6
function number(array) {
    return array.map(function(line, i) {
      return String(i + 1) + ": " + line
    })
}


// Solution 7
const number = array =>
  array.map((val, idx) => `${idx + 1}: ${val}`);