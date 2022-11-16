// Remove duplicate words

// Your task is to remove all duplicate words from a string, leaving only single(first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
    // s = s.split(" ")
    // console.log(s)
    // s = new Set(s)
    // console.log(s)
    // s = Array.from(s)
    // console.log(s)
    // s = s.join(" ")
    // console.log(s)

    return Array.from(new Set(s.split(" "))).join(" ")
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
// 'alpha beta gamma delta'


// Solution 1
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


// Solution 2
const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    return Array.from(set).join(' ');
}


// Solution 3
const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];

    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)

    return sFiltered.join(" ")
}


// Solution 4
function removeDuplicateWords(s) {
    return [...new Set(s.split(' '))].join(' ');
}


// Solution 5
function removeDuplicateWords(s) {
    return s.split(' ').filter((n, i, s) => {
        return s.indexOf(n) === i;
    }).join(' ');
}


// Solution 6
const removeDuplicateWords = s => s.split(' ').filter((w, i, arr) => arr.indexOf(w) == i).join(' ');


// Solution 7
const removeDuplicateWords = s => {
    let cleanArr = [];
    s.split(' ').forEach(current => {
        if (!cleanArr.includes(current)) {
            cleanArr.push(current);
        }
    });
    return cleanArr.join(' ');
};


// Solution 8
function removeDuplicateWords(s) {
    let unique = new Set(s.split(' '));
    return [...unique].join(' ');
}


// Solution 9
removeDuplicateWords = Q => Q.replace(/ ?(\S+)/g, (V, B) => Q[B] ? '' : Q[B] = V, Q = {})


// Solution 10
function removeDuplicateWords(s) {
    const arr = s.split(" ");
    const newSet = new Set(arr);
    const newArr = [...newSet];
    const newStr = newArr.join(" ");
    return newStr;
}


// Solution 11
function removeDuplicateWords(str) {
    let newStr = str.split(" ")
    let newArr = []

    newStr.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    })
    return newArr.join(" ")
}


// Solution 12
function removeDuplicateWords(string) {
    let array = string.split(" ")
    let obj = {};
    array.forEach(function (i) {
        if (!obj[i]) {
            obj[i] = true;
        }
    });
    return Object.keys(obj).join(' ');
}