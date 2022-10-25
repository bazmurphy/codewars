// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word(see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//     Examples

// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
    
    return original.length === test.length ? original.toLowerCase().split("").sort().join() === test.toLowerCase().split("").sort().join() : false

    // if (original.length !== test.length) {
    //     return false
    // } else {
    //     let originalEdit = original.toLowerCase().split("").sort().join()
    //     console.log(originalEdit)
    //     let testEdit = test.toLowerCase().split("").sort().join()
    //     console.log(testEdit)
    //     if (originalEdit === testEdit) {
    //         return true;
    //     } else {
    //         false;
    //     }
    // }

};


console.log(isAnagram("foefet", "toffee"))
// true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"))
// true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT"))
// true, 'The word Twoo is an anagram of WooT')
console.log(isAnagram("dumble", "bumble"))
// false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round"))
// false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale"))
// false, 'Same letters, but different count')


// Solution 1
var isAnagram = function (test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t == o) ? true : false;
};


// Solution 2
String.prototype.sortLetters = function () {
    return this.toLowerCase().split('').sort().join('');
}

var isAnagram = function (test, original) {
    return test.sortLetters() == original.sortLetters();
};


// Solution 3
function isAnagram(test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}


// Solution 4
function isAnagram(str1, str2) {
    return sortWord(str1) == sortWord(str2);
}

function sortWord(word) {
    return word.toLowerCase().split("").sort().join("");
}


// Solution 5
var isAnagram = function (test, original) {
    if (test.length !== original.length) return false;

    test = test.toLowerCase();
    original = original.toLowerCase();

    let obj = {};

    for (let i = 0; i < test.length; i++) {
        if (obj.hasOwnProperty(test[i])) {
            obj[test[i]] += 1;
        } else {
            obj[test[i]] = 1;
        }
    }

    for (let i = 0; i < original.length; i++) {
        if (obj.hasOwnProperty(original[i])) {
            obj[original[i]] -= 1;
            if (obj[original[i]] === 0) delete obj[original[i]];
        } else {
            return false
        }
    }

    return Object.keys(obj).length === 0 && obj.constructor === Object;
};


// Solution 6
var isAnagram = function (test, original) {
    if (test.length !== original.length) { return false }
    return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
};


// Solution 7
const isAnagram = (test, original) =>
    (fn => fn(test) === fn(original))
        (val => [...val.toLowerCase()].sort().join(``));


// Solution 8
var isAnagram = function (test, original) {
    // NOTE: there is a pretty solution with sort(), but sort is pretty heavy, which is not pretty (:
    if (test.length !== original.length) return false;
    test = test.toUpperCase();
    original = original.toUpperCase();
    const m1 = getMap(test);
    const m2 = getMap(original);
    return Object.keys(m1).every((key) => m1[key] === m2[key]);
};

function getMap(word) {
    return word.split('').reduce((a, l) => {
        a[l] ? a[l]++ : a[l] = 1;
        return a;
    }, {});
}


// Solution 9
var isAnagram = function (test, original) {
    return test.length === original.length && [].every.call(test, function (char) { return original.toUpperCase().indexOf(char.toUpperCase()) !== -1 })
};


// Solution 10
let isAnagram = (a, b) => [a, b].map(i => i.toLowerCase``.split``.sort``.join``).reduce((a, b) => a == b)


// Solution 11
var isAnagram = function (test, original) {
    var h = [...test.toLowerCase()].reduce((b, c) => (b[c] = (b[c] || 0) + 1, b), {}),
        h = [...original.toLowerCase()].reduce((b, c) => (b[c] = (b[c] || 0) - 1, b), h);
    return Object.keys(h).every(k => h[k] === 0);
};


// Solution 12
const alpha = S => S.toLowerCase().split('').sort().join('')
const isAnagram = (test, original) => alpha(test) === alpha(original)