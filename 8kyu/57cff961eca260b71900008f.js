// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u)
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

function isVow(a){
    
  for (let i = 0; i < a.length; i++)
    if (a[i] === 97) {
        a[i] = 'a'
    } else if (a[i] === 101) {
        a[i] = 'e'
    } else if (a[i] === 105) {
        a[i] = 'i'
    } else if (a[i] === 111) {
        a[i] = 'o'
    } else if (a[i] === 117) {
        a[i] = 'u'
    }

    return a;
}

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
isVow([101,121,110,113,113,103,121,121,101,107,103])
// ["e",121,110,113,113,103,121,121,"e",107,103]

function isVow(a) {

    for (let i = 0; i < a.length; i++) {

        if ('aeiou'.indexOf(String.fromCharCode(a[i])) !== -1) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
            a[i] = String.fromCharCode(a[i])
        }
    }

    return a;
}

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
isVow([101,121,110,113,113,103,121,121,101,107,103])
// ["e",121,110,113,113,103,121,121,"e",107,103]


// Solution 1
function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }


// Solution 2
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)


// Solution 3
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)


// Solution 4
const isVow = a =>{
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    return a.map( num => map[num] ? map[num] : num);
  }


// Solution 6
function isVow(a){
    return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}