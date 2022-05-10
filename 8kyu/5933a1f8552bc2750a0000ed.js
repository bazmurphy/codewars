// Get Nth Even Number

// Return the Nth Even Number

// Example(Input-- > Output)

// 1 -- > 0(the first even number is 0)
// 3 -- > 4(the 3rd even number is 4(0, 2, 4))
// 100 -- > 198
// 1298734 -- > 2597466

// The input will not be 0.

function nthEven(n) {
    return (n - 1) * 2;
}

console.log(nthEven(1))
// 0
console.log(nthEven(2))
// 2
console.log(nthEven(3))
// 4
console.log(nthEven(100))
// 198
console.log(nthEven(1298734))
// 2597466


// Solution 1
const nthEven = n => n * 2 - 2;


// Solution 2
function nthEven(n) {
    return (n - 1) * 2;
}


// Solution 3
const nthEven = n => (n - 1) * 2;


// Solution 4
function nthEven(n) {
    return 2 * (n - 1);
}


// Solution 5
function nthEven(n) {
    return n * 2 - 2
}


// Solution 6
const nthEven = n => --n * 2


// Solution 7
function nthEven(n) {
    return --n * 2;
}


// Solution 8
nthEven = $ => $ + $ - ([, +-~{} + -~[]][-~[]])


// Solution 9
function nthEven(n) {
    let answer = (n * 2) - 2;
    return answer;
}


// Solution 10
nthEven = n => n * 2 - 2


// Solution 11
function nthEven(n) {
    return n * 2 - 2
}


// Solution 12
var nthEven = (n) => n * 2 - 2