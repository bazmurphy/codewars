// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples

// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"


function remove(string) {

    let newArr = [];
   
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== '!') {
            newArr.push(string[i])
        }
    }
    
    newArr.push('!')

    return newArr.join('')
}

console.log(remove("Hi!"));
// "Hi!"
console.log(remove("Hi!!!"));
// "Hi!"
console.log(remove("!Hi"));
// "Hi!"
console.log(remove("!Hi!"));
// "Hi!"
console.log(remove("Hi! Hi!"));
// "Hi Hi!"
console.log(remove("Hi"));
// "Hi!"


// Solution 1
const remove = s => s.replace(/!+/g, "") + "!";


// Solution 2
function remove(s) {
    return s.replace(/!+/g, '') + '!';
}


// Solution 3
function remove(s) {
    return s.replace(/!/g, '') + "!"
}


// Solution 4
const remove = s => `${s.replace(/!/g, '')}!`


// Solution 5
const remove = s => s.split("!").join("") + "!";


// Solution 6
var remove = s0s => s0s.match(/\w+/g) == null ? '' : s0s.match(/\w+/g).join(' ') + '!'


// Solution 7
const remove = (s) => s.replace(/!/g, '') + '!';


// Solution 8
function remove(s) {
    return s.replace(/!/g, '').concat('!');
}


// Solution 9
function remove(s) {
    s = s.replace(/!+/g, "");
    return s + "!";

}


// Solution 10
function remove(string) {
    let newArr = string.split('').filter(c => c !== '!').join('')
    return `${newArr}!`
}


// Solution 11
const remove = s =>
    `${s.replace(/!/g, ``)}!`;


// Solution 12
function remove(s) {
    s = s.split('!');
    return s.concat('!').join('');

}