// Contamination #1 -String-

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

// ISSUES INFO:
// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

function contamination(text, char){

    let returnStr = "";
    
    for (let i = 0; i < text.length; i++)
        returnStr += char;

    return returnStr;

}

console.log(contamination("abc","z"))
// "zzz"
console.log(contamination("","z"))
""
console.log(contamination("abc",""))
""
console.log(contamination("_3ebzgh4","&"))
"&&&&&&&&"
console.log(contamination("//case"," "))
"      "


// Solution 1
function contamination(text, char){
    return char.repeat(text.length)
}


// Solution 2
function contamination(text, char){
    return text.replace(/./g, char);
}


// Solution 3
const contamination = (s,v) => s.replace(/./g,v);


// Solution 4
const contamination = (text, char) => text.replace(/./g, char);


// Solution 5
var contamination = (text, char) => [...text].map(e => e = char).join('')


// Solution 6
function contamination(text, char) {
  return text.split("").fill(char).join("");
}
/////////////////////////////////////////////////
function contamination(text, char) {
  return char.repeat(text.length);
}
/////////////////////////////////////////////////
function contamination(text, char) {
  return text.replace(/./g, char);
}