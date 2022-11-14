// Thinkful - String Drills: Repeater

// Write a function named repeater() that takes two arguments (a string and a number), 
// and returns a new string where the input string is repeated that many times.
// Example: (Input1, Input2 --> Output)

// "a", 5 --> "aaaaa"

function repeater(string, n) {
    let output = '';
    for (let i = 1; i <= n; i++) {
        output+= string;
    }
    return output;
}

console.log(repeater('a', 5));
// 'aaaaa'
console.log(repeater('Na', 16));
// 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa'
console.log(repeater('Wub ', 6));
// 'Wub Wub Wub Wub Wub Wub '


// Solution 1
const repeater = (string, n) => {
    return string.repeat(n);
}


// Solution 2
function repeater(string, n) {
    return string.repeat(n)
}


// Solution 3
const repeater = (str, n) => str.repeat(n)


// Solution 4
const repeater = (string, n) => string.repeat(n);


// Solution 5
function repeater(string, n) {
    let newStr = '';

    for (let i = 0; i < n; ++i) {
        newStr += string;
    }

    return newStr;
}


// Solution 6
const repeater = (str, times) => str.repeat(times)


// Solution 7
const repeater = (string, num) => {
    let end = []
    while (end.length < num) {
        end.push(string)
    }
    return (end.join(''))
}


// Solution 8
function repeater(str, number) {
    let result = '';
    for (let i = 0; i < number; ++i) {
        result += str
    }
    return result
}


// Solution 9
function repeater(WTF, So) {
    return WTF.repeat(So)
}


// Solution 10
const repeater = (string, n) => string.repeat(n)


// Solution 11
const repeater = (s, n) => s.repeat(n);


// Solution 12
const repeater = Function.call.bind("".repeat);