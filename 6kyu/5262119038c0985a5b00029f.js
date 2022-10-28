// Is a number prime ?

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements

// Example

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(0));
// false, "0 is not prime"
console.log(isPrime(1));
// false, "1 is not prime"
console.log(isPrime(2));
// true, "2 is prime"
console.log(isPrime(73));
// true, "73 is prime"
console.log(isPrime(75));
// false, "75 is not prime"
console.log(isPrime(-1));
// false, "-1 is not prime"
console.log(isPrime(3));
// true, "3 is prime"
console.log(isPrime(5));
// true, "5 is prime"
console.log(isPrime(7));
// true, "7 is prime"
console.log(isPrime(41));
// true, "41 is prime"
console.log(isPrime(5099));
// true, "5099 is prime"
console.log(isPrime(4));
// false, "4 is not prime"
console.log(isPrime(6));
// false, "6 is not prime"
console.log(isPrime(8));
// false, "8 is not prime"
console.log(isPrime(9));
// false, "9 is not prime"
console.log(isPrime(45));
// false, "45 is not prime"
console.log(isPrime(-5));
// false, "-5 is not prime"
console.log(isPrime(-8));
// false, "-8 is not prime"
console.log(isPrime(-41));
// false, "-41 is not prime"


// Solution 1
function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// Solution 2
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1
}


// Solution 3
function isPrime(n) {
    if (n <= 1)
        return false;
    if (n <= 3 || n == 5 || n == 7 || n == 11)
        return true;
    if (n % 2 === 0 || n % 3 === 0)
        return false;
    for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
    return true;
}


// Solution 5
const isPrime = num => {
    for (let i = 2; i <= num ** .5; i++) {
        if (!(num % i)) return false;
    }
    return num > 1;
}


// Solution 6
function isPrime(num) {
    if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false;
    if (num % 2 == 0) return (num == 2);
    if (num % 3 == 0) return (num == 3);

    let sqrt = Math.sqrt(num);

    for (let i = 5; i <= sqrt; i += 6) {
        if (num % i == 0) return false;
        if (num % (i + 2) == 0) return false;
    }

    return true;
}


// Solution 7
function isPrime(num) {
    let even = 2;
    while ((even * even <= num) && (num % even != 0)) {
        even++;
    }
    return even * even > num && num > 1
}


// Solution 8
function isPrime(num) {
    if (num < 2)
        return false;
    else if (num <= 3)
        return true;
    else if (num % 2 == 0 || num % 3 == 0)
        return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0)
            return false
    }
    return true;
}


// Solution 9
const isPrime = (a, b = 2) => {
    while (b * b <= a) {
        if (a % b) ++b;
        else return !1
    }
    return a > 1
}


// Solution 10
function isPrime(num) {
    if (num <= 1) return false;//by definition
    for (i = 2; i < Math.floor(num / 2 + 1); i++) { //No point in checking integers above 1/2 the input.
        if (num % i === 0) return false;
    }
    return true;
}


// Solution 11
function isPrime(num) {
    return num > 1 && [2, 3, 5, 7].every(i => num === i || num % i);
}


// Solution 12
function isPrime(num) {
    if (num <= 1) return false;
    for (let x = 2; x <= Math.sqrt(num); x += 1) {
        if (num % x === 0) return false;
    }
    return true;
}