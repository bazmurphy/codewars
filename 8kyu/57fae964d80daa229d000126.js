// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Description:

// Remove an exclamation mark from the end of a string.
// For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// Note

// Please don't post issue about difficulty or duplicate.

function remove(string) {

    // if (string.substring(string.length - 1) == '!') {
    //     return string.substring(0, string.length - 1)
    // }
    // return string
 
    return string.substring(string.length - 1) == '!' ? string.substring(0, string.length - 1) : string;

}

console.log(remove("Hi!"));
// "Hi"
console.log(remove("Hi!!!"));
// "Hi!!"
console.log(remove("!Hi"));
// "!Hi"
console.log(remove("!Hi!"));
// "!Hi"
console.log(remove("Hi! Hi!"));
// "Hi! Hi"
console.log(remove("Hi"));
// "Hi"


// Solution 1
const remove = s => s.replace(/!$/, '');


// Solution 2
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}

// Solution 3
function remove(s) {
    return s.replace(/!$/, '')
}


// Solution 4
function remove(s) {
    return s = s.replace(/!$/g, '');
}


// Solution 5
function remove(s) {
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}


// Solution 6
const remove = s =>
    s.replace(/!$/, ``);


// Solution 7
function remove(s) {
    return s.charAt(s.length - 1) == "!" ? s.substr(0, s.length - 1) : s;
}


// Solution 8
function remove(s) {
    return s.charAt(s.length - 1) === '!' ? s.slice(0, -1) : s;
}


// Solution 9
var remove = s => s.replace(/!$/, '')


// Solution 10
function remove(s) {
    return s.replace(/\!$/, "")
}


// Solution 11
const remove = (string) => string.charAt(string.length - 1) === '!'
    ? string.slice(0, string.length - 1)
    : string


// Solution 12
function remove(s) {
    return (s.substr(-1) === '!') ? s.slice(0, -1) : s;
}