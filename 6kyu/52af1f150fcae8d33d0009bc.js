// Ho Ho Ho with Functions!

// Santa is learning programming.
// And what could be the first program, he wants to write ? 
// Yes, the "Hello world!" of Christmas: "Ho Ho Ho!".
// He wants to write a function ho(), which should have the following return values:

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
ho(ho(ho())); // should return "Ho Ho Ho!"

// Unfortunately he couldn't find any tutorial, which explains, how he could implement that. 
// Can you help him?

// Rules:

// each call of ho() must add a "Ho" to the string
// the "Ho"'s must be separated by a space
// at the end of the string, there must be an exclamation mark(!), without a space

function ho() {
    if (arguments.length) {
        return "Ho " + arguments[0];
    } else {
        return "Ho!";
    }
}

console.log(ho());
// 'Ho!'
console.log(ho(ho()));
// 'Ho Ho!'
console.log(ho(ho(ho())));
// 'Ho Ho Ho!'


// Solution 1
function ho(arg) {
    return arg ? "Ho " + arg : "Ho!";
}


// Solution 2
function ho() {
    return arguments[0] ? 'Ho ' + arguments[0] : 'Ho!'
}


// Solution 3
function ho() {
    if (arguments.length > 0)
        return 'Ho ' + arguments[0];
    return 'Ho!';
}


// Solution 4
function ho() {
    var name = arguments.callee.name,
        capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return arguments.length > 0 ? capitalized + " " + arguments[0] : capitalized + "!";
}


// Solution 5
function ho() {
    if (arguments.length)
        return 'Ho ' + arguments[0];
    else
        return 'Ho!';
}


// Solution 6
function ho(v) {
    if (v) return `Ho ${v}`
    else return 'Ho!'
}


// Solution 7
function ho(str = '') {
    return str ? `Ho ${str}` : 'Ho!';
}


// Solution 8
function ho(arg) {
    if (arg) return `Ho ${arg}`;

    return 'Ho!'
}


// Solution 9
const ho = (...args) => {
    if (!args.length) {
        return "Ho!";
    }
    return "Ho " + args;
};


// Solution 10
const ho = a => a ? "Ho " + a : "Ho!";


// Solution 11
function ho(f) {
    return f ? "Ho " + f : "Ho!";
}


// Solution 12
function ho(a) {
    return a ? 'Ho ' + a : 'Ho!'
}


// Solution 13
function ho(ho) {
    return ho ? 'Ho ' + ho : 'Ho!';
}


// Solution 14
const ho = (ho) => ho ? `Ho ${ho}` : `Ho!`;

/*
function ho(ho)
{
  if (ho)
  {
    return "Ho " + ho;
  }
  else
  {
    return "Ho!"
  }
}
*/


// Solution 15
function ho(str) {
    return `Ho${str ? ' ' + str.slice(0, str.length - 1) : ''}!`;
}


// Solution 17
function ho(greeting) {
    return greeting
        ? `Ho ${greeting}`
        : 'Ho!';
}