// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

function greet (name, owner) {
//   if (name === owner) {
//     return `Hello boss`
//   } else {
//     return `Hello guest`
//   }
  return name === owner ? "Hello boss" : "Hello guest"
}

console.log(greet('Daniel', 'Daniel'));
// 'Hello boss'
console.log(greet('Greg', 'Daniel'));
// 'Hello guest'


// Solution 1
function greet (name, owner) {
  return name === owner ? 'Hello boss' :  'Hello guest';
}


// Solution 2
function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}


// Solution 3
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}


// Solution 4
const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';


// Solution 5
function greet (name, owner) {
  return "Hello " + (name == owner ? "boss" : "guest");
}


// Solution 6
const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";


// Solution 7
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss'
    }
    else
    return 'Hello guest' 
}


// Solution 8
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;


// Solution 9
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'


// Solution 10
const greet = (name, owner) =>
  `Hello ${name === owner ? `boss` : `guest`}`;


// Solution 11
let greet=(n,o)=>`Hello ${n===o?'boss':'guest'}`;


// Solution 13
function greet (name, owner) {
  return name==owner?"Hello boss":"Hello guest"
}


// Solution 14
function greet (name, owner) {
  const greetings = {
    [true] :'Hello boss',
    [false]:'Hello guest',
  }
  
  return greetings[name === owner]
}