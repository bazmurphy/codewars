// Convert the score

// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4, 0]

// Either teams score has a range of 0 - 9, and the ref won't say the same string every time e.g.

// "new score: two three"

// "two two"

// "Arsenal just conceded another goal, two nil"

// Note:

// Please return an array

function scoreboard(string) {
    const numbers = {  
        one: 1, 
        two: 2, 
        three: 3, 
        four: 4, 
        five: 5, 
        six: 6, 
        seven: 7, 
        eight: 8, 
        nine: 9,
        nil: 0,
    }

    return string
        .split(" ")
        .filter(element => numbers[element] !== undefined)
        .map(element => numbers[element]);
}

console.log(scoreboard("The score is four nil"));
// [4, 0]
console.log(scoreboard("new score: two three"));
// [2, 3]
console.log(scoreboard("two two"));
// [2, 2]
console.log(scoreboard("Arsenal just conceded another goal, two nil"));
// [2, 0]


// Solution 1
function scoreboard(string) {
    var arr = string.split(' ');
    var a = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return [a.indexOf(arr[arr.length - 2]), a.indexOf(arr[arr.length - 1])];
}


// Solution 2
function scoreboard(string) {
    var dict = {
        'nil': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    };
    return string.match(/(nil|one|two|three|four|five|six|seven|eight|nine)/g).map(e => dict[e]);
}


// Solution 3
const scoreboard = string => {
    const dictionary = {
        'nil': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    };
    const scoreOne = string.split(' ').reverse()[1];
    const scoreTwo = string.split(' ').reverse()[0];
    return [dictionary[scoreOne], dictionary[scoreTwo]];
}


// Solution 4
function scoreboard(string) {
    let score = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return string.split(' ')
        .filter(x => score.includes(x))
        .map(x => score.lastIndexOf(x))
}


// Solution 5
const scores = {
    nil: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

const scoreboard = (string) => string.split(" ").filter(s => scores[s]).map(v => parseInt(scores[v]));


// Solution 6
function scoreboard(string) {
    // code here!
    var score = {
        nil: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    var arrKata = string.split(' ')
    var arrScore = [];
    for (var i = 0; i < arrKata.length; i++) {
        for (var prop in score) {
            if (prop === arrKata[i]) {
                arrScore.push(score[prop]);
            }
        }
    }
    return arrScore;
}


// Solution 7
scoreboard = a => a.split` `.slice(-2).map(i => d = { nil: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }[i])


// Solution 8
const scoreboard = string =>
    (arr => string.split(` `).filter(val => arr.includes(val)).map(val => arr.indexOf(val)))
        ([`nil`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`]);


// Solution 9
const scoreboard = string => {
    const regExp = /nil|one|two|three|four|five|six|seven|eight|nine/g;
    const obj = {
        nil: 0, one: 1, two: 2, three: 3,
        four: 4, five: 5, six: 6,
        seven: 7, eight: 8, nine: 9
    }
    return string.match(regExp).map(n => obj[n]);
}


// Solution 10
const dict = {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

const scoreboard = str => str.split(' ').slice(-2).map(key => dict[key]);


// Solution 11
const scoreboard = (i, s = 'nil|one|two|three|four|five|six|seven|eight|nine') => i.match(new RegExp(s, "ig")).map(e => s.split('|').findIndex(x => x == e));


// Solution 12
function scoreboard(string) {
    string = string.split` `;
    const num = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const second = num.indexOf(string.pop());
    const first = num.indexOf(string.pop());
    return [first, second];
}