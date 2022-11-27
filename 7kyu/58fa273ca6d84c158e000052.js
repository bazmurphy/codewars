// Number of Decimal Digits

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.


function digits(n) {
    return n.toString().length;
}

console.log(digits(5));
// 1
console.log(digits(12345));
// 5
console.log(digits(9876543210));
// 10


// Solution 1
function digits(n) {
    return n.toString().length;
}


// Solution 2
function digits(n) {
    return String(n).length
}


// Solution 3
function digits(n) {
    return `${n}`.length;
}


// Solution 4
function digits(n) {
    // code goes here
    var count = 0;
    if (n >= 0) count = 1;

    while (n / 10 >= 1) {

        n /= 10;
        count++;
    }

    return count;
}


// Solution 5
function digits(n) {
    
    var count = 0;
    if (n >= 0) count = 1;

    while (n / 10 >= 1) {

        n /= 10;
        count++;
    }

    return count;
}


// Solution 6
const digits = n => n.toString().length;


// Solution 7
const digits = (n) => ('' + n + '').length


// Solution 8
let digits = n => (n + "").length;


// Solution 9
const digits = function (n) { return String(n).length }


// Solution 10
const digits = (it_is_really_big_number) => {
    return (it_is_really_big_number + []).length
}


// Solution 11
const digits = n => n < 10 ? 1 : digits(n / 10) + 1;


// Solution 12
function digits(n) {
    return ('' + n).length
}