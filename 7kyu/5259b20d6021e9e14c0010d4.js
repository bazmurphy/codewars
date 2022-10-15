// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces" ==> "elbuod  secaps"

function reverseWords(str) {

    str = str.split("").reverse("").join("")

    if (str.includes("  ")) {
        str = str.split("  ").reverse().join("  ")
    } else if (str.includes(" ")) {
        str = str.split(" ").reverse().join(" ")
    }

    return str;
    
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'));
// 'elppa'
console.log(reverseWords('a b c d'));
// 'a b c d'
console.log(reverseWords('double  spaced  words'));
// 'elbuod  decaps  sdrow'


// Solution 1
function reverseWords(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}


// Solution 2
function reverseWords(str) {
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


// Solution 3
function reverseWords(str) {
    return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}


// Solution 4
function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            reversedWord = str[i] + reversedWord;
        } else {
            reversedStr += reversedWord + ' ';
            reversedWord = '';
        }
    }
    return reversedStr + reversedWord;
}


// Solution 5
var reverseWords = s => s.replace(/\S+/g, v => [...v].reverse().join``)


// Solution 6
function reverseWords(str) {
    return str.split(" ").map(x => x.split("").reverse().join("")).join(" ");
}


// Solution 7
function reverseWords(str) {
    var l = ''
    var s = ''
    var a = []
    for (let s = str.length; s >= 0; s--) {
        if (str[s - 1] === ' ') {
            a.push(l)
            a.push(' ')
            l = ''
            if (str[s - 2] === '') {
                a.push(' ')
                s--
            }
        } else {
            if (s === 0) {
                a.push(l)
            } else {
                l += str[s - 1]
            }
        }
    }
    for (let i = a.length; i > 0; i--) {
        s += a[i - 1]
    }
    return s
}


// Solution 8
function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
}


// Solution 9
var reverseWords = (str) => str.split(" ").map(word => word.split('').reverse().join('')).join(" ")


// Solution 10
function reverseWords(string) {
    return string.split(' ').map(el => [...el].reverse().join('')).join(' ')
}


// Solution 11
function reverseWords(str) {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}


// Solution 12
const reverseWords = input => input.split(" ").map(a => a.split("").reverse().join("")).join(" ");