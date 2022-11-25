// Factorial

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(0));
// 1
console.log(factorial(1));
// 1
console.log(factorial(4));
// 24
console.log(factorial(7));
// 5040
console.log(factorial(17));
// 355687428096000


// Solution 1
const factorial = n => n ? factorial(n - 1) * n : 1;


// Solution 2
function factorial(n) {
    let answer = 1;

    while (n > 0) {
        answer *= n;
        n--;
    }

    return answer;
}


// Solution 3
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}


// Solution 4
const factorial = n => n ? n * factorial(n - 1) : 1;


// Solution 5
function factorial(n) {
    if (n === 0) return 1
    return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1)
}


// Solution 6
const factorial = n => n > 1 ? n * factorial(n - 1) : 1


// Solution 7
function factorial(n) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;

}


// Solution 8
function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}


// Solution 9
function factorial(n) {
    for (var acc = 1; n > 0; acc *= n, n--);
    return acc
}


// Solution 10
factorial = n => Array.from(Array(n), (_, i) => i + 1).reduce((a, b) => a * b, 1)


// Solution 11
function factorial(n) {
    const arr = []

    if (n === 0) {
        return 1
    }

    while (n >= 1) {
        arr.push(n)
        n--
    }

    return arr.reduce((a, b) => a * b)
}


// Solution 12
function factorial(n) {
    var output = [1];
    for (var i = 2; i <= n; ++i) {
        var carry = 0;
        for (var j = 0; j < output.length || carry !== 0; ++j) { //Loop through all entries in digit array or if carry is not 0 to add more digits to the length
            carry += (output[j] || 0) * i; //Multiply each digit in the array by i and add to the carry (this may include carry from previous digits)
            output[j] = carry % 10; //Set the units in the array with the result
            carry = Math.floor(carry / 10); //carry the rest to the next entry
        }
    }
    return parseInt(output.reverse().join(""));
}