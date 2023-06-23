// First non-repeating character

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {

  let answer;
  // console.log(s);

  if (s.length === 0) {
    return "";
  } else {  
    let characters = {};
    for (let i = 0; i < s.length; i++) {
      if (characters.hasOwnProperty(s[i].toLowerCase())) {
        characters[s[i].toLowerCase()] += 1;
      } else {
        characters[s[i].toLowerCase()] = 1;
      }
    }
    
    // console.log(characters);

    if (Object.keys(characters).length === 0) {
      return "";
    } else {
      for (item in characters) {
        if (characters[item] > 1) {
          delete characters[item];
        }
      }
      if (Object.keys(characters).length === 0) {
        return "";
      } else {
        answer = Object.keys(characters)[0];
      }
    }
  }
  
  if (s.indexOf(answer) === -1) {
    if (answer === answer.toLowerCase()) {
      return answer.toUpperCase()
    } else {
      return answer.toLowerCase()
    }
  } else {
    return answer;
  }
}

console.log(firstNonRepeatingLetter('a'));
// 'a'
console.log(firstNonRepeatingLetter('stress'));
// 't'
console.log(firstNonRepeatingLetter('moonmen'));
// 'e'
console.log(firstNonRepeatingLetter('abba'));
// ''
console.log(firstNonRepeatingLetter('sTreSS'));
// 'T'


// Solution 1
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}


// Solution 2
function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}


// Solution 3
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}


// Solution 4
function firstNonRepeatingLetter(str){
  return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
}


// Solution 5
function firstNonRepeatingLetter(s) {
  var map, len, i, char

  map = {}
  len = s.length

  for (i = 0; i < len; i++) {
      char = s[i].toLowerCase()
      map[char] = (map[char] || 0) + 1
  }

  for (i = 0; i < len; i++) {
      char = s[i]
      if (map[char.toLowerCase()] == 1)
          return char
  }

  return ''
}


// Solution 6
function firstNonRepeatingLetter(s) {
  var search = s.toLowerCase();
  
  for (var i = 0; i < search.length; ++i) {
      var str = search.slice(0, i) + search.slice(i + 1);
      if((str.indexOf(search[i]) === -1)) {
          return s[i];
      }
  }
  return '';
}


// Solution 7
const firstNonRepeatingLetter = s =>
  s[[...s.toLowerCase()].findIndex((c, _, s) => s.indexOf(c) === s.lastIndexOf(c))] || "";


// Solution 8
const firstNonRepeatingLetter = s => [...s].find(ch => s.match(new RegExp(ch, 'gi')).length === 1) ||'';


// Solution 9
function firstNonRepeatingLetter(s) {
  return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || '';
}


// Solution 10
const firstNonRepeatingLetter = s =>
  [...s].find(val => !s.match(new RegExp(val, `gi`))[1]) || ``;


// Solution 11
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < s.length; ++i) {
    if(str.split(str[i]).length === 2) return s[i];
  }
  return '';
}


// Solution 12
function firstNonRepeatingLetter(s) {
  var unique = {};
  
  if(s.length === 0) return '';
  
  s.split('').forEach(function(val, i) { 
    var lowerVal = val.toLowerCase();
    if(!unique.hasOwnProperty(lowerVal)) {
      unique[lowerVal] = [];
    }
    unique[lowerVal].push(val);
  });
  
  for(var prop in unique) {
    if(unique[prop].length === 1) return unique[prop][0];
  }
  
  return '';
  
}


// Solution 13
const firstNonRepeatingLetter = string => {
  if (!string) return "";
  const arr = [];
  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    let item = arr.find(
      i => i.character.toLowerCase() === character.toLowerCase()
    );
    if (item) {
      item.count++;
    } else {
      arr.push({
        character,
        count: 1
      });
    }
  }

  const firstNonRepeatingLetter = arr.find(i => i.count === 1);
  if (!firstNonRepeatingLetter) return "";
  return firstNonRepeatingLetter.character;
};


// Solution 14
function firstNonRepeatingLetter(s) {
  var counter = new Counter(Array.from(s.toLowerCase()));
  return Array.prototype.find.call(s, (si) => counter[si.toLowerCase()] == 1) || '';
}

function Counter(array) {
  array.forEach((ai) => this[ai] = (this[ai] || 0) + 1);
}