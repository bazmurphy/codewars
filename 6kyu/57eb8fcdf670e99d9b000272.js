// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {

  // the index of the character in this scores string is equal to its score value
  const scores = "_abcdefghijklmnopqrstuvwxyz";

  // split the string into an array of individual words
  const individualWordsArray = x.split(" ");

  // initial these to store the currentHighestScore of the word, and the index of that word in the array
  let currentHighestScore = 0;
  let currentHighestScoreIndex = 0;

  // loop through the words in the array
  for (let i = 0; i < individualWordsArray.length; i++) {
    let currentWordScore = 0;
    // loop through the characters in the word
    for (let j = 0; j < individualWordsArray[i].length; j++) {
      currentWordScore += scores.indexOf(individualWordsArray[i][j])
    }
    
    if (currentWordScore > currentHighestScore) {
      currentHighestScore = currentWordScore;
      currentHighestScoreIndex = i;
    }
  }

  return individualWordsArray[currentHighestScoreIndex];

}

console.log(high('man i need a taxi up to ubud'));
// 'taxi'
console.log(high('what time are we climbing up the volcano'));
// 'volcano'
console.log(high('take me to semynak'));
// 'semynak'
console.log(high('aa b'));
// 'aa'
console.log(high('b aa'));
// 'b'
console.log(high('bb d'));
// 'bb'
console.log(high('d bb'));
// 'd'
console.log(high('aaa b'));
// 'aaa'


// Solution 1
function high(s) {
  let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}


// Solution 2
function high(words) {

  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word;

}


// Solution 3
const { compose, reduce, split } = require('ramda');

const score = compose(
  reduce((r, v) => r + v.charCodeAt() - 96, 0),
  split('')
);

const high = compose(
  reduce((r, v) => score(v) > score(r) ? v : r, ''),
  split(' ')
);


// Solution 5
function high(x) {
  return x.split(' ').reduce((accum, current) => {
    return score(current) > score(accum) ? current : accum;
  })
}

function score(word) {
  return word.split('').reduce((accum, current) => { return accum + (current.charCodeAt() - 96) }, 0)
}


// Solution 6
function high(x) {
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  for (let word of words) {
    let lettersSum = 0;

    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}


// Solution 7
function high(x) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const words = x.split(' ')
  const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a, b) => a + b, 0))

  return words[scores.indexOf(Math.max(...scores))]
}


// Solution 8
function high(x) {
  var arr = x.toLowerCase().split(" ");
  var sum = 0;
  var holder = 0;
  var holder2 = 0;
  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].length; j++) {

      sum += arr[i].charCodeAt(j) - 96;

    }

    if (sum > holder) {
      holder = sum;
      holder2 = i;

    }
    sum = 0;
  }
  console.log(arr[holder2]);
  return arr[holder2];

}


// Solution 9
function high(x) {
  const score = s => s.split('').reduce((m, i) => m + i.charCodeAt(0) - 96, 0);
  return x.split(' ').reduce((s, n) => score(s) < score(n) ? n : s);
}


// Solution 10
const charToScore = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };


function high(x) {
  const array = x.split(" ");
  const arrayOfScores = array.map(word => word.split("").reduce((score, char) => score + charToScore[char], 0))
  const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
  return array[indexOfResult];
}


// Solution 11
function high(x) {
  console.log(x);
  return x
    .split(' ')
    .map(word => ({
      word,
      score: word
        .split('')
        .map(letter => letter.charCodeAt(0) - 96)
        .reduce((sum, current) => sum + current, 0)
    }))
    .sort((a, b) => a.score - b.score)
    .pop()
    .word;
}


// Solution 12
function high(x) {
  let wordsArray = x.toLowerCase().split(' '),
    alphaSet = {},
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    values = 1,
    wordMap = new Map(),
    valuesArr = [];

  // populate alphaSet obj
  for (let i = 0; i < alphabet.length; i++) {
    alphaSet[alphabet[i]] = values;
    values++;
  }

  //
  for (let i = 0; i < wordsArray.length; i++) {
    let sum = 0;
    let currentWord = wordsArray[i];
    for (let letter = 0; letter < currentWord.length; letter++) {
      sum += alphaSet[currentWord[letter]];
    }
    if (!sum) {
      valuesArr.push(0);
      wordMap.set(0, currentWord);
    } else {
      wordMap.set(sum, currentWord);
      valuesArr.push(sum);
    }
  }

  let largestPosition = valuesArr.indexOf(Math.max(...valuesArr));
  return wordsArray[largestPosition];
}