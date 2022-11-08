// Simple Fun #176: Reverse Letter

// Task

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output

// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {

    let allowed = 'abcdefghijklmnopqrstuvwxyz'

    return str.split('')
            .filter(element => allowed.includes(element))
            .reverse()
            .join('')

}

console.log(reverseLetter("krishan"));
// "nahsirk"
console.log(reverseLetter("ultr53o?n"));
// "nortlu"
console.log(reverseLetter("ab23c"));
// "cba"
console.log(reverseLetter("krish21an"));
// "nahsirk"


// Solution 1
reverseLetter = (s) => s.replace(/[^a-z]/gi, '').split('').reverse().join('');


// Solution 2
const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');


// Solution 3
function reverseLetter(str) {
    return str.split('')
        .reverse()
        .filter(val => /[a-zA-Z]/.test(val))
        .join('');
}


// Solution 4
function reverseLetter(str) {
    return str.match(/[a-z]/ig).reverse().join('');
}


// Solution 5
function reverseLetter(str) {
    return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}


// Solution 6
function reverseLetter(str) {
    return str.split('').reverse().filter(function (el) {
        if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
            return el;
        }
    }).join('');
}


// Solution 7
const reverseLetter = str => str.match(/[a-zA-Z]/g).reverse().join('');


// Solution 8
const reverseLetter = (str, s = str.match(/[a-z]/g).reverse()) => s.join('');


// Solution 9
function reverseLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word = '';
    for (let i = str.length - 1; i >= 0; i--) {
        for (let k = 0; k <= alphabet.length - 1; k++) {
            if (str[i] == alphabet[k]) {
                word = `${word + str[i]}`;
            }
        }
    }
    return word;
}


// Solution 10
function reverseLetter(str) {
    let arrNew = [];
    for (let i = 0; i < str.length; i++) {
        if (97 <= str[i].codePointAt(0) && str[i].codePointAt(0) <= 122) arrNew.push(str[i]);
    }
    return arrNew.reverse().join('');
}


// Solution 11
const reverseLetter = str =>
    str.match(/[a-z]/gi).reverse().join(``);


// Solution 12
function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('')
}