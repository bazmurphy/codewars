// Function 2 - squaring an argument

// Now you have to write a function that takes an argument and returns the square of it.

function square(n) {
    return Math.pow(n, 2);
}

console.log(square(3));
// 9


// Solution 1
var square = function (a) {
    return a * a;
}


// Solution 2
const square = (n) => n * n;


// Solution 3
function square(x) {
    return x ** 2;
}


// Solution 4
const square = a => a * a;


// Solution 5
function square(num) {
    var num = Math.pow(num, 2);
    return num;
};


// Solution 6
function square(num) {
    return num * num;
}


// Solution 7
square = function (num) {
    return num * num;
}


// Solution 8
const square = x => x ** 2;


// Solution 9
const square = (x) => {
    return Math.sqrt(x ** 4);
}


// Solution 10
function square(operand) {
    return operand * operand;
}


// Solution 11
function square(n) {
    if (typeof n === 'number') {
        return n * n;
    } else {
        return 'undefined';
    }
}


// Solution 12
const square = function (number) {
    return Math.pow(number, 2)
}