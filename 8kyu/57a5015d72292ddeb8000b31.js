// Palindrome strings

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples

// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false


function isPalindrome(line) {
    return line.toString() === line.toString().split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("anna"))
// true
console.log(isPalindrome("walter"))
// false
console.log(isPalindrome(12321))
// true
console.log(isPalindrome(123456))
// false


// Solution 1
function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') )   
}

// Solution 2
function isPalindrome(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
}

// Solution 6
const isPalindrome = line => [...`${line}`].reverse().join(``) == line;

// Solution 7
isPalindrome = l => Array.from(l).reverse().join('') == l

// Solution 8
const isPalindrome = w => w == w.toString().split('').reverse().join('')