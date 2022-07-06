// Do you speak "English" ?

// Given a string of arbitrary length with any ascii characters.
// Write a function to determine whether the string contains the whole word "English".

// The order of characters is important-- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter-- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
    return sentence.toLowerCase().includes('english')
}

console.log(spEng("english"));
// true
console.log(spEng("egnlish"));
// false


// Solution 1
function spEng(s) {
    return /english/i.test(s)
}


// Solution 2
function spEng(sentence) {
    let sentenceLower = sentence.toLowerCase();
    return sentenceLower.includes('english');
}


// Solution 3
const spEng = sentence => /english/i.test(sentence)


// Solution 4
var spEng = (sentence) => sentence.toLowerCase().includes('english');


// Solution 5
function spEng(sentence) {
    return sentence.toLowerCase().includes("english");
}


// Solution 6
function spEng(s) {
    return s.toLowerCase().indexOf('english') != -1
}


// Solution 7
spEng = x => x.toLowerCase().includes('english')


// Solution 8
const spEng = s => /english/gi.test(s)


// Solution 9
function spEng(sentence) {
    return /english/i.test(sentence);
}


// Solution 10
function spEng(sentence) {
    return sentence.toUpperCase().indexOf("ENGLISH", 0) !== -1;
}


// Solution 11
spEng = (s) => {
    return (s.toUpperCase().includes('ENGLISH')) ? true : false;
}


// Solution 12
function spEng(sentence) {
    return sentence.match(/english/gi) !== null
}