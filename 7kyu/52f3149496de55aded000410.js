// Summing a number's digits

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input-- > Output)

// 10 -- > 1
// 99 -- > 18
// -32 -- > 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {

    number = number.toString()
    
    let arr = [];
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] === "-") {
            continue;
        } else {
            arr.push(Number(number[i]))
        }
    }

    // console.log(arr)

    return arr.reduce((pV, cV) => pV + cV);
}

console.log(sumDigits(10))
// 1
console.log(sumDigits(99))
// 18
console.log(sumDigits(-32))
// 5


// Solution 1
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}


// Solution 2
function sumDigits(number) {
    var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while (number != 0) {
        sum += number % 10
        number = Math.floor(number / 10)
    }
    return sum
}


// Solution 3
function sumDigits(number) {
    // Turn number into absolute value -> Stringify number -> Split at each character
    var values = String(Math.abs(number)).split("");
    // Instantiate variable to hold math result
    var product = null;
    // For each value, add the value to the product
    for (var i = 0; i < values.length; i++) {
        product = product + Number(values[i]);
    }
    // Return the product variable
    return product;
}


// Solution 4
sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);


// Solution 5
const sumDigits = number => String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);


// Solution 6
const sumDigits = number =>
    [...`${Math.abs(number)}`].reduce((pre, val) => pre + +val, 0);


// Solution 7
function sumDigits(number) {
    var str_num = "" + number;

    var result = 0;
    str_num.split('').forEach(function (el) {
        var digit = parseInt(el);
        if (isNaN(digit)) {
            return;
        }

        result += digit;
    });

    return result;
}


// Solution 8
function sumDigits(number) {
    return number.toString().split("").reduce(function (sum, n) {
        return n === '-' ? sum : sum + parseInt(n);
    }, 0);
}


// Solution 9
function sumDigits(n) {
    return n ? Math.abs(n % 10) + Math.abs(sumDigits(~~(n / 10))) : 0;
}


// Solution 10
function sumDigits(number) {
    number = Math.abs(number);
    var str = "" + number;
    str = str.split("");
    var chisla = str.map(function (sym) {
        return parseInt(sym, 10);
    })
    var sum = 0;
    chisla.forEach(function (elem) {
        sum = sum + elem;
    })
    return sum;
}


// Solution 11
function sumDigits(number) { return number == 0 ? 0 : (number < 0 ? -number : number).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b)) }


// Solution 12
const sumDigits = n => [...Math.abs(n) + ''].reduce((s, v) => s + (+v), 0)