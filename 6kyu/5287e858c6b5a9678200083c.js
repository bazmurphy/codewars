// Does my number look big in this ?

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
// In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 
// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


function narcissistic(value) {

    let sum = 0;
    let arr = [];

    for (let num of String(value)) {
        // console.log(num)
        arr.push(Number(num))
    }

    // console.log(arr)

    for (let element of arr) {
        // console.log(element)
        sum += Math.pow(element, arr.length);
        // console.log(sum)
    }

    // console.log('sum', sum, 'value', value)
    return sum === value;

}

console.log(narcissistic(7));
// true, "7 is narcissistic");
console.log(narcissistic(371));
// true, "371 is narcissistic");


// Solution 1
function narcissistic(value) {
    return ('' + value).split('').reduce(function (p, c) {
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}


// Solution 2
function narcissistic(value) {
    return value.toString()
        .split('')
        .map((x, i, arr) => x ** arr.length)
        .reduce((a, b) => +a + +b)
        === value
}


// Solution 3
function narcissistic(value) {
    var remaining = value,
        digits = [],
        solution = 0;
    while (remaining > 0) {
        digits.push(remaining % 10);
        remaining = Math.floor(remaining / 10);
    }

    return value == digits.reduce(function (p, n) {
        return p + Math.pow(n, digits.length);
    }, 0);
}


// Solution 4
function narcissistic(value) {
    // Code me
    var nbDigit = value.toString().length;
    var stringNb = value.toString();
    var num = 0;

    for (var i = 0; i < nbDigit; ++i)
        num += Math.pow(parseInt(stringNb.charAt(i)), nbDigit);

    return num === value;

}


// Solution 5
narcissistic = num => num.toString().split("").reduce(function (prev, el) { return prev + Math.pow(el, String(num).length) }, 0) == num;



// Solution 6
function narcissistic(number) {
    var arrayOfDigitals = number.toString().split(''),
        numberLength = arrayOfDigitals.length,
        sum = 0;

    arrayOfDigitals.forEach(function (digit) {
        sum += Math.pow(digit, numberLength);
    });

    return sum === number;
}


// Solution 7
const narcissistic = value => +('' + value).split('').reduce((s, n, _, a) => s + Math.pow(n, a.length), 0) == value



// Solution 8
function narcissistic(value) {
    var str = value.toString();
    var sum = 0;
    for (var it = 0; it < str.length; ++it) {
        sum += Math.pow(parseInt(str[it]), str.length);
    }
    if (sum == value) {
        return true;
    }
    else {
        return false;
    }
}


// Solution 9
function narcissistic(value) {

    let array = value.toString().split("") // ['7'],['3','7','1']

    let arrayLength = array.length // 1, 3

    let result = array.reduce((sum, currentValue) => { // 7, 33431
        return sum += currentValue ** arrayLength
    }, 0)


    return result === value

}


// Solution 10
var narcissistic = (value) => {
    var values = (value + '').split('');
    return values.length === 1 || values.map(c => Math.pow(parseInt(c), values.length)).reduce((p, c) => p + c) === value;
}


// Solution 11
narcissistic = v => [...s = v + ''].reduce((p, c) => p + c ** s.length, 0) == v;


// Solution 12
function narcissistic(value) {
    var power = ('' + value).length;
    return [...('' + value)].reduce((a, b) => a + Math.pow(b, power), 0) === value;
}