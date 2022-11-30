// Palindrome chain length

// Number is a palindrome if it is equal to the number with digits in reversed order.
// For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome.
// The special step is: "reverse the digits, and add to the original number".
// If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example

// For example, start with 87:

// 87 + 78 =  165 - step 1, not a palindrome
// 165 + 561 =  726 - step 2, not a palindrome
// 726 + 627 = 1353 - step 3, not a palindrome
// 1353 + 3531 = 4884 - step 4, palindrome!

// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Additional info

// Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

const palindromeChainLength = function (n) {

    function isPalindrome(input) {
        return input.toString() === input.toString().split('').reverse().join('');
    }

    function reverseNumber(input) {
        return Number(input.toString().split('').reverse().join(''));
    }

    let steps = 0;

    while (!isPalindrome(n)) {
        // console.log('n before', n)
        // console.log('reverseNumber n', reverseNumber(n))
        n += reverseNumber(n)
        steps++;
        // console.log('n after', n)
    }

    // console.log('steps', steps)

    return steps;
    
};

console.log(palindromeChainLength(1));
// 0
console.log(palindromeChainLength(88));
// 0
console.log(palindromeChainLength(87));
// 4
console.log(palindromeChainLength(89));
// 24
console.log(palindromeChainLength(10));
// 1


// Solution 1
var palindromeChainLength = function (n) {
    var steps = 0;
    while (!isPalindromic(n)) {
        steps++;
        n += reverseNum(n);
    }
    return steps;
};

function isPalindromic(n) {
    if (n < 0) throw 'isPalindromic only works for positive numbers.';
    if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
    if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
    return reverseNum(n) === n;
}

function reverseNum(n) {
    var r = 0;
    while (n) {
        r *= 10;
        r += n % 10;
        n = Math.floor(n / 10);
    }
    return r;
}


// Solution 2
var palindromeChainLength = function (n) {
    var x = parseInt(("" + n).split('').reverse().join(''));
    if (n != x) {
        return 1 + palindromeChainLength(n + x);
    }
    return 0;
};


// Solution 3
var palindromeChainLength = function (n) {
    var r = 1 * n.toString().split('').reverse().join('');
    return n - r && 1 + palindromeChainLength(r + n);
};


// Solution 4
function palindromeChainLength(n) {
    var count = 0, rev = 0;
    while (n != (rev = parseInt(n.toString().split('').reverse().join('')))) {
        n += rev;
        count++;
    }
    return count;
};


// Solution 5
var palindromeChainLength = function (n) {

    var reverseDigit = function (d) {
        return +d.toString().split('').reverse().join('');
    }

    var attempts = 0,
        result = 0;

    while (n != reverseDigit(n)) {
        attempts += 1;
        n += reverseDigit(n);
    }

    return attempts;

};


// Solution 6
function palindromeChainLength(num, count = 0) {
    const checker = x => x === +[...[] + x].reverse().join('')
    const folder = x => x + (+[...[] + x].reverse().join(''))

    while (!checker(num)) {
        num = folder(num)
        count++
    }
    return count
};


// Solution 7
function palindromeChainLength(arg) {
    if (arg === 87) { return 4 }
    if (arg === 1) { return 0 }
    if (arg === 88) { return 0 }
    if (arg === 89) { return 24 }
    if (arg === 10) { return 1 }

}


// Solution 8
var palindromeChainLength = function (n) {
    var ns = '' + n, nrs = ns.split('').reverse().join('')
    return ns == nrs ? 0 : 1 + palindromeChainLength(n + +nrs)
}


// Solution 9
var palindromeChainLength = n => {

    let reverNum = n => Array.from(n.toString()).reverse().join('')
    let isPalindrome = n => reverNum(n) === n.toString()

    let steps = 0
    while (!isPalindrome(n)) {
        steps++
        n += parseInt(reverNum(n))
    }

    return steps
}


// Solution 10
const palindromeChainLength = n =>
  (rev => n === rev ? 0 : 1 + palindromeChainLength(n + rev))
  (+[...`${n}`].reverse().join(``));


// Solution 11
let getReverse = (n) => {
    return Number(n.toString().split('').reverse().join(''));
};

let palindromeChainLength = function (n) {
    let count = 0;
    let tmp = n;
    while (tmp !== getReverse(tmp)) {
        tmp = tmp + getReverse(tmp);
        count += 1;
    }
    return count;
};


// Solution 12
var palindromeChainLength = function (n) {
    if (palindrome(n) === n)
        return 0;
    else
        return 1 + palindromeChainLength(n + palindrome(n));
};

function palindrome(x) {
    return Number(x.toString().split("").reverse().join(""));
}