// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {

    // console.log(name);
    
    name = name.toLowerCase();

    name = name.split('');

    name[0] = name[0].toUpperCase();

    name = name.join('');    

    return `Hello ${name}!`
    
};

console.log(greet('riley'))
// 'Hello Riley!'
console.log(greet('molly'))
// 'Hello Molly!'
console.log(greet('BILLY'))
// 'Hello Billy!'


// Solution 1
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function (name) {
    return "Hello " + name.capitalize() + "!";
};


// Solution 2
var greet = function (name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};


// Solution 3
var greet = function (name) {
    return "Hello " + name.substring(0, 1).toUpperCase() + name.slice(1).toLowerCase() + "!";
};


// Solution 4
var greet = function (name) {
    return `Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
};


// Solution 5
greet = n => `Hello ${n[0].toUpperCase()}${n.substr(1).toLowerCase()}!`;


// Solution 6
var greet = function (name) {
    return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
};


// Solution 7
var greet = (name) => `Hello ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`


// Solution 8
const greet = name =>
    `Hello ${name.toLowerCase().replace(/^\w/, val => val.toUpperCase())}!`;


// Solution 9
var greet = function (name) {
    name = name.toLowerCase();
    name = name.split('');
    name[0] = name[0].toUpperCase();
    name = name.join('');
    return "Hello " + name + "!";
};
greet("billy");


// Solution 10
const greet = name => "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";


// Solution 11
const greet = (name) => `Hello ${name[0].toUpperCase() + name.slice(1,).toLowerCase()}!`;


// Solution 12
var greet = name => `Hello ${name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}!`