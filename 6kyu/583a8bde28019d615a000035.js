// Coding Meetup #15 - Higher - Order Functions Series - Find the odd names

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//     { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//     { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];

// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

// [
//     { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]

// Explanation of the above:

// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

// Notes:

// Preserve the order of the original list.
// Return an empty array[] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.

function findOddNames(list) {
    return list.filter((element) => element.firstName.split("").reduce((acc, cv) => acc + cv.charCodeAt(), 0) % 2 !== 0);
}

var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

var answer1 = [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1));
// { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }


var list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
];

var answer2 = [];

console.log(findOddNames(list2));
// [];


// Solution 1
function findOddNames(list) {
    return list.filter((d) => {
        return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
    });
}


// Solution 2
var findOddNames = (list) =>
    list.filter(d => d.firstName
        .split('')
        .map(c => c.charCodeAt(0))
        .reduce((a, b) => a + b, 0)
        % 2 !== 0);


// Solution 3
const findOddNames = list =>
    list.filter(val => [...val.firstName].reduce((pre, val) => pre + val.charCodeAt(), 0) % 2);


// Solution 4
function findOddNames(list) {
    return list.filter(dev => {
        return [...dev.firstName].reduce((sum, curr) => sum + curr.charCodeAt(), 0) & 1;
    });
}


// Solution 5
function sumCharCodes(str) {
    return str
        .split('')
        .map(char => char.charCodeAt())
        .reduce((sum, current) => sum + current);
}

function isOdd(n) {
    return n % 2 != 0;
}

function findOddNames(list) {
    return list.filter(person => {
        return isOdd(sumCharCodes(person.firstName));
    })
}


// Solution 6
const findOddNames = a => a.filter(({ firstName }) =>
    firstName.split('').map(c => c.charCodeAt()).reduce((r, c) => r + c) % 2);


// Solution 7
function findOddNames(list) {
    let odd = [];
    let sum = 0;
    list.forEach(el => {
        let char = [...el.firstName]
        char.forEach(e => sum += e.charCodeAt(0))
        sum % 2 !== 0 ? odd.push(el) : 0
        sum = 0;
    });
    return odd;
}


// Solution 8
function findOddNames(list) {
    return list.filter(({ firstName }) => {
        return firstName.split('').reduce((acc, val) => {
            return acc + val.charCodeAt()
        }, 0) % 2 !== 0
    })
}


// Solution 9
function findOddNames(list) {

    var devs = [];
    var counter = 0;

    for (i = 0; i < list.length; i++) {
        let name = list[i].firstName;
        counter = 0;
        for (j = 0; j < name.length; j++) {
            counter += name.charCodeAt(j);
        }
        if (counter % 2 == !0) {
            devs.push(list[i])
        }
    }

    return devs;
}


// Solution 10
function findOddNames(list) {
    return list.filter((obj) => Array.from(obj.firstName).reduce((prev, curr) => prev + curr.charCodeAt(), 0) % 2);
}


// Solution 12
function findOddNames(list) {
    let odds = [];
    list.forEach(dev => {
        let nameNumber = dev.firstName.split('').reduce((acc, curr) => acc + +curr.codePointAt(0), 0)
        if (nameNumber % 2 !== 0) odds.push(dev);
    })
    return odds;
}