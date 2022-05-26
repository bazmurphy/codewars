// The 'if' function

// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.
// Example:

// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.


function _if(bool, func1, func2) {
    if(bool) {
        return func1()
    } else {
        return func2()
    }
}

_if(true, function () { console.log("true") }, function () { console.log("false") })
// true
_if(false, function () { console.log("true") }, function () { console.log("false") })
// false


// Solution 1
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}

// Solution 2
const _if = (bool, func1, func2) => bool ? func1() : func2();


// Solution 3
var _if = function IF(condition, isTruthy, isFalsey) {
    (condition ? isTruthy : isFalsey)();
};


// Solution 4
function _if(bool, func1, func2) {
    bool ? func1() : func2()
}


// Solution 5



// Solution 6
function _if(bool, func1, func2) {
    if (bool) { func1(); }
    else { func2(); }
}


// Solution 7
function _if(bool, func1, func2) {
    (bool == true) ? func1() : func2();
}


// Solution 8
const _if = (b, f1, f2) => (b ? f1 : f2)();


// Solution 9
function _if(bool, func1, func2) {

    if (bool == !true || bool == null || bool == undefined || bool == 0 || bool == "" || bool == NaN) {
        console.log("false");
        func2();
    }

    else if (bool == true || bool == "false") {
        console.log("true")
        func1();
    }

    else {
        console.log("false")
        func2();
    }
}


// Solution 10
const _if = (booly, isTruthy, isFalsey) => (booly ? isTruthy : isFalsey)();


// Solution 11
function _if(bool, func1, func2) {
    if (bool) func1.call(this);
    else func2.call(this);
}


// Solution 12
function _if(bool, func1, func2) {
    // return bool ? func1() : func2();
    // return (bool ? func1 : func2)();
    // return [func2, func1][+bool]();
    // return arguments[bool ? 1 : 2]();
    return arguments[~bool + 3]();
}