// Parse float

// Write function parseF which takes an input and returns a number or null if conversion is not possible.
// The input can be one of many different types so be aware.

function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s)
}

const parseF = (s) => isNaN(parseFloat(s)) ? null : parseFloat(s);

console.log(parseF("1"))
// 1.0
console.log(parseF("one1two2"))
// null
console.log(parseF("one"))
// null


// Solution 1
function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
}


// Solution 2
const parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s)


// Solution 3
function parseF(s) {
    const f = parseFloat(s)
    return isNaN(f) ? null : f
}


// Solution 4
parseF = s => isNaN(s = parseFloat(s)) ? null : s;


// Solution 5
function parseF(s) {
    return parseFloat(s) == +s ? parseFloat(s) : null
}


// Solution 6
function parseF(s) {
    console.log(s);
    if (typeof s === "boolean" || typeof s === "undefined") {
        return null;
    }
    var num = Number(s);
    console.log(num);
    if (isNaN(num) === true) {
        return null;
    }
    else {
        return num;
    }
}


// Solution 7
const parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s) 


// Solution 8
function parseF(s) {
    const r = parseFloat(s)
    return Number.isNaN(r) ? null : r;
}


// Solution 9
var parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s);


// Solution 10
const parseF = s => /\d+/.test(s) ? +s : null;


// Solution 11
function parseF(s) {
    return /\d+/.test(s) ? +s : null;
}


// Solution 12
function parseF(s) {
    return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}