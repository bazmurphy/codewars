// Type of sum

// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
    return typeof (a + b)
}

console.log(typeOfSum(12, 1));
// 'number'
console.log(typeOfSum('d', 1));
// 'string'
console.log(typeOfSum(1, 'a'));
// 'string'
console.log(typeOfSum('dd', ''));
// 'string'
console.log(typeOfSum(true, 1));
// 'number'
console.log(typeOfSum('s', false));
// 'string'
console.log(typeOfSum(null, 1));
// 'number'
console.log(typeOfSum('s', null));
// 'string'
console.log(typeOfSum(null, undefined));
// 'number'
console.log(typeOfSum(undefined, 're'));
// 'string'
console.log(typeOfSum(undefined, true));
// 'number'
console.log(typeOfSum(null, false));
// 'number'


// Solution 1
const typeOfSum = (a, b) => typeof (a + b);


// Solution 2
function typeOfSum(a, b) {
    return typeof (a + b);
}


// Solution 3
typeOfSum = (a, b) => typeof (a + b);


// Solution 4
function typeOfSum(a, b) {
 
    if (typeof a == 'number' && typeof b == 'number') {
        return 'number';
    }
    if (typeof a == 'string' && typeof b == 'number') {
        return 'string';
    }
    if (typeof a == 'number' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'boolean' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'boolean' && typeof b == 'number') {
        return 'number';
    }
    if (typeof a == 'string' && typeof b == 'boolean') {
        return 'string';
    }
    if (a == null && typeof b == 'number') {
        return 'number';
    }
    if (typeof a == 'string' && b == null) {
        return 'string';
    }
    if (a == null && typeof b == typeof s) {
        return 'number';
    }
    if (typeof a == 'number' && b == typeof s) {
        return 'number';
    }
    if (typeof a == typeof s && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == typeof s && typeof b == 'boolean') {
        return 'number';
    }
    if (a == null && typeof b == 'boolean') {
        return 'number';
    }
    if (typeof a == 'boolean' && typeof b == 'boolean') {
        return 'number';
    }
    if (typeof a == 'boolean' && typeof b == 'string') {
        return 'string';
    }
    if (typeof a == 'boolean' && b == null) {
        return 'number';
    }
    if (typeof a == 'boolean' && typeof b == 'number') {
        return 'number';
    }
    if (a == null && b == null) {
        return 'number';
    }
    if (typeof a == 'number' && typeof b == 'boolean') {
        return 'number';
    }
    if (typeof a == 'number' && b == null) {
        return 'number';
    }
    if (typeof a == 'number' && b == typeof s) {
        return 'number';
    }
    if (a == null && typeof b == 'string') {
        return 'string';
    }
    if (a == typeof s && b == null) {
        return 'number';
    }
}


// Solution 5
function typeOfSum(a, b) {
    if (typeof a === 'string' || a instanceof String) { return 'string' }
    if (typeof b === 'string' || b instanceof String) { return 'string' }
    return 'number'
}


// Solution 6
function typeOfSum(a, b) {
    let res = a + b;
    return typeof res;
}


// Solution 7
let typeOfSum = (_, o) => typeof (_ + o)


// Solution 8
function typeOfSum(a, b) {
    return typeof a != 'string' && typeof b != 'string' ? 'number' : 'string';
}


// Solution 9
var typeOfSum = (a, b) => typeof (a + b);


// Solution 10
function typeOfSum(a, b) {
    var sum = a + b;
    return typeof (sum);
}


// Solution 11
function typeOfSum(a, b) {
    if (typeof (a) === 'string' || typeof (b) === 'string') return 'string';
    if (typeof (a) === 'number' || typeof (b) === 'number') return 'number';
    if (typeof (a) === 'boolean' || typeof (b) === 'boolean') return 'number';
    if (typeof (a) === 'undefined' || typeof (b) === 'undefined') return 'number';
    if (typeof (a) === 'object' && typeof (b) === 'object') return 'number';
}


// Solution 12
function typeOfSum(a, b) {
    return Object.prototype.toString.call(a + b) == '[object Number]' ? 'number' : 'string'
}