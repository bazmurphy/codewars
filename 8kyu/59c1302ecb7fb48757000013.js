// For Twins: 1. Types

// Prolog:

// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:

// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:

// 42, "number"   --> true
// "42", "number" --> false

function typeValidation(variable, type) {
  return typeof variable === type;
}

console.log(typeValidation(42, "number"));
// true
console.log(typeValidation("42", "number"));
// false


// Solution 1
function typeValidation(variable, type) {
  return typeof variable === type; 
}


// Solution 2
const typeValidation = (variable, type) => typeof variable === type ;


// Solution 3
function typeValidation(variable, type) {
  if (typeof variable === 'number' && type === 'number') {
    return true;
  } else if (typeof variable === 'undefined' && type === 'undefined') {
    return true;
  } else if (typeof variable === 'string' && type === 'string') {
    return true;
  } else if (typeof variable === 'boolean' && type === 'boolean') {
    return true;
  } else if (typeof variable === 'object' && type === 'object') {
    return true;
  }
  return false;
}


// Solution 4
function typeValidation(variable, type) {
  return typeof variable == type;
}


// Solution 5
typeValidation=(v,t)=>typeof v===t


// Solution 6
function typeValidation(v, type) {
  return typeof v === type 
}


// Solution 7
typeValidation=(_,__)=>typeof _ == __


// Solution 8
function typeValidation(variable, type) {
if(typeof(variable) == "number" && type == "number"|| typeof(variable) == "string" && type == "string"
  
  ||typeof(variable) == "object" && type == "object"||typeof(variable) == "undefined" && type == "undefined"
  ||typeof(variable) == "boolean" && type == "boolean"
  
  ){return true}
  else{return false}
}


// Solution 9
function typeValidation(variable, type) { 
  if(typeof(variable) === type) {
    return true;
 }
  return false;
}


// Solution 10
const typeValidation = function(varble, tpe) {
  return typeof varble === tpe
}


// Solution 11
var typeValidation = (v, t) => typeof v === t


// Solution 12
typeValidation = (v, type) => typeof v === type


// Solution 13
typeValidation=(variable,type)=>typeof(variable)==type


// Solution 14
typeValidation = (variable, type) => typeof variable === type;