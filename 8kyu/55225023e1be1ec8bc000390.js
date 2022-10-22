// Jenny's secret message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name){
//   return "Hello, " + name + "!";
//   if(name === "Johnny")
//     return "Hello, my love!";
// }

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}


// Solution 1
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}


// Solution 2
function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}


// Solution 3
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}


// Solution 4
let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;


// Solution 5
function greet(name){
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}


// Solution 6
const greet = name => `Hello, ${name === 'Johnny' ? 'my love' : name}!`;


// Solution 7
function greet(name) {
    return "Hello, " + (name === "Johnny" ? "my love": name) + "!";
}


// Solution 8
function greet(name) {
  if (name === 'Johnny')
    name = 'my love';
  
  return `Hello, ${name}!`;
}


// Solution 9
const greet = name => name == 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`


// Solution 10
function greet(name){
  let greeting = `Hello, ${name}!`
  if(name === "Johnny") {
    return "Hello, my love!";
  }
  return greeting
}


// Solution 11
greet=name=>name=="Johnny"?"Hello, my love!":"Hello, " + name + "!"



// Solution 12
const greet = name => {
  return name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;
}


// Solution 13
const greet = naMe => naMe === "Johnny" ? "Hello, my love!" : "Hello, " + naMe + "!";


// Solution 14
const greet = (name) => `Hello, ${name == 'Johnny' ? 'my love' : name}!`