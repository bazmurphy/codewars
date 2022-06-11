// Count words

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on

// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.


function countWords(str) {
    return str
        .trim()
        .split(/\s/g)
        .filter(element => element.length > 0)
        .length
}


// should work in basic form of problem
console.log(countWords("Hello"));
// 1
console.log(countWords("Hello, World!"));
// 2
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
// 19
console.log(countWords(""));
// 0
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"));
// 5
console.log(countWords("Dear   Victoria, I love  to press   space button."));
// 8

// should work with spaces around string
console.log(countWords(" Arthur "));
// 1
console.log(countWords(" David"));
// 1
console.log(countWords("Nelson "));
// 1
console.log(countWords("  Hello Gomer  "));
// 2
console.log(countWords("  Hello     Bart  "));
// 2

// should work with non-whitespace (ex. breakspace) chars
console.log(countWords("﻿Hello﻿World "));
// 2
console.log(countWords("Hello﻿World"));
// 2


// Solution 1
function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
}

// Solution 2
const countWords = str => str.split(/\s+/).filter(x => x).length

// Solution 3
function countWords(str) {
    return str.split(/\s/).filter(el => {
       return el;
     }).length; 
}

// Solution 4
function countWords(str) {
    str = str.trim();
    if (str === '') return 0;
    return str.split(/\s+/).length;
}

// Solution 5
const countWords = str => str.split(/\S+/).length - 1

// Solution 6
const countWords = (str) => str.split(/\s+/).filter(Boolean).length