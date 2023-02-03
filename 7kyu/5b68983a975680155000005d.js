// Scrabblemania

// In this word game points are awarded based on the length of the word and the letters used.

// The user has to create a word from the letters in their hand.
// Could you create a function which returns the correct score for the word played by the user ?

// The scoring of the letters is the same as in the game Scrabble(The letter scores are provided in the code).
// The score of the word is the sum of the points of all the letters multiplied by the number of letters in the word.
// If they use all their letters then they get a fifty point bonus.
// Their hand consists of seven letters.

// An example: 
// The word 'great' gives a score of 30. 
// This is because the sum of the letter values is six(g = 2, r = 1, e = 1, a = 1, t = 1) and it is a five letter word - 6 * 5 = 30.

// The basis of this word game comes from content on MIT OpenCourseWare(Introduction to Computer Science).


// function wordscore(word) {
//     const scores = {
//         "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10
//     };

//     let total = 0;

//     for (let element of word) {
//         total += scores[element];
//     }

//     total *= word.length;

//     if (word.length === 7) {
//         total += 50;
//     }

//     return total;
// }

function wordscore(word) {
    const scores = {
        "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10
    };

    return word.split("")
                .map(element => scores[element])
                .reduce((pV, cV) => pV + cV, 0) 
                * word.length + (word.length === 7 ? 50 : 0)
}

console.log(wordscore('great'));
// 30, "The expected score for 'great' was 30
console.log(wordscore('deceive'));
// 141, "'deceive' is seven letters, the expected result was 141
console.log(wordscore('melon'));
// 35, "The expected score for 'melon' was 35


// Solution 1
const points = {
    "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5,
    "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4,
    "w": 4, "x": 8, "y": 4, "z": 10
};

function wordscore(word) {
    const bonus = word.length == 7 ? 50 : 0;
    return word.split('').reduce((acc, c) => acc + points[c], 0) * word.length + bonus;
}


// Solution 2
function wordscore(word) {

    const values = [...'1332142418513113A11114484A'].map(n => parseInt(n, 16))
        , score = [...word].reduce((a, b) => a + values[b.charCodeAt(0) - 97], 0);

    return word.length * score + (word.length === 7 ? 50 : 0);

}


// Solution 3
const p = { "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10 }
const wordscore = word => (word.split('').map(c => p[c]).reduce((a, b) => a + b) * word.length) + (word.length === 7 ? 50 : 0)


// Solution 4
{
    const { sum } = require('ramda')
    function wordscore(...{ 0: word = [], 0: { length: len } }) {
        const obj = {
            a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1,
            o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
        }
        return sum([...word].map(i => obj[i])) * len + 50 * (len == 7)
    }
}


// Solution 5
function wordscore(word) {
    let x = word.split('')
    const len = x.length
    let sum = 0
    const score = { "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10 }
    Object.entries(score).forEach(([key, value]) => {
        for (let i = 0; i < len; i++) {
            if (x[i] === key) sum += value
        }
    })
    return (len === 7) ? sum * len + 50 : sum * len
}


// Solution 6
function wordscore(word) {
    let letters = { "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10 };
    return word.split``.reduce((score, l) => score + letters[l], 0) * word.length + (word.length < 7 ? 0 : 50);
}


// Solution 7
function wordscore(word) {
    let score = 0;
    for (const letter of word) {
        switch (letter) {
            case "a": score += 1; break;
            case "b": score += 3; break;
            case "c": score += 3; break;
            case "d": score += 2; break;
            case "e": score += 1; break;
            case "f": score += 4; break;
            case "g": score += 2; break;
            case "h": score += 4; break;
            case "i": score += 1; break;
            case "j": score += 8; break;
            case "k": score += 5; break;
            case "l": score += 1; break;
            case "m": score += 3; break;
            case "n": score += 1; break;
            case "o": score += 1; break;
            case "p": score += 3; break;
            case "q": score += 10; break;
            case "r": score += 1; break;
            case "s": score += 1; break;
            case "t": score += 1; break;
            case "u": score += 1; break;
            case "v": score += 4; break;
            case "w": score += 4; break;
            case "x": score += 8; break;
            case "y": score += 4; break;
            case "z": score += 10; break;
        }
    }
    score *= word.length;
    (word.length === 7) ? score += 50 : score += 0;
    return score;
}


// Solution 8
function wordscore(word) {
    const letter = {
        "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10
    }

    return [...word].reduce((total, char) => total += letter[char], 0)
        * word.length + (word.length == 7 ? 50 : 0)
}


// Solution 9
w = { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10 };
wordscore = a => (b => a ? a.split``.map(e => w[e]).reduce((a, b) => a + b) * b + (b == 7 ? 50 : 0) : 0)(a.length);


// Solution 10
function wordscore(word) {
    var scores = { "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10 }
    var result = word.split('').map(char => scores[char]).reduce((acc, x) => acc + x) * word.length;
    return word.length === 7 ? result + 50 : result;
}


// Solution 11
function wordscore(word) {
    const letters = { "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10 }
    let score = 0;
    word.split('').forEach(letter => { score += letters[letter] });
    score = score * word.length
    return word.length === 7 ? score + 50 : score;
}


// Solution 12
function wordscore(word) {
    var sum = 0;
    for (var i = 0; i < word.length; ++i) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'l' || word[i] == 'n' || word[i] == 'o' || word[i] == 'r' || word[i] == 's' || word[i] == 't' || word[i] == 'u')
            sum++;
        if (word[i] == 'b' || word[i] == 'c' || word[i] == 'm' || word[i] == 'p')
            sum += 3;
        if (word[i] == 'd' || word[i] == 'g')
            sum += 2;
        if (word[i] == 'f' || word[i] == 'h' || word[i] == 'v' || word[i] == 'w' || word[i] == 'y')
            sum += 4;
        if (word[i] == 'k')
            sum += 5;
        if (word[i] == 'j' || word[i] == 'x')
            sum += 8;
        if (word[i] == 'q' || word[i] == 'z')
            sum += 10;
    }
    return word.length == 7 ? 50 + word.length * sum : word.length * sum;
}