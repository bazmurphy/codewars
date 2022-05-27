// Find the Remainder

// Task:

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:

// n = 17
// m = 5
// result = 2(remainder of`17 / 5`)

// n = 13
// m = 72
// result = 7(remainder of`72 / 13`)

// n = 0
// m = -1
// result = 0(remainder of`0 / -1`)

// n = 0
// m = 1
// result - division by zero(refer to the specifications on how to handle this in your language)


function remainder(n, m) {

    // let larger = Math.max(n, m);
    // let smaller = Math.min(n, m);

    // if (smaller === 0) {
    //     return NaN;
    // } else {
    //     return larger % smaller;
    // }

    return Math.min(n, m) === 0 ? NaN : Math.max(m,n) % Math.min(m,n)

}

console.log(remainder(17, 5));
// 2
console.log(remainder(13, 72));
// 7
console.log(remainder(0, -1));
// 0
console.log(remainder(0, 1));
// NaN


// Solution 1
function remainder(a, b) {
    return a > b ? a % b : b % a;
}


// Solution 2
function remainder(a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);

    return min ? max % min : NaN;
}


// Solution 3
function remainder(a, b) {
    if (b > a)
        return b % a;
    else
        return a % b;
}


// Solution 4
function remainder(a, b) {
    return (a > b) ? a % b : b % a;
}


// Solution 5
function remainder(a, b) {
    return Math.max(a, b) % (Math.min(a, b) || NaN);
}


// Solution 6
function remainder(a, b) { return Math.max(a, b) % Math.min(a, b); }


// Solution 7
const remainder = (a, b) => a > b ? a % b : b % a;


// Solution 8
function remainder(a, b) {
    return a < b ? b % a : a % b;
}


// Solution 9
const remainder = (a, b) => Math.max(a, b) % Math.min(a, b);


// Solution 10
function remainder(a, b) {
    if (a < b) a = [b, b = a][0];
    return b == 0 ? NaN : a % b;
}


// Solution 11
remainder = (a, b) => a > b ? a % b : b % a;


// Solution 12
// function remainder(n, m){

// //   if (n > m) {
// //     return n % m;
// //   } else if (n < m) {
// //     return m % n;
// //   } else if (n = 0 && m < n) {
// //     return n / m;
// //   } else {
// //     return NaN;
// //   }
// }

const remainder = (a, b) => (a > b ? a % b : b % a)