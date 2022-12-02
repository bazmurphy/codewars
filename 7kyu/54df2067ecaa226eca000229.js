// Gauß needs help!(Sums of a lot of numbers).

// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

f(n=100) // returns 5050 

// It's your duty to verify that n is a valid positive integer number. 
// If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

function f(n) {

    if (typeof n !== 'number' || n <= 0 || n % 1 !== 0) {
        return false;
    }
    
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
        console.log(sum)
    }
    
    return sum;
};

console.log(f(100));
// 5050
console.log(f(300));
// 45150
console.log(f(50000));
// 1250025000
console.log(f('n'));
// false, "n must be a number"
console.log(f());
// false, "n must be a value"
console.log(f(3.14));
// false, "n must be an integer"
console.log(f(0));
// false, "a value of n greater than 0 is required"
console.log(f(-10));
// false, "a positive value of n is required"


// Solution 1
function f(n) {
    return (parseInt(n) === n && n > 0) ? n * (n + 1) / 2 : false;
};


// Solution 2
function f(n) {
    return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
};


// Solution 3
const f = $ => $ < 1 || typeof $ !== 'number' || $ !== ($ | 0) ? false : $ + $ * ($ - 1) / 2


// Solution 4
function f(n) {
    /* This problem can be solved using the summation function in math "n * (n + 1) / 2"
     * Number must be greater than 0 and NOT a decimal hence n % 1 must equal to 0
     * Wrapped up in a beautiful ternary expression you get:
     */

    return (n % 1 !== 0 || n <= 0) ? false : (((n + 1) * n) / 2);
};


// Solution 5
function f(n) {
    return n !== (n | 0) || n < 1 ? false : n * (n + 1) / 2
}


// Solution 6
function f(n) {
    if (typeof n != 'number' || n <= 0 || Math.floor(n) != n)
        return false;
    return n * (n + 1) / 2;
};


// Solution 7
const f = n => Number.isInteger(n) && n > 0 && n / 2 * ++n;


// Solution 8
function f(n) {
    return n > 0 && typeof n == "number" && Number.isInteger(n) ? sum = (n * (n + 1)) / 2 : false
};


// Solution 9
function f(n) {
    return Number.isInteger(n) && n > 0 ? (1 + n) / 2 * n : false;
};


// Solution 10
function f(n) {
    return ~~+n == n && n > 0 ? n * ++n / 2 : false;
}


// Solution 11
const f = n => n % 1 == 0 && n > 0 && n++ * n / 2;


// Solution 12
function f(n) {
    return !isNaN(n) && n > 0 && !(n % 1) && n * (n + 1) / 2;
};