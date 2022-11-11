// JavaScript Array Filter

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2, 4, 5, 6]) // should == [2,4,6]


function getEvenNumbers(numbersArray) {
    return numbersArray.filter(element => element % 2 === 0);
}


console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
// [2, 6, 8, 10]
console.log(getEvenNumbers([1, 2]));
// [2]
console.log(getEvenNumbers([12, 14, 15]));
// [12, 14]
console.log(getEvenNumbers([13, 15]));
// []
console.log(getEvenNumbers([1, 3, 9]));
// []


// Solution 1
const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);


// Solution 2
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(function (num) { return !(num % 2) })  // 0 is falsy
}


// Solution 3
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(function (n) {
        return n % 2 == 0;
    });
}


// Solution 4
function isEven(num) {
    return num % 2 == 0
}

function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    var filtered = numbersArray.filter(isEven);
    return filtered;
}


// Solution 5
const getEvenNumbers = arr =>
    arr.filter(x => !(x & 1));


// Solution 6
const getEvenNumbers = numbersArray => numbersArray.filter(a => a % 2 === 0);


// Solution 7
function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    var evenNums = numbersArray.filter(function (num) {
        return (num % 2) === 0;
    });

    return evenNums;
}


// Solution 8
function getEvenNumbers(num) {
    return num.filter(el => el % 2 == 0);
}


// Solution 9
const getEvenNumbers = numbersArray => numbersArray.filter(el => !(el % 2));


// Solution 10
function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    return numbersArray.filter(function (l) { return l % 2 == 0 });
}


// Solution 11
const getEvenNumbers = (numbersArray) => numbersArray.filter(el => el % 2 === 0)


// Solution 12
const getEvenNumbers = numbersArray =>
    numbersArray.filter(val => !(val & 1));