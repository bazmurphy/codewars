// Switch / Case - Bug Fixing #6

// Oh no! Timmy's evalObject function doesn't work.

// He uses Switch / Cases to evaluate the given properties of an object, can you fix timmy's function?

// function evalObject(value) {
//     var result = 0;
//     switch (value.operation) {
//         case '+': result = value.a + value.b;
//         case '-': result = value.a - value.b;
//         case '/': result = value.a / value.b;
//         case '*': result = value.a * value.b;
//         case '%': result = value.a % value.b;
//         case '^': result = Math.pow(value.a, value.b);
//     }
//     return result;
// }

function evalObject(value) {
    let result = 0;
    switch (value.operation) {
        case '+': result = value.a + value.b; break;
        case '-': result = value.a - value.b; break;
        case '/': result = value.a / value.b; break;
        case '*': result = value.a * value.b; break;
        case '%': result = value.a % value.b; break;
        case '^': result = Math.pow(value.a, value.b); break;
    }
    return result;
}

console.log(evalObject({ a: 1, b: 1, operation: '+' }));
// 2, 'Return the evaluated string as a number!'
console.log(evalObject({ a: 1, b: 1, operation: '-' }));
// 0, 'Return the evaluated string as a number!'
console.log(evalObject({ a: 1, b: 1, operation: '/' }));
// 1, 'Return the evaluated string as a number!'
console.log(evalObject({ a: 1, b: 1, operation: '*' }));
// 1, 'Return the evaluated string as a number!'
console.log(evalObject({ a: 1, b: 1, operation: '%' }));
// 0, 'Return the evaluated string as a number!'
console.log(evalObject({ a: 1, b: 1, operation: '^' }));
// 1, 'Return the evaluated string as a number!'


// Solution 1
function evalObject(value) {
    switch (value.operation) {
        case '+': return value.a + value.b;
        case '-': return value.a - value.b;
        case '/': return value.a / value.b;
        case '*': return value.a * value.b;
        case '%': return value.a % value.b;
        case '^': return Math.pow(value.a, value.b);
    }
}


// Solution 2
function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+': result = value.a + value.b;
            break;
        case '-': result = value.a - value.b;
            break;
        case '/': result = value.a / value.b;
            break;
        case '*': result = value.a * value.b;
            break;
        case '%': result = value.a % value.b;
            break;
        case '^': result = Math.pow(value.a, value.b);
            break;
    }
    return result;
}


// Solution 3
let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '%': (a, b) => a % b,
    '^': Math.pow,
}

let evalObject = o => ops[o.operation](o.a, o.b)


// Solution 4
const evalObject = value => ({
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '%': (a, b) => a % b,
    '^': Math.pow,
}[value.operation](value.a, value.b));


// Solution 5
const evalObject = value => {
    return {
        '+': v => v.a + v.b,
        '-': v => v.a - v.b,
        '/': v => v.a / v.b,
        '*': v => v.a * v.b,
        '%': v => v.a % v.b,
        '^': v => v.a ** v.b,
    }[value.operation](value);
}


// Solution 6
function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+':
            result = value.a + value.b;
            break;
        case '-': result = value.a - value.b;
            break;
        case '/': result = value.a / value.b;
            break;
        case '*': result = value.a * value.b;
            break;
        case '%': result = value.a % value.b;
            break;
        case '^': result = Math.pow(value.a, value.b);
            break;
        default:
            "Unknown operand";
    }
    return result;
}


// Solution 7
const evalObject = value =>
    ({
        '+': val => val.a + val.b,
        '-': val => val.a - val.b,
        '/': val => val.a / val.b,
        '*': val => val.a * val.b,
        '%': val => val.a % val.b,
        '^': val => val.a ** val.b,
    })[value.operation](value);


// Solution 8
function evalObject(value) {
    switch (value.operation) {
        case '+': return value.a + value.b;
        case '-': return value.a - value.b;
        case '/': return value.a / value.b;
        case '*': return value.a * value.b;
        case '%': return value.a % value.b;
        case '^': return Math.pow(value.a, value.b);
    }
    return 0;
}


// Solution 9
function evalObject(value) {
    const { operation, a, b } = value;
    const helper = {
        '+': a + b,
        '-': a - b,
        '/': a / b,
        '*': a * b,
        '%': a % b,
        '^': Math.pow(a, b),
    }
    return helper[operation];
}


// Solution 10
function evalObject(value) {
    switch (value.operation) {
        case ('+'): return value.a + value.b;
        case ('-'): return value.a - value.b;
        case ('/'): return value.a / value.b;
        case ('*'): return value.a * value.b;
        case ('%'): return value.a % value.b;
        case ('^'): return Math.pow(value.a, value.b);
    }
}


// Solution 11
evalObject = ॱ => {
    switch (ॱ.operation) {
        case '+': return ॱ.a + ॱ.b
        case '-': return ॱ.a - ॱ.b
        case '/': return ॱ.a / ॱ.b
        case '*': return ॱ.a * ॱ.b
        case '%': return ॱ.a % ॱ.b
        case '^': return ॱ.a ** ॱ.b
    }
}


// Solution 12
const evalObject = v => {
    switch (v.operation) {
        case '+': return v.a + v.b; break;
        case '-': return v.a - v.b; break;
        case '/': return v.a / v.b; break;
        case '*': return v.a * v.b; break;
        case '%': return v.a % v.b; break;
        case '^': return v.a ** v.b; break;
    }
}