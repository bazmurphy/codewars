// Triple Trouble

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping them next to each other.
// Do this for every letter, see example below!

// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
    let output = '';
    for (let i = 0; i < Math.max(one.length, two.length, three.length); i++) {
        output += one[i] + two[i] + three[i]
    }
    return output;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"));
// "abcabcabc"
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"));
// "abcabcabcabcabcabc"
console.log(tripleTrouble("burn", "reds", "roll"));
// "brrueordlnsl"
console.log(tripleTrouble("Sea", "urn", "pms"));
// "Supermans"
console.log(tripleTrouble("LLh", "euo", "xtr"));
// "LexLuthor"


// Solution 1
function tripleTrouble(one, two, three) {
    var result = "";
    for (let i = 0; i < one.length; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}


// Solution 2
function tripleTrouble(one, two, three) {
    let x = ''
    for (i = 0; i < one.length; i++) {
        x += one[i] + two[i] + three[i]
    }
    return x
}


// Solution 3
const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");


// Solution 4
function tripleTrouble(one, two, three) {
    return one.replace(/./g, (v, i) => v + two[i] + three[i])
}


// Solution 5
const tripleTrouble = (one, two, three) =>
    one.replace(/\w/g, (val, idx) => val + two[idx] + three[idx]);




// Solution 6
const tripleTrouble = (one, two, three) =>
    one.split('').reduce((acc, c, i, array) =>
        [acc, one[i], two[i], three[i]].join(''), '')


// Solution 7
const tripleTrouble = (a, b, c) => Array.from(a, (x, i) => x + b[i] + c[i]).join('')


// Solution 8
function tripleTrouble(one, two, three) {
    var result = "";
    one.split("");
    two.split("");
    three.split("");
    for (i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result;
}


// Solution 9
function tripleTrouble(one, two, three) {
    let len = [one, two, three].sort((a, b) => b.length - a.length)[0]
    return [...len].map((_, i) => (one[i] || '') + (two[i] || '') + three[i]).join('')
}


// Solution 10
// Recursive solution

const tripleTrouble = (...arg) =>
    !arg[0][0] ? '' : arg.map(i => i[0]).join('') + tripleTrouble(...arg.map(i => i.slice(1)))


// Solution 11
function tripleTrouble(one, two, three) {

    let firstL = one.split(""), secondL = two.split(""), thirdL = three.split("");
    let newString = "";

    for (let i = 0; i < firstL.length && i < secondL.length && i < thirdL.length; i++) {
        newString += firstL[i] + secondL[i] + thirdL[i];
    }
    return newString;

}


// Solution 12
function tripleTrouble(one, two, three) {
    let response = '';
    one.split('').forEach((el, index) => response += one[index] + two[index] + three[index]);
    return response;
}