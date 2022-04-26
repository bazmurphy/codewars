// What is between ?

// Complete the function that takes two integers(a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr;
}

console.log(between(1, 4));
// [1, 2, 3, 4]
console.log(between(-2, 2));
// [-2, -1, 0, 1, 2]


// Solution 1
function between(a, b) {
    arr = []
    for (i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}


// Solution 2
const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);


// Solution 3
function between(a, b) {
    var all = [];
    for (a; a <= b; a++) {
        all.push(a);
    }
    return all;
}


// Solution 4
function between(a, b) {
    let finalArr = [];

    for (let i = a; i <= b; i++) {
        finalArr.push(i);
    }
    return finalArr;
}


// Solution 5
const between = (a, b) =>
    [...Array(b - a + 1)].map((_, idx) => idx + a);


// Solution 6
function between(a, b) {
    const betweenArray = []

    while (a <= b) {
        betweenArray.push(a);
        a++;
    }

    return betweenArray;
}

/*
 1) Let A = 1 and B = 10
 2) Determine which number is higher/lower
 3) Push lower number to start of array
 4) Add 1 to lower number until it's equal to the higher number
*/



// Solution 7
function between(q, q2) {
    let a = Array.from({ length: (q2 - q + 1) }, (_, i) => i + q);
    return a;
}


// Solution 8
function between(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (var i = min, arr = []; i <= max; arr.push(i++));
    return arr;
}


// Solution 9
function between(a, b) {
    return Array(b - a + 1).fill(1).map((_, i) => a + i)
}


// Solution 10
function between(a, b) {
    return Array.from({ length: (b - a + 1) }, (v, i) => a + i);
}


// Solution 11
function between(a, b) {
    return Array.from({ length: b - a + 1 }, () => a++)
}


// Solution 12
function between(a, b) {
    let output = [];
    for (let i = a - 1; i < b;) { output.push(++i); }
    return output;
}

// Solution 13
function between(a, b) {
    return [...Array(b - a + 1)].map((_, i) => a + i)
}