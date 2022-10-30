// Find the missing letter

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. 
// And it will be always exactly one letter be missing. 
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// (Use the English alphabet with 26 letters!)

function findMissingLetter(array) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < array.length; i++) {
        if (alphabet.indexOf(array[i]) + 1 !== alphabet.indexOf(array[i+1])) {
            return alphabet[alphabet.indexOf(array[i]) + 1];
        }
    }

}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
// 'P'


// Solution 1
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")
}


// Solution 2
function findMissingLetter(array) {
    var i = array[0].charCodeAt();
    array.map(x => x.charCodeAt() == i ? i++ : i);
    return String.fromCharCode(i);
}


// Solution 3
const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};


// Solution 4
function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
            return String.fromCharCode(letters[i].charCodeAt() + 1);
        }
    }
}


// Solution 5
function getExpectedNextLetter(currentLetter) {
    var currentCharCode = currentLetter.charCodeAt();
    return String.fromCharCode(currentCharCode + 1);
}

function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
        var expectedNextLetter = getExpectedNextLetter(letters[i]);
        var nextLetter = letters[i + 1];
        if (expectedNextLetter !== nextLetter) return expectedNextLetter;
    }
}


// Solution 6
function findMissingLetter(array) {
    var string = array.join("");
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
            return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
}


// Solution 7
function findMissingLetter(array) {
    let i = array[0].charCodeAt(0);
    return String.fromCharCode(array.find(el => el.charCodeAt(0) != i++).charCodeAt(0) - 1);
}


// Solution 8
function findMissingLetter(array) {
    for (i = 1; i < array.length; ++i)
        if (array[i].charCodeAt() - 1 != array[i - 1].charCodeAt())
            return String.fromCharCode(array[i].charCodeAt() - 1);
}


// Solution 9
function findMissingLetter(array) {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const isUpperCase = array[0] === array[0].toUpperCase();

    let alphaIndex = alphabet.indexOf(array[0].toLowerCase());

    let letterPos;

    array.forEach(el => {
        if (el.toLowerCase() !== alphabet[alphaIndex]) {
            letterPos = alphaIndex;
        } else {
            alphaIndex++;
        }
    });

    return isUpperCase ? alphabet[letterPos].toUpperCase() : alphabet[letterPos];
}


// Solution 10
function findMissingLetter(array) {
    return String.fromCharCode(array.find(testNext).charCodeAt(0) + 1);

    function testNext(x, i, arr) {
        return (x.charCodeAt(0) + 1 != arr[i + 1].charCodeAt(0));
    }
}


// Solution 11
function findMissingLetter(array) {
    let charNum = array[0].charCodeAt();
    let tmpNum = charNum;

    for (let i = 1; i < array.length; i++) {
        tmpNum = array[i].charCodeAt();

        if (tmpNum - charNum === 2) {
            return String.fromCharCode(charNum + 1);
        }

        charNum = tmpNum;
    }

    return;
}


// Solution 12
function findMissingLetter(array) {
    var codes = array.map(a => a.charCodeAt(0))
        , last = codes.length - 1
        , sum = codes.reduce((a, b) => a + b)
        , expect = (codes[last] + codes[0]) * (codes[last] - codes[0] + 1) / 2;

    return String.fromCharCode(expect - sum);
}