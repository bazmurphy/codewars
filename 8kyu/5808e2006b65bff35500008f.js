// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput:: "Position of alphabet: 1"

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

console.log(position("a"));
// "Position of alphabet: 1"
console.log(position("z"));
// "Position of alphabet: 26"
console.log(position("e"));
// "Position of alphabet: 5"


// Solution 1
function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}


// Solution 2
position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;


// Solution 3
function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}


// Solution 4
const position = a => `Position of alphabet: ${"&abcdefghijklmnopqrstuvwxyz".indexOf(a)}`


// Solution 5
function position(letter) {
    if (letter == "a") {
        return "Position of alphabet: 1"
    } else if (letter == "b") {
        return "Position of alphabet: 2"
    } else if (letter == "c") {
        return "Position of alphabet: 3"
    } else if (letter == "d") {
        return "Position of alphabet: 4"
    } else if (letter == "e") {
        return "Position of alphabet: 5"
    } else if (letter == "f") {
        return "Position of alphabet: 6"
    } else if (letter == "g") {
        return "Position of alphabet: 7"
    } else if (letter == "h") {
        return "Position of alphabet: 8"
    } else if (letter == "i") {
        return "Position of alphabet: 9"
    } else if (letter == "j") {
        return "Position of alphabet: 10"
    } else if (letter == "k") {
        return "Position of alphabet: 11"
    } else if (letter == "l") {
        return "Position of alphabet: 12"
    } else if (letter == "m") {
        return "Position of alphabet: 13"
    } else if (letter == "n") {
        return "Position of alphabet: 14"
    } else if (letter == "o") {
        return "Position of alphabet: 15"
    } else if (letter == "p") {
        return "Position of alphabet: 16"
    } else if (letter == "q") {
        return "Position of alphabet: 17"
    } else if (letter == "r") {
        return "Position of alphabet: 18"
    } else if (letter == "s") {
        return "Position of alphabet: 19"
    } else if (letter == "t") {
        return "Position of alphabet: 20"
    } else if (letter == "u") {
        return "Position of alphabet: 21"
    } else if (letter == "v") {
        return "Position of alphabet: 22"
    } else if (letter == "w") {
        return "Position of alphabet: 23"
    } else if (letter == "x") {
        return "Position of alphabet: 24"
    } else if (letter == "y") {
        return "Position of alphabet: 25"
    } else {
        return "Position of alphabet: 26"
    }
}


// Solution 6
function position(c) {
    return 'Position of alphabet: ' + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
}


// Solution 7
function position(letter) {
    //Write your own Code!
    let result = letter.toLowerCase();
    return "Position of alphabet: " + (result.charCodeAt(0) - 96)
}


// Solution 8
function position(alphabet) {
    var letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var placed = letters.indexOf(alphabet)
    return "Position of alphabet:" + " " + placed;

}


// Solution 9
var position = d => `Position of alphabet: ${d.charCodeAt() - 96}` 


// Solution 10
const position = abc => `Position of alphabet: ${abc.charCodeAt() - 96}`


// Solution 11
const position = (letter = '') => `Position of alphabet: ${letter.toUpperCase().charCodeAt(0) - 64}`


// Solution 12
function position(l) {
    var lett = ' abcdefghijklmnopqrstuvwxyz'
    return 'Position of alphabet: ' + [...lett].indexOf(l);
}