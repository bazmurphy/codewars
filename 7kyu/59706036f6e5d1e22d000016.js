// Love vs friendship

// If　a = 1, b = 2, c = 3 ...z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love: -)

// The input will always be in lowercase and never be empty.


function wordsToMarks(string) {
    return [...string]
        .map(element => element.charCodeAt(0) - 96)
        .reduce((pV, cV) => pV + cV);
}

const wordsToMarks = (s) => [...s].map(e => e.charCodeAt(0) - 96).reduce((p,c) => p + c);


console.log(wordsToMarks("attitude"));
// 100
console.log(wordsToMarks("friends"));
// 75
console.log(wordsToMarks("family"));
// 66
console.log(wordsToMarks("selfness"));
// 99
console.log(wordsToMarks("knowledge"));
// 96


// Solution 1
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)


// Solution 2
function wordsToMarks(str) {
    var sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) - 96;
    return sum;
}


// Solution 4
function wordsToMarks(string) {
    return string.split('').reduce((acc, char) => {
        return acc + char.charCodeAt() - 96;
    }, 0);
}


// Solution 5
function wordsToMarks(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
        marks += alphabet.indexOf(char) + 1;
    });
    return marks;
}


// Solution 6
const wordsToMarks = (abc) => [0, ...abc].reduce(($, b) => $ + ' abcdefghijklmnopqrstuvwxyz'.indexOf(b))


// Solution 7
function wordsToMarks(string) {
    return [...string].map(e => e.charCodeAt(0) - 96).reduce((a, b) => a + b);
}


// Solution 8
const wordsToMarks = s => [...s].map((a, i) => s.charCodeAt(i) - 96).reduce((a, b) => a + b);


// Solution 9
function wordsToMarks(str) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return [...str].reduce((sum, letter) => (sum += (alphabet.indexOf(letter) + 1), sum), 0)
}


// Solution 10
const wordsToMarks = string =>
    [...string].reduce((pre, val) => pre + val.charCodeAt() - 96, 0);


// Solution 11
function wordsToMarks(string) {
    var total = 0;
    for (var i = 0; i < string.length; i++) {
        total += string[i].charCodeAt() - 96;
    }
    return total;
}


// Solution 12
const alphaNumber = t => "abcdefghijklmnopqrstuvwxyz".match(t).index + 1
const wordsToMarks = s => s.split('').reduce((sum, l) => sum += alphaNumber(l), 0)