// Super Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".

function problem(x) {

    // if (typeof x === 'string') {
    //     return 'Error';
    // } else {
    //     return (x * 50) + 6;
    // }

    return typeof x === 'string' ? 'Error' : (x * 50) + 6;

}

console.log(problem("hello"));
// "Error"
console.log(problem(1));
// 56
console.log(problem(5));
// 256
console.log(problem(0));
// 6
console.log(problem(1.2));
// 66
console.log(problem(3));
// 156
console.log(problem("RyanIsCool"));
// "Error"
console.log(problem(-3));
// -144
console.log(problem(""));
// "Error"
console.log(problem(0.03));
// 7.5


// Solution 1
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;


// Solution 2
function problem(x) {
    return typeof x === "number" ? x * 50 + 6 : "Error";
}


// Solution 3
function problem(x) {
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
}


// Solution 4
const problem = x =>
    Number.isFinite(x) ? x * 50 + 6 : `Error`;


// Solution 5
const problem = x => x === +x ? (x * 50) + 6 : 'Error' 


// Solution 6
function problem(x) {
    let sum = x * 50 + 6;
    if (x > 0 || x < 0 || x === 0)
        return sum
    else {
        return "Error"
    }
}


// Solution 7
function problem(x) {
    if (isNaN(x) | x === "") {
        return "Error";
    } else {
        return (x * 50) + 6
    }
}


// Solution 8
function problem(x) {
    return x === +x ? 50 * x + 6 : 'Error'
}


// Solution 9
function problem(x) {
    if (typeof x === 'string' || x instanceof String)
        return "Error";
    else
        return x * 50 + 6;
}


// Solution 10
function problem(x) {
    if (typeof x === 'string') {
        return 'Error';
    }
    //your code here
    return x * 50 + 6;
}


// Solution 11
function problem(x) {
    if (typeof x == typeof 'a') {
        return "Error"
    }
    return x * 50 + 6
}


// Solution 12
problem = x => (typeof x == `number`) ? x * 50 + 6 : `Error`