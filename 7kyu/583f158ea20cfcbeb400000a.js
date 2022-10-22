// Make a function that does arithmetic!

// Given two numbers and an arithmetic operator(the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples: (Input1, Input2, Input3-- > Output)

// 5, 2, "add"      -- > 7
// 5, 2, "subtract" -- > 3
// 5, 2, "multiply" -- > 10
// 5, 2, "divide"   -- > 2.5

// Try to do it without using if statements!

function arithmetic(a, b, operator) {

    switch (operator) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return a / b;
            break;
    }

}

console.log(arithmetic(1, 2, "add"))
// 3
console.log(arithmetic(8, 2, "subtract"))
// 6
console.log(arithmetic(5, 2, "multiply"))
// 10
console.log(arithmetic(8, 2, "divide"))
// 4


// Solution 1
function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
    }
}


// Solution 2
const arithmetic = (a, b, operator) => ({
    'add': a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide': a / b
}[operator]);


// Solution 3
function arithmetic(a, b, operator) {
    optable = { "add": "+", "subtract": "-", "multiply": "*", "divide": "/" };
    return eval(a + optable[operator] + b);
}


// Solution 4
function arithmetic(a, b, operator) {
    //your code here!
    var mathFun = {
        'add': function (a, b) {
            return a + b;
        },
        'subtract': function (a, b) {
            return a - b;
        },
        'multiply': function (a, b) {
            return a * b;
        },
        'divide': function (a, b) {
            return a / b;
        }
    }

    return mathFun[operator](a, b);
}


// Solution 5
function arithmetic(a, b, op) {
    return ({
        'm': (a, b) => a * b,
        'd': (a, b) => a / b,
        'a': (a, b) => a + b,
        's': (a, b) => a - b
    })[op[0]](a, b);
}


// Solution 6
const arithmetic = (a, b, operator) => {
    return (
        operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
}


// Solution 7
function arithmetic(a, b, operator) {
    return ops[operator](a, b);
}

const ops = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => a / b
}


// Solution 8
function arithmetic(a, b, operator) {
    const operadores = {
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: a / b
    }
    return operadores[operator];
}


// Solution 9
function arithmetic(a, b, operator) {
    var firstLetter = operator.substring(0, 1);
    switch (firstLetter) {
        case "a":
            return a + b;
            break;
        case "s":
            return a - b;
            break;
        case "m":
            return a * b;
            break;
        case "d":
            return a / b;
    }
}


// Solution 10
function arithmetic(a, b, operator) {
    switch (operator) {
        case "add": return a + b; break;
        case "subtract": return a - b; break;
        case "multiply": return a * b; break;
        case "divide": return a / b; break;
    }
}


// Solution 11
arithmetic = (a, b, o) => eval(a + '*/+-'['mdas'.search(o[0])] + b)


// Solution 12
function arithmetic(a, b, operator) {
    const hash = {
        "multiply": '*',
        "add": '+',
        "subtract": '-',
        "divide": '/'
    };

    return eval(a + hash[operator] + b);
}