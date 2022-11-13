// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {

    let output = ['',''];

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            output[0] += s[i].toUpperCase();
            output[1] += s[i].toLowerCase();
        } else if (i % 2 !== 0) {
            output[0] += s[i].toLowerCase();
            output[1] += s[i].toUpperCase();
        }
    }

    return output;

};

console.log(capitalize("abcdef"));
// ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars"));
// ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra"));
// ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors"));
// ['CoDeWaRrIoRs', 'cOdEwArRiOrS']


// Solution 1
function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};


// Solution 2
function capitalize(s) {
    return [0, 1].map(r => [...s].map((c, i) => i % 2 === r ? c.toUpperCase() : c).join(''));
};


// Solution 3
function capitalize(s) {
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
        if (i & 1) {
            a += s[i]
            b += S[i]
        } else {
            a += S[i]
            b += s[i]
        }
    }
    return [a, b]
}


// Solution 4
function capitalize(s) {
    return [[...s].map((x, i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
    [...s].map((x, i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}


// Solution 5
function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};


// Solution 6
const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';

    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            a += arr[i];
            b += arr[i].toUpperCase();
        } else {
            a += arr[i].toUpperCase();
            b += arr[i];
        }
    }

    return [a, b];
};


// Solution 7
capitalize = s =>
    [
        [...s].map((l, i) => i % 2 ? l.toLowerCase() : l.toUpperCase()).join(''),
        [...s].map((l, i) => i % 2 ? l.toUpperCase() : l.toLowerCase()).join('')
    ]


// Solution 8
const capitalize = (s) => [
    [...s].map((el, i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join(''),
    [...s].map((el, i) => i % 2 ? el.toUpperCase() : el.toLowerCase()).join('')
] 


// Solution 9
const cap = (str, isEven) => str.split('').map((a, i) => isEven && i % 2 === 0 || !isEven && i % 2 === 1 ? a.toUpperCase() : a.toLowerCase()).join('');

function capitalize(s) {
    return [cap(s, true), cap(s, false)]
};


// Solution 10
const capitalize = s => {
    return [
        s
            .split('')
            .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char)
            .join(''),

        s
            .split('')
            .map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char)
            .join('')
    ]
};


// Solution 11
function capitalize(s) {
    let a = ''
    let b = ''

    let isUpper = true

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (isUpper) {
            a += char.toUpperCase()
            b += char.toLowerCase()
        } else {
            a += char.toLowerCase()
            b += char.toUpperCase()
        }

        isUpper = !isUpper
    }

    return [a, b]
}


// Solution 12
const capitalize = string => {
    let results = [];
    // all the odd index letter to uppercase
    const odds = string.replace(/\w/g, (match, offset) => offset % 2 === 0 ? match : match.toUpperCase())
    const evens = string.replace(/\w/g, (match, offset) => offset % 2 !== 0 ? match : match.toUpperCase())

    results.push(evens, odds)
    return results
}