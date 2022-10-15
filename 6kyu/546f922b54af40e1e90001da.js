// Replace With Alphabet Position

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//  Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)


function alphabetPosition(text) {

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    return text
        .toLowerCase()
        .split('')
        .filter(element => letters.indexOf(element) !== -1)
        .map((element) => element.charCodeAt(0) - 96)
        .join(' ')

}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight."))
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"


// Solution 1
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}


// Solution 2
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length - 1);
}


// Solution 3
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');


// Solution 4
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
        .filter(letter => {
            let index = alphabet.indexOf(letter);
            return index > -1;
        })
        .map(letter => alphabet.indexOf(letter) + 1)
        .join(' ')
}


// Solution 5
function alphabetPosition(text) {
    return text.match(/[a-zA-Z]/g).map((el) => el.toLowerCase().charCodeAt() - 96).join(' ');
}


// Solution 6
function alphabetPosition(text) {
    return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
}


// Solution 7
function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.indexOf(t) > -1)
        .map(t => letters.indexOf(t) + 1 || '')
        .join(' ');
}


// Solution 8
function alphabetPosition(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .replace(/./g, c => c + " ")
        .replace(/[a-z]/g, c => c.charCodeAt(0) - 96)
        .trim();
}


// Solution 9
function alphabetPosition(text) {
    text = text.replace(/([^a-z])/ig, '').toLowerCase().split('')

    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charCodeAt() - 96
    }
    return text.join(' ')
}


// Solution 10
function alphabetPosition(text) {
    return text.toLowerCase()
        .split('')
        .filter(c => c.charCodeAt(0) < 123 && c.charCodeAt(0) > 96)
        .map(c => c.charCodeAt(0) - 96)
        .join(' ');
}


// Solution 11
function alphabetPosition(text) {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(x => alphabet.indexOf(x) + 1).join(' ');

}


// Solution 12
function alphabetPosition(text) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return text.toLowerCase().split("").filter(function (x) {
        if (x.toLowerCase().match(/[a-z]/)) {
            return x;
        }
    }).map(function (y) {
        if (alphabet.includes(y)) {
            return (alphabet.indexOf(y) + 1);
        }
    }).join(" ");
}