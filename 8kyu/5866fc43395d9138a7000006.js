// Ensure question

// Given a string, write a function that returns the string with a question mark("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example(Input-- > Output)

// "Yes" -- > "Yes?"
// "No?" -- > "No?"

function ensureQuestion(s) {
    return s[s.length-1] === "?" ? s : `${s}?`;
}

console.log(ensureQuestion(""));
// "?"
console.log(ensureQuestion("Yes"));
// "Yes?"
console.log(ensureQuestion("No?"));
// "No?"


// Solution 1
const ensureQuestion = s => s.endsWith('?') ? s : s + '?'


// Solution 2
function ensureQuestion(s) {
    return s.includes('?') ? s : `${s}?`;
}


// Solution 3
function ensureQuestion(s) {
    return s.split('?').join('').concat('?')
}


// Solution 4
function ensureQuestion(s) {
    return s[s.length - 1] === '?' ? s : `${s}?`
}


// Solution 5
function ensureQuestion(s) {
    return s.endsWith("?") ? s : s + "?"
}


// Solution 6
const isAQuestion = (string) => {
  const lastChar = string.length - 1 

  if(string[lastChar] === '?')
    return true
  
  return false
}

const ensureQuestion = (string) => {
  if(!isAQuestion(string)){
    return string + '?'
  }
  
  return string
}


// Solution 7
function ensureQuestion(s) {
  return `${s}?`.replace(/\?+$/g, "?")
}


// Solution 8
const ensureQuestion = s => s.indexOf('?') > -1 ? s : `${s}?`;


// Solution 9
ensureQuestion = s => s.endsWith('?') ? s : s + "?"


// Solution 10
let ensureQuestion = (s) => s.includes("?") ? `${s}` : `${s}?`;


// Solution 11
function ensureQuestion(s) {
    //   if(s !== s + "?" || s === '' || s !== s+"?" ){
    //     s+="?";
    //     console.log(s)
    //   } else if (s !== s+"?"){
    //     s;
    //     console.log(s)
    //   }

    //   if(s === ''){
    //     s = '?';
    //   } else if (s === "Yes" || s === "No"){
    //     s += '?';
    //   } else if (s !== '' && s !== "Yes?" && s !== "No?"){
    //     s += '?';
    //   }

    if (s === '') {
        s = '?';
    } else if (s.includes('?') === false) {
        s += '?'
        console.log('tem')
    }

    return s;
}