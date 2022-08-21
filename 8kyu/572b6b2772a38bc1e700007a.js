// ASCII Total

// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(string) {
    return string
                .split("")
                .map((element, index) => string.charCodeAt(index))
                .reduce((acc, cv) => acc + cv, 0);
}

console.log(uniTotal(""));
// 0
console.log(uniTotal("a"));
// 97
console.log(uniTotal("b"));
// 98
console.log(uniTotal("c"));
// 99
console.log(uniTotal("d"));
// 100
console.log(uniTotal("e"));
// 101
console.log(uniTotal("aaa"));
// 291
console.log(uniTotal("Mary Had A Little Lamb"));
// 1873


// Solution 1
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);


// Solution 2
function uniTotal(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count += str.charCodeAt(i);
    }
    return count;
}


// Solution 3
function uniTotal(string) {
    return Array.prototype.reduce.call(string, (a, c) => a + c.charCodeAt(0), 0);
}


// Solution 4
function uniTotal(str) {
    return str.split('').reduce(function (last, now) {
        return last + now.charCodeAt();
    }, 0);
}


// Solution 5
function uniTotal(a) {
    return a.split('').reduce((s, c) => s + c.charCodeAt(), 0)
}


// Solution 6
var uniTotal = x => [...x].map(e => e.charCodeAt()).reduce((a, b) => a + b, 0) || 0


// Solution 7
uniTotal = s => s.split('').reduce((t, a) => t + a.charCodeAt(0), 0)


// Solution 8
const uniTotal = str =>
    [...str].reduce((pre, val) => pre + val.charCodeAt(), 0);


// Solution 9
function uniTotal(str) {
    let total = 0;

    for (let char of str) {
        // Use codePointAt to avoid incorrect result when Unicode Code large than 0xFFFF
        total += char.codePointAt(char);
    }
    return total;
}


// Solution 10
function uniTotal(str) {
    return [...str].reduce((s, c) => s + c.charCodeAt(0), 0);
}


// Solution 11
function uniTotal(s) {
    return [...s].map(c => c.charCodeAt(0)).reduce((a, b) => a + b, 0);
}


// Solution 12
uniTotal = (string) => {
    return string.split('').reduce(function (a, b) {
        return a + b.charCodeAt(0);
    }, 0);
}