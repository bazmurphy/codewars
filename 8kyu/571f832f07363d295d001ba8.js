// Training JS #6: Basic data types--Boolean and conditional statements if..else

// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^

// Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

// var arr=[];
// ...
// ...
// ......
// if (arr.length) return "arr has elements";
// else            return "arr is empty";

// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

// These values are converted to false in the conditional statement:

// 0, -0, "", null, undefined, NaN

// Task

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


function trueOrFalse(val) {
    if (val) return 'true';
    else return 'false';
}

console.log(trueOrFalse(a > b));
// "false"
console.log(trueOrFalse(a === b));
// "false"
console.log(trueOrFalse(a < b));
// "true"
console.log(trueOrFalse(a !== b));
// "true"
console.log(trueOrFalse(b > c));
// "true"
console.log(trueOrFalse(b === c));
// "false"
console.log(trueOrFalse(b < c));
// "false"
console.log(trueOrFalse(b !== c));
// "true"
console.log(trueOrFalse(a === c));
// "true"
console.log(trueOrFalse(a !== c));
// "false"

//test for logical operators and bitwise operators
var t = true, f = false;
console.log(trueOrFalse(t && f));
// "false");
console.log(trueOrFalse(f && f));
// "false");
console.log(trueOrFalse(t && t));
// "true");
console.log(trueOrFalse(t || f));
// "true");
console.log(trueOrFalse(t || t));
// "true");
console.log(trueOrFalse(f || f));
// "false");
console.log(trueOrFalse(t & f));
// "false");
console.log(trueOrFalse(t & t));
// "true");
console.log(trueOrFalse(f & f));
// "false");
console.log(trueOrFalse(t | f));
// "true");
console.log(trueOrFalse(t | t));
// "true");
console.log(trueOrFalse(f | f));
// "false");
console.log(trueOrFalse(!t));
// "false");
console.log(trueOrFalse(!f));
// "true");
console.log(trueOrFalse(t ^ f));
// "true");
console.log(trueOrFalse(t ^ t));
// "false");
console.log(trueOrFalse(f ^ f));
// "false");

//test for implicit conversion 
console.log(trueOrFalse(true));
// "true"
console.log(trueOrFalse(123));
// "true"
console.log(trueOrFalse("123"));
// "true"
console.log(trueOrFalse(["123"]));
// "true"
console.log(trueOrFalse("false"));
// "true"
console.log(trueOrFalse(false));
// "false"
console.log(trueOrFalse(0));
// "false"
console.log(trueOrFalse(""));
// "false"
console.log(trueOrFalse(null));
// "false"
console.log(trueOrFalse([].length));
// "false"
console.log(trueOrFalse(undefined));
// "false"


// Solution 1
function trueOrFalse(val) {
    return Boolean(val).toString();
}


// Solution 2
function trueOrFalse(val) {
    return val ? true : false;
}


// Solution 3
function trueOrFalse(val) {
    return !val ? 'false' : 'true'
}


// Solution 4
function trueOrFalse(val) {
    if (val === false || val === 0 || val === -0 || val === ""
        || val === null || val === undefined || val === NaN) {
        return false;
    }
    else {
        return true;
    }
}


// Solution 5
function trueOrFalse(val) {
    if (val) return true;
    return false;
}


// Solution 6
const trueOrFalse = Boolean;


// Solution 7
function trueOrFalse(val) {
    if (val == false) {
        return ("false");
    } else if (val == undefined) {
        return ("false");
    } else if (val == null) {
        return ("false");
    } else {
        return ("true");
    }
}


// Solution 8
trueOrFalse = val => val ? 'true' : 'false';


// Solution 9
const trueOrFalse = val => !!val;


// Solution 10
trueOrFalse = val => {
    if (val) return 'true';
    return 'false';
}


// Solution 11
trueOrFalse = val => val ? "true" : "false";


// Solution 12
function trueOrFalse(val) {
    return Boolean(val);
}