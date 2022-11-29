// Leap Years

// In this kata you should simply determine, whether a given year is a leap year or not. 
// In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years

// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them

// Examples can be found in the test fixture.

function isLeapYear(year) {

    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isLeapYear(1234));
// false
console.log(isLeapYear(1984));
// true
console.log(isLeapYear(2000));
// true
console.log(isLeapYear(2010));
// false
console.log(isLeapYear(2013));
// false


// Solution 1
function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}


// Solution 2
function isLeapYear(year) {
    if (0 == year % 400) return true;
    if (0 == year % 100) return false;
    if (0 == year % 4) return true;
    return false;
}


// Solution 3
const moment = require('moment');

function isLeapYear(year) {
    return moment([year]).isLeapYear()
}


// Solution 4
function isLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}


// Solution 5
isLeapYear = y => y % 4 ? false : y % 100 ? true : y % 400 ? false : true


// Solution 6
var isLeapYear = y => !((y % 400) * (!(y % 100)) + y % 4);


// Solution 7
function isLeapYear(y) {
    return !((y % 400) && ((y % 4) || !(y % 100)))
}


// Solution 8
function isLeapYear(year) {
    return (year % 100 == 0) ? year % 400 == 0 : year % 4 == 0;
}


// Solution 9
const isLeapYear = year =>
    !(year % 400) || !(year % 4) && !!(year % 100);


// Solution 10
const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0



// Solution 11
const isLeapYear = year => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0


// Solution 12
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}