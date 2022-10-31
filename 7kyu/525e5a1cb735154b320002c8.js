// Triangular Treasure

// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots.i.e.

// 1st(1)   2nd(3)    3rd(6)
//     *      **        ***
//            *         **
//                      *

// You need to return the nth triangular number.
// You should return 0 for out of range values:

// For example: (Input-- > Output)

// 0 -- > 0
// 2 -- > 3
// 3 -- > 6
// -10 -- > 0


// THIS WORKS BUT TIMES OUT ON LARGE NUMBERS:

// function triangular(n) {

//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum = sum + (i + 1);
//     }

//     return sum;
// }

// NEEDED FORMULA FROM HERE:
// https://en.wikipedia.org/wiki/Triangular_number
// N * ( N + 1 ) / 2

function triangular(n) {

    // if (n > 0) {
    //     return 0
    // } else {
    //     return (n * (n + 1)) / 2
    // }

    return n > 0 ? (n * (n + 1)) / 2 : 0
}

console.log(triangular(2))
// 3
console.log(triangular(4))
// 10
console.log(triangular(1452939480))
// 1055516567721167900


// Solution 1
function triangular(n) {
    return (n > 0) ? ((n * n) + n) / 2 : 0;
}


// Solution 2
var max_n = Math.floor(Math.sqrt(Number.MAX_VALUE));

function triangular(n) {
    if (n < 1 || n >= max_n) return 0;

    return (n * (n + 1)) / 2;
}


// Solution 3
function triangular(n) {
    return n <= 0 ? 0 : (n * (n + 1)) >> 1;
}


// Solution 4
function triangular(n) {
    return n > 0 ? n * (n + 1) / 2 : 0;
}


// Solution 5
function triangular(n) {
    if (n < 1) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return triangular(n - 1) + n;
    }
}


// Solution 6
function triangular(n) {
    return n < 0 ? 0 : n * (n + 1) / 2;
}


// Solution 7
triangular = n => (n > 0) ? ((n * n) + n) / 2 : 0;


// Solution 8
// Return the nth triangular number
function triangular(n) {
    // edge cases: n <= 0 is already covered.

    // number of stars to make triangle, aka the result
    var sumStars = 0;
    // To make the triangle, each row has one less star. The first row has n stars.
    // So start from n, and add n-1, then n-2, then n-3, etc. stars
    // Once we get to 0, we have our triangle
    while (n > 0) {
        sumStars += n;
        n -= 1;
    }
    // The number of stars in traingle is result
    return sumStars;
}


// Solution 9
function triangular(n) {
    if (n <= 0) return 0;
    return triangular(n - 1) + n;
}


// Solution 10
function triangular(n) {

    var result = 0;
    while (n > 0) {
        result += n;
        n--;
    }

    return result;
}


// Solution 11
function triangular(n) {
    return n > 0 ? n * (1 + n) / 2 : 0
}


// Solution 12
let triangular = f = n => n > 0 ? n + f(n - 1) : 0