// FIXME: Replace all dots

// The code provided is supposed replace all the dots.in the specified String str with dashes -

// But it's not working properly.
// Task

// Fix the bug so we can all go home early.

// Notes

// String str will never be null.

var replaceDots = function (str) {
    
    // return str.replace(/\./g, '-');

    return str.split(".").join("-")
}

console.log(replaceDots("one.two.three")); 
// "one-two-three"


// Solution 1
var replaceDots = function (str) {
    return str.replace(/\./g, '-');
}


// Solution 2
var replaceDots = function (str) {
    // added the \ to escape special characters
    // added the g so that replace is run for all occurences in the string
    return str.replace(/\./g, '-');
}


// Solution 3
var replaceDots = function (str) {
    return str.replace(/[.]/g, '-');
}


// Solution 4
var replaceDots = s => s.split('.').join('-')


// Solution 5
const replaceDots = (str) => str.replace(/\./g, '-');


// Solution 6
var replaceDots = function (str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        answer += (str[i] !== ".") ? str[i] : "-";
    }
    return answer;
}


// Solution 7
var replaceDots = function (s) {
    return s.replace(/\./g, '-');
};


// Solution 8
const replaceDots = $ => $.replace(/\./g, '-');


// Solution 9
var replaceDots = function (str) {
    return str.replace(/\./g, '-');
}


// Solution 10
let replaceDots = str => str.replace(/\./g, '-');


// Solution 11
const replaceDots = str =>
    str.replace(/\./g, `-`);


// Solution 12
replaceDots = s => s.replace(/\./g, '-');