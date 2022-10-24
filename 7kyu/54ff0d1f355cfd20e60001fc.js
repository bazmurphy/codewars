// Factorial

// In mathematics, the factorial of a non - negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input.If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException(Java) or RangeException(PHP) or throw a RangeError(JavaScript) or ValueError(Python) or return -1(C).

// More details about factorial can be found here.

function factorial(n) {
    
    if (n < 0 || n > 12) {
        throw new RangeError
    } else {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1)
        }
    }

}

console.log(factorial(0));
// 1
console.log(factorial(1));
// 1
console.log(factorial(2));
// 2
console.log(factorial(3));
// 6


// Solution 1
function factorial(n) {
    if (n < 0 || n > 12)
        throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}


// Solution 3
function factorial(n) {

    if (n < 0 || n > 12) {
        throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
    }
    return n < 2 ? 1 : n * factorial(n - 1);
}


// Solution 4
function factorial(n) {
    if (n < 0 || n > 12)
        throw RangeError();
    var f = 1;
    while (n > 1)
        f *= n--;
    return f;
}


// Solution 5
factorial = n => {
    if (n < 0 || n > 12) throw RangeError;
    return n > 1 ? n * factorial(n - 1) : 1;
}


// Solution 6
function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError('Ошибка');
    return n ? n * factorial(n - 1) : 1;
}


// Solution 7
function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError("The argument must be between 1 and 12.")
    }

    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// Solution 8
function factorial(n) {
    // Calculate the factorial here
    try {
        if (n < 0) throw new RangeError();
    } catch (e) {
        console.log('Out of range!');
    }
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


// Solution 9
function factorial(n) {
    let fact = 1;
    if (n == 0) {
        return 1;
    } else if (n > 12 || n < 0) {
        throw "RangeError";
    } else {
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
    }
    return fact;
}


// Solution 11
const factorial = n =>
    n < 0 || n > 12 ? (() => { throw new RangeError() })() : n < 2 ? 1 : n * factorial(n - 1);


// Solution 12
function factorial(n) {
    var result = 1;
    if (n < 0 || n > 12) {
        throw ValueError();
    } else {
        for (i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}