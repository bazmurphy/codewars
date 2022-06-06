// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Description:

// Replace all vowel to exclamation mark in the sentence.aeiouAEIOU is vowel.
//     Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {

    let vowels = ['a','e','i','o','u','A','E','I','O','U']

    return s
        .split('')
        .map(element => vowels.indexOf(element) > -1 ? element = '!' : element)
        .join('')

}

console.log(replace("Hi!"));
// "H!!"
console.log(replace("!Hi! Hi!"));
// "!H!! H!!"
console.log(replace("aeiou"));
// "!!!!!"
console.log(replace("ABCDE"));
// "!BCD!"


// Solution 1
function replace(s) {
    return s.replace(/[aeoiu]/ig, '!')
}


// Solution 2
function replace(s) {
    return s.replace(/[aeiou]/ig, '!');
}


// Solution 3
replace = s => s.replace(/[aeiou]/gi, '!');


// Solution 4
const replace = s => s.replace(/[aeiou]/gi, '!');


// Solution 5
function replace(s) {
    var newS = ''
    var vowels = "aAeEiIoOuU"
    for (var i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) === -1) {
            newS += s[i]
        } else {
            newS += '!'
        }
    }
    return newS
}


// Solution 6
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');


// Solution 7
const replace = w => (w.split('').map(e => ['a', 'e', 'i', 'o', 'u'].includes(e.toLowerCase()) ? '!' : e)).join('');


// Solution 8
function replace(s) {
    return s.replace(/[aeiou]/gi, "!")
}


// Solution 9
const replace = s =>
    s.replace(/[AEIOU]/gi, `!`);


// Solution 11
const replace = (words) => words.replace(/[aeiou]/ig, '!')


// Solution 12
let replace = (s) => s.replace(/[aeiou]/gi, '!');