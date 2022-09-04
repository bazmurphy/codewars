// Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortByLength (array) {
    return array.sort( (a,b) => a.length - b.length)
};


console.log(sortByLength(["Beg", "Life", "I", "To"]));
// ["I", "To", "Beg", "Life"]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
// ["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Longer", "Longest", "Short"]));
// ["Short", "Longer", "Longest"]


// Solution 1
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};


// Solution 2
let sortByLength = arr => arr.sort((a,b) => a.length - b.length);


// Solution 3
function sortByLength (array) {
    return array.sort((x, y) => x.length - y.length);
  };


// Solution 4
function sortByLength (array) {
    let sort = array.sort(function(a, b) {
      return a.length - b.length;
    });
    
    return array;
    
};


// Solution 5
const sortByLength=array=>array.sort((a,b)=>a.length-b.length)


// Solution 6
function sortByLength(array) {
    return array.slice().sort((a, b) => a.length - b.length);
}