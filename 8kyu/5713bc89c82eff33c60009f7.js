// Freudian translator 

// You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

// In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {
  return string.length ? string.split(" ").map(element => "sex").join(" ") : "";
}

console.log(toFreud(""));
// ""
console.log(toFreud("test"));
// "sex"
console.log(toFreud("This is a test"));
// "sex sex sex sex"
console.log(toFreud("This is a longer test"));
// "sex sex sex sex sex"
console.log(toFreud("You're becoming a true freudian expert"));
// "sex sex sex sex sex sex"


// Solution 1
const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')


// Solution 2
function toFreud(string) {
  return string.replace(/\S+/g, 'sex');
}


// Solution 4
const toFreud = string => string.replace(/\S+/g, "sex");


// Solution 5
let toFreud = str => str === '' ? '' : 'sex '.repeat(str.split(' ').length).trim()


// Solution 6
const toFreud = string =>
  string.replace(/\S+/gi, `sex`);


// Solution 7
var toFreud=s=>s.replace(/[^ ]+/gi,'sex');


// Solution 8
function toFreud(string) {
  if(string.length === 0) return '';
  return  Array.from({length : string.split(' ').length}).fill('sex').join(' ');
}


// Solution 9
const toFreud = str => str.replace(/[^ ]+/gi,'sex');


// Solution 10
function toFreud(SEX) {
  return SEX.replace(/([\Sex]+)/g, sex => 'sex');
}


// Solution 11
toFreud=s=>s.replace(/[\w']+/g,'sex')


// Solution 12
toFreud = string => string.replace(/\S+/g, "sex");


// Solution 13
function toFreud(string) {
  var result = string.replace(/\S+/g, "sex");
  return result;
}


// Solution 14
const toFreud = s => {
    if (!s) return ``;
    return s.split(` `).fill(`sex`).join(` `);
}