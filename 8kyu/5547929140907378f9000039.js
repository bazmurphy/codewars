// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {

    let stepOne = string.split("");
    // console.log(stepOne);
  
    let stepTwo = stepOne.filter(element => element !== "a" && element !== "e" && element !== "i" && element !== "o" && element !== "u");
    // console.log(stepTwo);
  
    let stepThree = stepTwo.join("");
    // console.log(stepThree);

    return stepThree;
  
}


// Solution 1
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}


// Solution 2
function shortcut(string){
    return string.replace(/[aeiou]/gi, '');
}


// Solution 3
function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
}


// Solution 4
const shortcut = string => string.replace( /[euioa]/g, '' );


// Solution 7
function shortcut(string){
    var vowels = "aeiou";
    var output = "";
    for (var i = 0; i < string.length; i++) {
      if (!(vowels.indexOf(string[i]) > -1)) {
        output += string[i];
      }
    }
    return output;
}


// Solution 8
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}