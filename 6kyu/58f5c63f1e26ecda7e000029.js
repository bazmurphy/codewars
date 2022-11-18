// Mexican Wave

// Introduction

// The wave(known as the Mexican wave in the English - speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms.
// Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats.
// In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd.When the gap in seating is narrow, the wave can sometimes pass through it.Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter - rotating waves have been produced. (Source Wikipedia)

// Task

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules

// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


function wave(str) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    let temp = str.split("");
    if (temp[i] !== " ") {
      temp[i] = temp[i].toUpperCase();
      output.push(temp.join(""));
    }
  }
  return output;
}


console.log(wave("hello"));
// ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

console.log(wave("codewars"));
// ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]

console.log(wave(""));
// []

console.log(wave("two words"));
// ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]

console.log(wave(" gap "));
// [" Gap ", " gAp ", " gaP "]


// Solution 1
function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
  });

  return result;
}


// Solution 2
function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}


// Solution 3
var wave = w => [...w].map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1)).filter(a => a != w)


// Solution 4
const wave = str => 
  [...str].map((s, i) => 
      str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
  ).filter(x => x != str);


// Solution 5
const wave = s => Array.from(s, (_, i) => /\s/.test(s[i]) ? null : s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1)).filter(Boolean);


// Solution 6
function wave(str) {
  return str.split('').map((l, i, a) => {
    let c = a.slice();
    c[i] = c[i].toUpperCase();
    return c.join('');
  }).filter((w, i) => w[i] !== ' ');
}


// Solution 7
function wave(s) {
  // Code here
  let w = []
  for (let i = 0; i < s.length; i++) {
    w.push(s.substring(0, i) + s.charAt(i).toUpperCase() + s.slice(i + 1))

  }
  return w.filter(x => x != s);
}


// Solution 8
function wave() {
  var s = arguments[0];
  console.log(arguments[0]);
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    var n = ''
    for (var j = 0; j < s.length; j++) {
      if (j === i) {
        n += s[j].toUpperCase();
      } else {
        n += s[j];
      }
    }
    arr.push(n);
  }
  var finishArr = [];
  var ar1 = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i][j] === arr[i][j].toUpperCase() && arr[i][j] !== ' ')
        count++;
    }
    if (count === 1) {
      ar1.push(arr[i]);
    }
  }
  return ar1;
}


// Solution 9
const wave = str => str.split("").reduce((acc, val, i, [...arr]) => {
  if(val === " ") return acc;
  arr[i] = arr[i].toUpperCase();
  acc.push(arr.join(""));
  return acc;
}, []);


// Solution 10
function wave() {
  const str = wave.arguments[0].toLowerCase();
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) !== ' ') {
      const cap = str.charAt(i).toUpperCase();
      const front = str.substr(0, i);
      const back = str.slice(i + 1);
      arr.push(front + cap + back);
    }
  }
  return arr;
}



// Solution 11
function wave(str) {

  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      const s = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length);
      result.push(s);
    }
  }

  return result;
}


// Solution 12
function wave(str) {
  return str.split("").map((a, index) => `${str.substring(0, index)}${str[index].toUpperCase()}${str.substring(index + 1)}`).filter(a => a !== str)
}


// Solution 13
function wave(str){
  let result = []
  
  if(str) {
    for(let i = 0; i < str.length; i++){
      if(str[i] !== " ") {
        let newStr = str.substring(0, i) + str.charAt(i).toUpperCase() + str.substring(i + 1)
        result.push(newStr)
      }
    }
  }
  
  return result
}


// Solution 14
function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return arr;
}