// Template Strings

// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}

console.log(TempleStrings("Animals","Good"))
// 'Animals are Good'


// Solution 1
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
}


// Solution 2
let TempleStrings = (obj, feature) => `${obj} are ${feature}`;


// Solution 3
const TempleStrings = (obj, feature) => `${obj} are ${feature}`;