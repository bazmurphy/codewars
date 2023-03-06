// Moves in squared strings (I)

// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)

// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)

//   hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 

// Task:

//   Write these two functions

// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:

// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

// Note:

// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".


function vertMirror(strng) {
    return strng.split("\n").map(element => element.split("").reverse().join("")).join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    return fct(s);
}


console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
// "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"));
// "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"));
// "yeCt\nCSbg\nJVhv\nlVHt"
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"));
// "cEYz\nLPKo\ndbrZ\nnjMK"


// Solution 1
function vertMirror(str) {
    return str.split('\n')
      .map(line => line.split('').reverse().join(''))
      .join('\n')
}
function horMirror(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}


// Solution 2
const vertMirror = s => s.map(s => [...s].reverse().join(''));
const horMirror = s => s.reverse();

const oper = (fct, s) => fct(s.split("\n")).join("\n");


// Solution 3
function vertMirror(str) {
  return str.split('\n').map(el => [...el].reverse().join('')).join('\n')
}

function horMirror(str) {
    return str.split('\n').reverse().join('\n')
}

function oper(fnctn, str) {
    return fnctn(str)
}


// Solution 4
const vertMirror = strng =>
  [...strng].map(val => [...val].reverse().join(``));

const horMirror = strng =>
  [...strng].reverse();

const oper = (fct, s) =>
  fct(s.split(`\n`)).join(`\n`);


// Solution 5
function vertMirror(a) {
    return a.map(s => [...s].reverse().join(''));
}
function horMirror(a) {
    return a.reverse();
}
function oper(fct, s) {
    return fct(s.split('\n')).join('\n');
}


// Solution 6
function revStr(strng) {
    return [...strng].reverse().join('');
} 
function vertMirror(strng) {
    return strng.split("\n").map(function(x) { return revStr(x); }).join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    return fct(s);
}


// Solution 7
function vertMirror(strng) {
  return strng
    .split('\n')
    .map(part => part.split('').reverse().join(''))
    .join('\n');
}
function horMirror(strng) {
  return strng
    .split('\n')
    .reverse()
    .join('\n');
}
function oper(fct, s) {
    return fct(s);
}


// Solution 8
const horMirror = (str, del = "\n") =>
  str
    .split(del)
    .reverse()
    .join(del);

const vertMirror = str =>
  str
    .split("\n")
    .map(line => horMirror(line, ""))
    .join("\n");

const oper = (fct, str) => fct(str);


// Solution 9
let vertMirror =s=> s.split`\n`.map(([...i])=> i.reverse``.join``).join`\n`

let horMirror =s=> s.split`\n`.reverse``.join`\n`

let oper =(fct,s)=> fct(s)


// Solution 10
function vertMirror(strng) {
  var arr=strng.split('\n');
  var ans=[];
  for (var i=0; i<arr.length; ++i)
    ans.push(arr[i].split('').reverse().join(''));
  return ans.join('\n'); 
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct==vertMirror?vertMirror(s):horMirror(s);
}


// Solution 11
function vertMirror(strng) {
      return strng.split('\n').map(ele=>ele.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
      return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct(s);
}


// Solution 12
const vertMirror = strng => strng.split('\n').map(e => e.split('').reverse().join('')).join('\n')

const horMirror = strng => strng.split('\n').reverse().join('\n');

const oper = (fct, s) => fct(s) 


// Solution 13
let reverse = s => s.split('').reverse().join('');

let vertMirror = s => s.split(/\n/g).map(reverse).join('\n');

let horMirror = s => s.split(/\n/g).reverse().join('\n');

let oper = (f, s) => f(s);


// Solution 14
const vertMirror = s => s.split`\n`.map(e => e.split``.reverse().join``).join`\n`;
const horMirror = s => s.split`\n`.reverse().join`\n`;
const oper = (f, s) => f(s);