// Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
    
    let vowels = ['a','e','i','o','u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']

    let output = [];

    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) > -1) {
            let position = i+1
            output.push(position);
        }
    }

    return output;
}

console.log(vowelIndices("mmm"));
// []
console.log(vowelIndices("apple"));
// [1, 5]
console.log(vowelIndices("super"));
// [2, 4]
console.log(vowelIndices("orange"));
// [1, 3, 6]
console.log(vowelIndices("supercalifragilisticexpialidocious"));
// [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]


// Solution 1
function vowelIndices(word) {
    var arr = [];
    for (var i = 0; i < word.length; i++) {
        if (/[aeioyu]/i.test(word[i])) {
            arr.push(i + 1);
        }
    }
    return arr;
}


// Solution 2
function vowelIndices(word, a = []) {
    return (word.replace(/[aeiouy]/gi, (m, i) => (a.push(i + 1), m)), a)
}


// Solution 3
function vowelIndices(word) {
    const str = 'aeiouy';
    const arr = word.toLowerCase().split('');
    let answer = [];
    arr.forEach((name, i) => {
        if (str.indexOf(name) !== -1) {
            answer.push(i + 1);
        }
    });
    return answer;
}


// Solution 4
function vowelIndices(word) {
    vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    result = []
    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) != -1) {
            result.push(i + 1);
        }
    }
    return result;
}


// Solution 5
function vowelIndices(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const isVowel = letter => vowels.includes(letter);
    const vowelsToIndex = (letter, index) => isVowel(letter) ? index + 1 : null;
    const removeNull = item => item !== null;

    return word.toLowerCase().split('').map(vowelsToIndex).filter(removeNull);
}


// Solution 6
const vowelIndices = (word) => [...word].map((el, i) => el.match(/[aeiouy]/ig) ? i + 1 : '').filter(el => el)


// Solution 7
function vowelIndices(word) {
    return [...word].map((v, i) => ~'aeiouyAEIOUY'.indexOf(v) && ++i).filter(Boolean);
}


// Solution 8
const vowelIndices = word =>
    [...word].reduce((pre, val, idx) => /[aeiouy]/i.test(val) ? [...pre, ++idx] : pre, []);


// Solution 9
function vowelIndices(word) {
    return [...word].map((el, ind) => el.match(/[aeiouy]/ig) ? ind + 1 : '').filter(e => e)
}


// Solution 10
function vowelIndices(word) {
    word = word.toLowerCase()
    var ans = [];
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) >= 0) { ans.push(i + 1) }
    }
    return ans
}


// Solution 11
const vowelIndices = (word) =>
    [...word].reduce((ac, cur, i) =>
        /[aeiouy]/i.test(cur) ? [...ac, i + 1] : ac
        , []);


// Solution 12
const vowelIndices = word => {
    return word.split('').map((x, i) => {
        return x.match(/[aeiouy]/i) ? i + 1 : x
    }).filter(x => x === +x);
}