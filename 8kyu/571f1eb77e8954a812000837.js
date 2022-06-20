// Training JS #5: Basic data types--Object

// In javascript, Object is one of basic data types.
// Define an Object can use var obj = new Object() or var obj = {}

// You can define the object attributes during initialization, like this:

// var animal = { name: "dog" }

// you can also set / get some properties after the object definition, like this:

// var animal = {}
// animal.name = "dog"(or animal["name"] = "dog")

// Task

// Give you a function animal, accept 1 parameter:obj like this:

// { name: "dog", legs: 4, color: "white" }

// and return a string like this:

// "This white dog has 4 legs."

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal({ name: "dog", legs: 4, color: "white" }));
// "This white dog has 4 legs."
console.log(animal({ name: "cock", legs: 2, color: "red" }));
// "This red cock has 2 legs."
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }));
// "This gray rabbit has 4 legs."


// Solution 1
function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}


// Solution 2
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;



// Solution 3
function animal(obj) {
    return "This" + ' ' + obj.color + ' ' + obj.name + ' ' + "has" + ' ' + obj.legs + ' ' + "legs."
}


// Solution 4
function animal({ name, legs, color }) {
    return `This ${color} ${name} has ${legs} legs.`;
}


// Solution 5
function animal(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}


// Solution 6
function animal(obj) {
    let { color, name, legs } = obj;
    return `This ${color} ${name} has ${legs} legs.`
}


// Solution 7
const animal = ({ name, legs, color }) => `This ${color} ${name} has ${legs} legs.`


// Solution 8
function animal(obj) {
    return ['This', obj.color, obj.name, 'has', obj.legs, 'legs.'].join(' ');
}


// Solution 9
animal = o => `This ${o.color} ${o.name} has ${o.legs} legs.`;


// Solution 10
function animal(obj) {
    const { color, legs, name } = obj;

    return `This ${color} ${name} has ${legs} legs.`;
}


// Solution 11
const animal = obj =>
    'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'; 


// Solution 12
animal = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;