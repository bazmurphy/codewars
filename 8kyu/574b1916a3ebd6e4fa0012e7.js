// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

// Task

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)

// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

function isOpposite(s1,s2){
  if (!s1 || !s2) {
    return false;
  } else if (s1.length !== s2.length) {
    return false;
  } else {
    for (let i = 0; i < s1.length; i++) {
      if (Math.abs(Math.max(s1.charCodeAt(i),s2.charCodeAt(i)) - Math.min(s1.charCodeAt(i),s2.charCodeAt(i))) !== 32) {
        return false;
      }
    }
    return true;
  }
}

console.log(isOpposite("ab","AB"));
// true
console.log(isOpposite("aB","Ab"));
// true
console.log(isOpposite("aBcd","AbCD"));
// true
console.log(isOpposite("aBcde","AbCD"));
// false
console.log(isOpposite("AB","Ab"));
// false
console.log(isOpposite("",""));
// false


// Solution 1
function isOpposite(s1,s2){
  if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
  for(var i = 0; i < s1.length; i++) {
    if(s1.charAt(i) === s2.charAt(i)) return false;
  }
  
  return true;
  
}


// Solution 2
function isOpposite(s1,s2){
  return s1.split('')
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';
  
}


// Solution 3
function isOpposite(s1,s2){
  return s1!=''&&s1==s2.replace(/./g,ch=>ch['to'+(ch<='Z'?'Lower':'Upper')+'Case']())
}


// Solution 4
function isOpposite(s1,s2){
  return (s1 !== s2) && s1.split("").map(function(el) {
    return ((/[a-z]/).test(el)) ? el.toUpperCase() : el.toLowerCase();
  }).join("") == s2;
}


// Solution 5
const isOpposite = (s1, s2) => {
  if (!s1.length || !s2.length) return false
  const s3 = s2.replace(/[a-z]/ig, c => c.charCodeAt(0) < 97 ? c.toLowerCase() : c.toUpperCase())
  return s3 === s1
}


// Solution 6
const isOpposite = (s1, s2) =>
  !!s1 && s2 === s1.replace(/[A-Z]/gi, val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]());


// Solution 7
function isOpposite(s1,s2){
  return (s1==""&&s2=="")||s1.length!=s2.length ? false :
         [...s1].every((x,i)=>Math.abs(x.charCodeAt()-s2[i].charCodeAt())==32)
}


// Solution 8
const isOpposite = (s1, s2) => !!(s1) && [...s1]
  .map(c => c[`to${c <= 'Z' ? 'Low' : 'Upp'}erCase`]())
  .join`` === s2;


// Solution 9
isOpposite = (s1,s2) => !!s1 && s2 == s1[`split`]('')
                      [`map`](element => element[`${element < 'a' ? 'toLowerCase' : 'toUpperCase'}`]())
                      [`join`]('')


// Solution 10
function isOpposite(s1,s2){
  if (!s1.length) return false;
  const lowerCaseS1 = s1.toLowerCase().split('');
  s1 = [...s1].map((el, i) => el === lowerCaseS1[i] ? el.toUpperCase() : el.toLowerCase()).join('');
  return s1 === s2;
}


// Solution 11
const isOpposite = (s1, s2) => {
  if (s1 != '' && s2 != '' && s1.length == s2.length)
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] == s2[i])
        return false
    }
  else
    return false
  return true
}


// Solution 12
function isOpposite(s1,s2){
  if (!(s1 && s2)) return false;
  return s1 === s2.split('').map(e=>e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase() ).join('')
  
}


// Solution 13
function isOpposite(s1,s2){
  const invert = str => [...str].map(e=> e.charCodeAt() < 91 ? e.toLowerCase() : e.toUpperCase()).join('')
  return s1 === '' || s2 === '' ? false : invert(s1) === s2
}


// Solution 14
const isOpposite = (a, b) => {
  if (!a && !b) return false;
  return (
    [...a]
      .map((i) => (i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()))
      .join("") === b
  );
};