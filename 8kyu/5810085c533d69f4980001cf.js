// simple calculator

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// calculator(1, 2, "+"); //=> result will be 3
// calculator(1, 2, "&"); //=> result will be "unknown value"
// calculator(1, "k", "*"); //=> result will be "unknown value"

// Good luck!


function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number' || !'+-*/'.includes(sign)) {
        return 'unknown value'
    } else {
        if (sign === '+') {
            return a + b;
        } else if (sign === '-') {
            return a - b;
        } else if (sign === '*') {
            return a * b;
        } else if (sign === '/') {
            return a / b;
        }
    }
}

console.log(calculator(1, 2, "+"));
// 3, "calculate"
console.log(calculator(1, 2, "-"));
// -1, "calculate"
console.log(calculator(3, 5, "*"));
// 15, "calculate"
console.log(calculator(6, 2, "/"));
// 3, "calculate"
console.log(calculator(6, 2, "$"));
// "unknown value", "calculate"
console.log(calculator(6, "h", "*"));
// "unknown value", "calculate"


// Solution 1
function calculator(a, b, sign) {
    if ((typeof a === "number") && (typeof b === "number")) {
        switch (sign) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
        }
    }
    return "unknown value";
}


// Solution 2
function calculator(a, b, sign) {
    try { return eval(a + sign + b); }
    catch (e) { return "unknown value"; }
}


// Solution 3
function calculator(a, b, sign) {
    switch (sign) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "unknown value";
    }

}


// Solution 4
function calculator(x, y, sign) {
    var fnMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }
    if (isNaN(x) || isNaN(y) || !fnMap[sign]) {
        return "unknown value";
    }
    return fnMap[sign](x, y);
}


// Solution 5
function calculator(a, b, sign) {
    var oper = {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "/": a / b
    }
    return oper[sign] ? oper[sign] : "unknown value"
}


// Solution 6
function calculator(a, b, sign) {

    if (sign == '+') {
        return a + b;

    } else if (sign == '-') {
        return a - b;

    } else if (sign == '/') {
        return a / b;

    } else if (sign == '*') {
        return a * b;

    } else {
        return "unknown value"
    }

}


// Solution 7
function calculator(a, b, op) {
    if (isNaN(a) || isNaN(b) || /[^\+\-\*\/]/.test(op)) return 'unknown value';
    return {
        '+': () => a + b,
        '-': () => a - b,
        '*': () => a * b,
        '/': () => a / b
    }[op]()
}


// Solution 8
const calculator = (a, b, sign) => !isNaN(a) && !isNaN(b) && ['+', '-', '*', '/', '%'].includes(sign) ? eval(a + sign + b) : "unknown value"


// Solution 9
function calculator(a, b, sign) {
    try {
        return eval(a + sign + b);
    } catch (ex) {
        return "unknown value"
    }

}


// Solution 10
function calculator(a, b, sign) {
    if (sign != "+" && sign != "-" && sign != "*" && sign != "/") return "unknown value";
    if (isNaN(a) || isNaN(b)) return "unknown value";
    if (sign == "+") return a + b;
    if (sign == "-") return a - b;
    if (sign == "*") return a * b;
    if (sign == "/") return a / b;
}


// Solution 11
const calculator = (a, b, sign) =>
    +a === a && +b === b && [`+`, `-`, `*`, `/`].includes(sign) ? sign === `+` ? a + b : sign === `-` ? a - b : sign === `*` ? a * b : a / b : `unknown value`;


// Solution 12
calculator = (a, b, s) => ['+', '-', '*', '/'].includes(s) & a === +a & b === +b ? eval(`${a}${s}${b}`) : 'unknown value';