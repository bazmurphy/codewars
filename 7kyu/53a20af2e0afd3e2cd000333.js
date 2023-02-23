// Say "Hello World" JS Style

// Write the definition of the function "say" such that calling this:

// say("Hello")("World")

// returns "Hello World"


const say = function (string1) {
    return function (string2) {
        return `${string1} ${string2}`
    }
};

// const say = (string1) => (string2) => `${string1} ${string2}`;

console.log(say('Hello')('World'));




// Solution 1
var say = function (string1) {
    return function (string2) {
        return string1 + ' ' + string2;
    }
}


// Solution 2
var say = function (string1) {
    return function (string2) {
        return [string1, string2].join(' ');
    }
}


// Solution 3
const say = string1 => string2 => `${string1} ${string2}`;


// Solution 4
var say = string1 => (string2) => string1 + ' ' + string2;


// Solution 5
const say = s1 => (s2 => `${s1} ${s2}`);


// Solution 6
const say = $ => (ﬂ) => [$, ﬂ].join(' ')


// Solution 7
function say(start) {
    return function append(last) {
        return start + " " + last;
    }
}


// Solution 8
var say = function (string1) {
    return string2 => string1 + ' ' + string2;
}


// Solution 9
var say = a => b => a + ' ' + b;


// Solution 10
say = a => b => a + " " + b


// Solution 11
say = x => y => x + ' ' + y


// Solution 12
say = s1 => s2 => `${s1} ${s2}`


// Solution 13
const say = s => a => `${s} ${a}`


// Solution 14
const say = str1 => str2 => `${str1} ${str2}`;