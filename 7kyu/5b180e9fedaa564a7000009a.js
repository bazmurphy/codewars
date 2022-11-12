// Fix string case

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
    
    let lowerCaseCount = 0;
    let upperCaseCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            lowerCaseCount++;
        } else if (s[i] === s[i].toUpperCase()) {
            upperCaseCount++;
        }
    }

    if (lowerCaseCount >= upperCaseCount) {
        return s.toLowerCase()
    } else if (upperCaseCount > lowerCaseCount) {
        return s.toUpperCase()
    }

}

console.log(solve("code"))
// "code"
console.log(solve("CODe"))
// "CODE"
console.log(solve("COde"))
// "code"
console.log(solve("Code"))
// "code"


// Solution 1
function solve(s) {
    let lowerC = 0;
    let upperC = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
            upperC++;
        }
        else {
            lowerC++;
        }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}


// Solution 2
const solve = s => s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase()


// Solution 3
function solve(s) {
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase()
}


// Solution 4
function solve(s) {
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) c++;
    }
    return (c > s.length / 2) ? s.toUpperCase() : s.toLowerCase()
}


// Solution 5
function solve(s) {
    return s.replace(/[a-z]/g, '').length > s.length / 2 ? s.toUpperCase() : s.toLowerCase()
}


// Solution 6
function solve(s) {
    return [...s].reduce((t, c) => t + /[a-z]/.test(c) * 2, 0) < s.length ? s.toUpperCase() : s.toLowerCase();
}


// Solution 7
const solve = (s) => (s.match(/[A-Z]/g) || []).length > (s.match(/[a-z]/g) || []).length ? s.toUpperCase() : s.toLowerCase()


// Solution 8
function solve(s) {
    return s.split('').reduce((a, v) => v === v.toUpperCase() ? a + 1 : a - 1, 0) > 0 ? s.toUpperCase() : s.toLowerCase()
}


// Solution 9
const solve = s =>
    [String.prototype.toLowerCase, String.prototype.toUpperCase]
    [Math.min(Math.max(0, [].reduce.call(s, (a, c) =>
        a + 1 - 2 / (1 + (93.5 / c.charCodeAt()) ** 1e10), 0)), 1)].call(s);


// Solution 10
function solve(s) {
    var upperCase = "" + s.match(/([A-Z])/g);
    var lowerCase = "" + s.match(/([a-z])/g);
    if (lowerCase.length >= upperCase.length)
        return s.toLowerCase();
    else
        return s.toUpperCase();
}


// Solution 11
const solve = s =>
    s.replace(/[a-z]/g, ``).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();


// Solution 12
function solve(s) {
    return (s.replace(/[^A-Z ]/g, "").length > s.replace(/[^a-z ]/g, "").length ? s.toUpperCase() : s.toLowerCase());
}