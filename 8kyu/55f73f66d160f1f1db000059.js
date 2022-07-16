// Grasshopper - Combine strings

// Combine strings function

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')

// returns:

// 'James Stevens'

// function combineNames(first, last) {
//     return `${first} ${last}`
// }

const combineNames = (first, last) => `${first} ${last}`;


console.log(combineNames('James', 'Stevens'))
// 'James Stevens'


// Solution 1
const combineNames = (...names) => names.join(' ');


// Solution 2
function combineNames(firstName, lastName) {
    if (typeof firstName === 'string' && typeof lastName === 'string') {
        if (firstName !== '' && lastName !== '') {
            return firstName + ' ' + lastName;
        }
        else {
            return 'Sorry firstname or lastname cannot be blank'
        }
    }

    else {
        return 'firstName and lastName must be a string';
    }

}


// Solution 3
const combineNames = (a, b) => `${a} ${b}`;


// Solution 4
var combineNames = function (first, last) {
    return first + ' ' + last;
};


// Solution 5
function combineNames(first, last) {
    return first + " " + last;
}


// Solution 6
const combineNames = (first, last) => `${first} ${last}`;


// Solution 7
const combineNames = (f, l) => `${f} ${l}`;


// Solution 8
function combineNames() {
    return Array.prototype.join.call(arguments, " ")
}


// Solution 9
combineNames = (a, b) => {
    return a + " " + b;
}


// Solution 10
combineNames = (a, b) => `${a} ${b}`;


// Solution 11
function combineNames(n1, n2) {
    return `${n1} ${n2}`;
}


// Solution 12
const combineNames = (...ns) => ns.join(' ');