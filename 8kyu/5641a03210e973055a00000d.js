// Formatting decimal places #0

// Each number should be formatted that it is rounded to two decimal places.You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

function twoDecimalPlaces(n) {
    return Number(n.toFixed(2))
}

console.log(twoDecimalPlaces(4.659725356));
// 4.66, "didn't work for 4.659725356"
console.log(twoDecimalPlaces(173735326.3783732637948948));
// 173735326.38, "didn't work for 173735326.3783732637948948"
console.log(twoDecimalPlaces(4.653725356));
// 4.65, "didn't work for 4.653725356"


// Solution 1
const twoDecimalPlaces = n => Number(n.toFixed(2))


// Solution 2
function twoDecimalPlaces(n) {
    return Math.round(n * 100) / 100;
}


// Solution 3
const twoDecimalPlaces = n => +n.toFixed(2)


// Solution 4
function twoDecimalPlaces(n) {
    return +n.toFixed(2);
}


// Solution 5
const twoDecimalPlaces = (n) => Math.round(n * 100) / 100;


// Solution 6
function twoDecimalPlaces(n) {
    return parseFloat(n.toFixed(2));
}


// Solution 7
const twoDecimalPlaces = n =>
    Math.round(n * 10 ** 2) / 10 ** 2;


// Solution 8
function twoDecimalPlaces(n) {
    return Math.floor(n * 100 + 0.5) / 100;
}


// Solution 9
const twoDecimalPlaces = n => +n.toFixed(2)


// Solution 10
function twoDecimalPlaces(n) {
    return GetRound(n, 2);
}
function GetRound(num, len) {
    return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
}


// Solution 13
function twoDecimalPlaces(n) {
    return Math.round(parseFloat(n) * 100) / 100;

}