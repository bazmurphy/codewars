// Grasshopper - Variable Assignment Debug

// Variable assignment

// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

// var a == "dev"
// var b == "Lab"

// var name == a + b

let a = "dev"
let b = "Lab"
let name = a + b

console.log(name === "devLab")
// true


// Solution 1
var a = "dev"
var b = "Lab"

var name = a + b


// Solution 2
var a = "dev", b = "Lab", name = a + b


// Solution 3
const a = "dev"
const b = "Lab"

const name = a + b


// Solution 4
const a = `dev`;
const b = `Lab`;
const name = `${a}${b}`;


// Solution 5
let [a, b] = ['dev', 'Lab'],
    name = a + b


// Solution 6
let a = 'dev',
    b = 'Lab',
    name = a + b;


// Solution 7
a = `dev`, b = `Lab`, name = a + b;

[a, b] = [`dev`, `Lab`], name = a + b;

[a, b] = `dev Lab`.split` `, name = a + b


// Solution 9
const a = "dev";
const b = "Lab";

const name = `${a}${b}`


// Solution 11
var a = "dev";
var b = "Lab";

var name = a.concat(b);