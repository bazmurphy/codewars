// Be Concise I - The Ternary Operator

// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"

// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.

// Whatever you do, do not change what the function does. Good luck :)

function describeAge(age) {
  return `You're a(n) ${age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly"}`
}

console.log(describeAge(9));
// "You're a(n) kid"
console.log(describeAge(10));
// "You're a(n) kid"
console.log(describeAge(11));
// "You're a(n) kid"
console.log(describeAge(12));
// "You're a(n) kid"
console.log(describeAge(13));
// "You're a(n) teenager"
console.log(describeAge(14));
// "You're a(n) teenager"
console.log(describeAge(15));
// "You're a(n) teenager"
console.log(describeAge(16));
// "You're a(n) teenager"
console.log(describeAge(17));
// "You're a(n) teenager"
console.log(describeAge(18));
// "You're a(n) adult"
console.log(describeAge(19));
// "You're a(n) adult"
console.log(describeAge(63));
// "You're a(n) adult"
console.log(describeAge(64));
// "You're a(n) adult"
console.log(describeAge(65));
// "You're a(n) elderly"
console.log(describeAge(66));
// "You're a(n) elderly"
console.log(describeAge(100));
// "You're a(n) elderly"


// Solution 1
function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}


// Solution 2
var describeAge=a=>`You're a(n) ${a<13?"kid":a<18?"teenager":a<65?"adult":"elderly"}`;


// Solution 3
const describeAge = n => "You're a(n) " + ( n < 13 ? 'kid': n < 18 ? 'teenager': n < 65 ? 'adult' : 'elderly')


// Solution 5
const describeAge = age =>
  `You're a(n) ${age > 64 ? `elderly` : age > 17 ? `adult` : age > 12 ? `teenager` : `kid`}`;


// Solution 6
function describeAge(a) {    
  return "You're a(n) " + (
    a > 64 ? "elderly":
      a > 17 ? "adult":
        a > 12 ? "teenager":
          "kid"
    );
}


// Solution 7
function describeAge(age) {
  return `You're a(n) ${age > 64 ? 'elderly' : age >= 18 ? 'adult' : age >= 13 ? 'teenager' : 'kid'}`;
}


// Solution 8
function f(age) {
  if (age <= 12) {
    return "You're a(n) kid";
  } else if (age >= 13 && age <= 17) {
    return "You're a(n) teenager";
  } else if (age >= 18 && age <= 64) {
    return "You're a(n) adult";
  } else {
    return "You're a(n) elderly";
  }
}
describeAge = function(age){
  return f(age);
};


// Solution 9
let describeAge=a=>`You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`


// Solution 11
let describeAge=(a,b="You're a(n) ")=>a<13?b+"kid":a>12&&a<18?b+"teenager":a>17&&a<65?b+"adult":b+"elderly"


// Solution 12
const describeAge=a=>`You're a(n) ${a>64?'elderly':a>=18?'adult':a>=13?'teenager':'kid'}`


// Solution 13
const  describeAge = a =>`You're a(n) ${a<13?"kid":a<18?"teenager":a<65?"adult":"elderly"}`;


// Solution 14
var describeAge=a=>"You're a(n) "+(a<13?"kid":a>64?"elderly":a<18?"teenager":"adult")