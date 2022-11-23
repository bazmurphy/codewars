// Functional Addition

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6


function add(n) {
    return function(x) {
        return n + x;
    }
}

const add = (n) => x => n + x;

// CURRYING
// https://www.youtube.com/watch?v=iZLP4qOwY8I

console.log(add(1)(3))
// 4


// Solution 1
function add(n) {
    return function (m) {
        return n + m;
    }
}


// Solution 2
var add = a => n => n + a


// Solution 3
const add = n => x => x + n;


// Solution 4
add = n => m => n + m;


// Solution 5
const add = x => y => x + y;


// Solution 6
function add(n) {
    return function (x) { 
        return x + n 
    };
}


// Solution 7
var add = $ => function (n) { return $ + n }


// Solution 8
const add = n => (num) => n + num


// Solution 9
const add = n => a => n + a;


// Solution 10
function add(insideNumber) {
    return function (outsideNumber) {
        return insideNumber + outsideNumber
    }
}


// Solution 11
function add(n) {
    function addNumber(y) {
        return n + y;
    }
    return addNumber;
}


// Solution 12
const add = x => y => x + y