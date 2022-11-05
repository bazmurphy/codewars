// Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output = "";
  
  for (let char of message) {

    console.log(char.charCodeAt(0));

    if (lowerCaseLetters.indexOf(char) > -1) {

      if (lowerCaseLetters.indexOf(char) + 13 > (lowerCaseLetters.length -1)) {
        // console.log(`lower char ${char} index ${lowerCaseLetters.indexOf(char)} + 13 = ${lowerCaseLetters.indexOf(char) + 13} is > 25`)
        output += lowerCaseLetters[(lowerCaseLetters.indexOf(char) + 13) - lowerCaseLetters.length];

      } else {
        // console.log(`lower char ${char} index ${lowerCaseLetters.indexOf(char)} + 13 = ${lowerCaseLetters.indexOf(char) + 13} is <= 25`)
        output += lowerCaseLetters[lowerCaseLetters.indexOf(char) + 13];
      }

    }
    
    else if (upperCaseLetters.indexOf(char) > -1) {

      if (upperCaseLetters.indexOf(char) + 13 > (upperCaseLetters.length -1)) {
        // console.log(`upper char ${char} index ${upperCaseLetters.indexOf(char)} + 13 = ${upperCaseLetters.indexOf(char) + 13} is > 25`)
        output += upperCaseLetters[(upperCaseLetters.indexOf(char) + 13) - upperCaseLetters.length];
      
      } else {
        // console.log(`upper char ${char} index ${upperCaseLetters.indexOf(char)} + 13 = ${upperCaseLetters.indexOf(char) + 13} is <= 25`)
        output += upperCaseLetters[upperCaseLetters.indexOf(char) + 13];
      }

    } else {
      output += char;
    }
  }

  return output;
}

console.log(rot13("test"));
// "grfg"
console.log(rot13("Test"));
// "Grfg"
console.log(rot13("abcde"));
// "nopqr"
console.log(rot13("nopqr"));
// "abcde"


// Solution 1
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}


// Solution 2
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


// Solution 3
var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}


// Solution 4
function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}


// Solution 5
function rot13(message){
  //your code here
  return (message + '')
    .replace(/[a-z]/gi, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
}


// Solution 6
function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) + (match.toUpperCase().localeCompare('M') > 0 ? -13 : 13));
  });
}


// Solution 7
function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(c){
    var c13 = c.charCodeAt(0) + 13;
    var endCharCode = ( c > 'Z')? 122 : 90;
    return String.fromCharCode(  endCharCode < c13 ?  c.charCodeAt(0) - 13 : c13 );
  });
}


// Solution 8
function rot13(message){
  return message.split('').map(l => {
    let charCode = l.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122){
      charCode = (charCode - 97 + 13) % 26 + 97;
    }
    else if(charCode >= 65 && charCode <= 90){
      charCode = (charCode - 65 + 13) % 26 + 65;
    }
    return String.fromCharCode(charCode);
  }).join('');
}


// Solution 9
function rot13(message){
  
  // Matches any letter
  let pattern = /[a-z]/i
  
  let result = "";
  
  for (let char of message) {
    
    // If character isn't letter, just push it into result
    if (!pattern.test(char)) {
      result += char;
      continue;
    }
    
    let upper = char === char.toUpperCase();
    let code = char.charCodeAt(0);
    
    // remove the appropriate offset from the char's ACSII code
    code -= (upper) ? 65 : 97;
    
    // ROT13
    code = (code + 13) % 26;
    
    // Add offset back
    code += (upper) ? 65 : 97;
    
    // Add rotated char to result
    result += String.fromCharCode(code);
  }
  
  return result;
}


// Solution 10
function rot13(message) {
  const alphabet = {
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm',
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
  };
 
  let str = '';

  for(let i = 0; i< message.length; i++) {
    alphabet[message[i]]
      ? str += alphabet[message[i]]
      : str += message[i]
  }

  return str;

}


// Solution 11
let rot13 = (() => {
  let alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetUpper = alphabetLower.toUpperCase();
  let {length} = alphabetLower;

  let table = {};

  for (let i = 0; i < length; i++) {
    let r = (i + 13) % length;
    table[alphabetLower[i]] = alphabetLower[r];
    table[alphabetUpper[i]] = alphabetUpper[r];
  }

  function rot13Char(c) {
    return table[c] || c;
  }

  return function rot13(message) {
    return Array.prototype.map.call(message, rot13Char).join('');
  };
})();


// Solution 12
function rot13(message){
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  
  return [...message].map((i, idx) => {
    const index = abc.indexOf(i.toLowerCase()) ; 
    const l = index+13  < 26 ? abc[index+13] : abc[Math.abs(index +13 -26)] ; 
    return index === -1 ? i : i === i.toUpperCase() ? l.toUpperCase() : l; 
  }).join('');
 }


// Solution 13
const rot13 = message =>
  message.replace(/[a-z]/gi, val => String.fromCharCode(val.charCodeAt() + (val.toLowerCase() < `n` ? 13 : -13)));


// Solution 14
function rot13(message){
  let ordenedAlphabet  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let alphabetPlus13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let indexOfLetter = (letter) => ordenedAlphabet.indexOf(letter)
  let rot13arr = message
  .split("")
  .map(e => indexOfLetter(e) > -1 
  ? alphabetPlus13[indexOfLetter(e)] 
  : e)
  return rot13arr.join("")
}