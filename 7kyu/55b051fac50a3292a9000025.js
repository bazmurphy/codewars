// Filter the number

// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task

// Your task is to return a number from a string.

// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

function filterString(value) {
  return Number(value.split("").filter((element) => "0123456789".includes(element)).join(""));
}

console.log(filterString("123"));
// 123
console.log(filterString("a1b2c3"));
// 123
console.log(filterString("aa1bb2cc3dd"));
// 123


// Solution 1
var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}


// Solution 2
const FilterString = value => +value.replace(/\D/g, '');


// Solution 3
var FilterString = function(value) {
  return +value.split('').filter(n => !isNaN(n)).join('');
}


// Solution 4
var FilterString = function(value) {
  return +value.replace(/\D+/g, '')
}


// Solution 5
const FilterString = ($) => parseInt($.match(/[0-9]/g).join(''))


// Solution 6
var FilterString = function(value) {
  var result = "";
  for(var i = 0; i < value.length; i++){
    if(!isNaN(value[i]))
      result += value[i];
  }
  return parseInt(result);
}


// Solution 7
const FilterString = v => Number(v.replace(/\D/g, ''));


// Solution 8
var FilterString = function(value) {
  let parsed = value
    .split``
    .map(Number)
    .filter(Number.isInteger)
    .join``
  
  return Number(parsed) 
}


// Solution 9
const FilterString = value =>
  +value.replace(/\D/g, ``);


// Solution 10
var FilterString = function(s) {
  return +s.replace(/\D/g,"")
}


// Solution 11
var FilterString = function(value) {
  return parseInt(value.split("").filter(function(c) { return c >= '0' && c <= '9'; }).join(""));
}


// Solution 13
var FilterString = function(value) {
  return +value.match(/\d/g).join('');
}


// Solution 14
var FilterString = function(value) {
  let str = value.split("");
  let arr = [];
  for(let i = 0; i < str.length; i++){
    if(isNaN(str[i]) == false){arr.push(str[i]);}
  }
  return +arr.join('');
}