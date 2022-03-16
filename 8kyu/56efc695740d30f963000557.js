// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
  
    const alternateCase = [];
    
    for (let i = 0; i < this.length; i++)
      if (this[i] === this[i].toLowerCase()) {
        alternateCase.push(this[i].toUpperCase())
      }
      else if (this[i] === this[i].toUpperCase()) {
        alternateCase.push(this[i].toLowerCase())
      }
    
    return alternateCase.join('');

}

console.log("hello world".toAlternatingCase())
console.log("HELLO WORLD".toAlternatingCase())
console.log("hello WORLD".toAlternatingCase())
console.log("HeLLo WoRLD".toAlternatingCase())


// Solution 1 
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


// Solution 2
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};


// Solution 3
String.prototype.toAlternatingCase = function () {
    new_str = "";
    for(var i = 0; i < this.length; i++) {
      if(this[i] === this[i].toUpperCase()) {
        new_str += this[i].toLowerCase();
      }
      else {
        new_str += this[i].toUpperCase();
      }
    }
    return new_str;
}


// Solution 4
String.prototype.toAlternatingCase = function () {
  return this.replace(/./g, function (match) {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
  });
}


// Solution 5
String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
}


// Solution 6
String.prototype.toAlternatingCase = function(){
  return this.split("").map(letter => {
    var newLetter = letter.toUpperCase();
    return letter == newLetter ? letter.toLowerCase() : newLetter;
  }).join("");
}


// Solution 7
String.prototype.toAlternatingCase = function () {
  return this.replace(/[a-z]/gi, val => val < `a` ? val.toLowerCase() : val.toUpperCase());
}