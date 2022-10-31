// Build a pile of Cubes

// Your task is to construct a building which will be a pile of n cubes. 
// The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. 
// Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1


function findNb(m) {

    let sum = 0;
    let i;

    for (i = 1; sum < m; i++) {
        sum += Math.pow(i, 3);
    }

    // console.log(sum)
    // console.log(m)
    return sum === m ? i - 1 : -1;

}


console.log(findNb(4183059834009));
// 2022
console.log(findNb(24723578342962));
// -1
console.log(findNb(135440716410000));
// 4824
console.log(findNb(40539911473216));
// 3568


// Solution 1
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n ** 3
    return m ? -1 : n
}


// Solution 2
function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
        n++;
        sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
}


// Solution 3
// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)) {
        return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}


// Solution 4
function findNb(m) {
    // your code
    var n = 0;

    while (m > 0) m -= Math.pow(++n, 3);

    return m ? -1 : n;
}


// Solution 5
function findNb(m) {
    let n = Math.sqrt(Math.sqrt(m) * 2 + 0.25) - 0.5
    return Number.isInteger(n) ? n : -1
}


// Solution 6
var findNb = m => {
    var n = Math.floor((4 * m) ** .25);
    var sum = x => (x * (x + 1) / 2) ** 2;
    return sum(n) == m ? n : -1;
}


// Solution 7
function findNb(m) {
    n = (-1 + Math.sqrt(1 + (8 * Math.sqrt(m)))) / 2;
    return Math.round(n) == n ? n : -1;
}


// Solution 8
function findNb(m) {
    for (var i = 1, sum = 0; sum < m; sum += i * i * i, i++);
    return sum == m ? (i - 1) : -1;
}


// Solution 9
function findNb(m) {
    var n = Math.floor(Math.pow(4 * m, 1 / 4));
    if (n * n * (n + 1) * (n + 1) / 4 != m)
        return -1;
    return n;
}


// Solution 10
const findNb = m => {
    const r = (((m ** 0.5) * 8 + 1) ** 0.5 + 1) / 2 - 1;
    return Math.round(r) === r ? r : -1;
};


// Solution 11
function findNb(m) {
    var x = 0.5 * (Math.sqrt(8 * Math.sqrt(m) + 1) - 1);
    return x == Math.ceil(x) ? x : -1;
}


// Solution 12
const findNb = (m, n = 1) => m > 0 ? findNb(m - n ** 3, n + 1) : (m ? 0 : n) - 1;