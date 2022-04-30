// All Star Code Challenge #18

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o") ==> 1
// ("Hello", "l") ==> 2
// ("", "z") ==> 0

// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        }
    }
    return count;
}

console.log(strCount('Hello', 'o'));
// 1
console.log(strCount('Hello', 'l'));
// 2
console.log(strCount('', 'z'));
// 0


// Solution 1
function strCount(str, letter) {
    return str.split(letter).length - 1
}


// Solution 2
function strCount(str, letter) {
    return str.split('').filter(c => c == letter).length;
}


// Solution 3
function strCount(str, letter) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }

    return count;

}


// Solution 4
const strCount = (str, letter) => str.split(letter).length - 1;


// Solution 5
function strCount(str, letter) {
    return str.length - str.replace(new RegExp(letter, "gi"), '').length;
}


// Solution 6
const strCount = (str, letter) =>
    --str.split(letter).length;


// Solution 7
function strCount(str, letter) {
    return str.split('').filter(a => a == letter).length;
}


// Solution 8
function strCount(str, letter) {
    return (str.match(new RegExp(letter, 'g')) || []).length;
}


// Solution 9
var strCount = function f(str, letter) {
    var re = new RegExp(letter, "g");
    return str.length - str.replace(re, "").length;
}


// Solution 10
function strCount(str, letter) {
    let x = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] == letter ? x += 1 : 0;
    }
    return x;
}


// Solution 11
const strCount = (str, letter) => str.split('').filter(i => i === letter).length;


// Solution 12
const strCount = (str, letter) => str.split("").filter(i => i === letter).length;