// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {

    // split the string into an array separated by " "
    // order the individual strings by length
    // return the length of the first str in the array
    // because it will be the shortest
    
    return s.split(" ").sort((a,b) => a.length - b.length)[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// 3
console.log(findShort("Let's travel abroad shall we"));
// 2


// Solution 1
function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}


// Solution 2
function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}


// Solution 3
function findShort(s) {
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}


// Solution 4
const findShort = (s) => s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop()
    .length;


// Solution 5
function findShort(s) {
    return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}


// Solution 6
function findShort(s) {
    var arr = s.split(' ');
    var min = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    return min
}


// Solution 7
function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}


// Solution 8
function findShort(s) {
    return s
        .split(' ')
        .map(a => a.length)
        .reduce((a, b) => Math.min(a, b))
}


// Solution 9
function findShort(s) {
    return Math.min(...s.split(/\s/).map((w) => w.length));
}


// Solution 10
function findShort(string) {
    var array = string.split(' ');
    var shortest = null;

    for (var i = 0, l = array.length; i < l; ++i) {
        if (shortest == null || array[i].length < shortest)
            shortest = array[i].length;
    }

    return shortest;
}

// Solution 11
function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}