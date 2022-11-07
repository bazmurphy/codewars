// Round up to the next multiple of 5

// Description:

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.




function roundToNext5(n) {
    while (n % 5 !== 0) {
        n++;
    }
    return n;
}

console.log(roundToNext5(0));
// 0
console.log(roundToNext5(2));
// 5
console.log(roundToNext5(3));
// 5
console.log(roundToNext5(12));
// 15
console.log(roundToNext5(21));
// 25
console.log(roundToNext5(30));
// 30
console.log(roundToNext5(-2));
// 0
console.log(roundToNext5(-5));
// -5


// Solution 1
function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}


// Solution 2
function roundToNext5(n) {
    while (n % 5 !== 0) n++;
    return n;
}


// Solution 3
const roundToNext5 = n => Math.ceil(n / 5) * 5;


// Solution 4
function roundToNext5(n) {
    if (n % 5 === 0) {
        return n;
    }
    return roundToNext5(n + 1);
}


// Solution 5
function roundToNext5(n) {
    while (n % 5) n++;
    return n;
}


// Solution 6
function roundToNext5(n) {
    // How much there is until the next multiple of 5
    const nToCeil5 = 5 - n % 5;
    // How much there is until the prev multiple of 5
    const nToFloor5 = n % 5;

    // If the number is already multiple of 5 just return it
    if (nToCeil5 == 5) return n;

    // For positive numbers just ceil it
    if (n > 0) return n + nToCeil5;

    // For negative numbers just floor it
    return n - nToFloor5;

}


// Solution 7
function roundToNext5(n) {
    if (n % 5 == 0) return n
    n++
    return roundToNext5(n)
}


// Solution 8
roundToNext5 = a => Math.ceil(a / 5) * 5


// Solution 9
function roundToNext5(n) {
    return n % 5 === 0 ? n : (n < 0 ? n - (n % 5) : n - (n % 5) + 5);
}


// Solution 10
roundToNext5 = n => n % 5 !== 0 ? roundToNext5(n + 1) : n


// Solution 11
/*
Notes:
- input is an integer
- output is an integer remainder % 5 == 0 and is more or equal to current number

Examples:
roundToNext5(0); // 0
roundToNext5(13); // 15 == 13 % 5 = 3 => number + 5 - remainder

Algorightm: 
- if absolute number % 5 === 0 => return a number
- if absolute number % 5 !== 0
  - get a remainder 
  - return number + 5 - remainder
  
*/

function roundToNext5(n) {
    if (Math.abs(n) % 5 === 0) return n;
    else {
        let remainder = n % 5;
        if (n < 0) {
            return n - remainder;
        }
        return n + 5 - remainder;
    }
}


// Solution 12
function roundToNext5(n) {
    if (n == 0 || (n % 5 == 0)) {
        return n;
    };

    do {
        n++
    } while (n % 5 != 0)

    return n
}