// No oddities here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers.Return the good values in the order they are given.


function noOdds(values) {
    return values.filter( element => element % 2 === 0)
}

console.log(noOdds([0, 1]))
// [0]
console.log(noOdds([0, 1, 2, 3]))
// [0, 2]


// Solution 1
function noOdds(values) {
    function isEven(number) {
        return number % 2 == 0;
    }

    return values.filter(isEven);
}


// Solution 2
var noOdds = values => values.filter(x => x % 2 === 0);


// Solution 3
var noOdds = values => values.filter(x => !(x % 2));


// Solution 4
function noOdds(values) {
    return values.filter(function (data) {
        return data % 2 === 0
    });
}


// Solution 5
function noOdds(values) {
    var goodies = [];
    for (var i = 0; i < values.length; i++) {
        if (values[i] % 2 == 0) {
            goodies.push(values[i]);
        }
    }

    return goodies;
}


// Solution 6
function noOdds(values) {
    return values.filter(x => !(x % 2));
}


// Solution 7
function noOdds(values) {
    return values.filter(x => x % 2 == 0)
}


// Solution 8
const noOdds = values =>
    values.filter(val => !(val & 1));


// Solution 9
function noOdds(values) {
    return values.filter(function (n) {
        return (n & 1) == 0;
    });
}


// Solution 10
const noOdds = function (values) { return values.filter(el => el % 2 === 0) }