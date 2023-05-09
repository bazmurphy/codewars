// Last Survivor

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

// Notes

// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

function lastSurvivor(letters, coords) {
  lettersCopy = letters;
  coordsCopy = coords;
  // i do not want to mutate the original arguments
  do {
    lettersCopy = lettersCopy.split("").filter((element, index) => index !== coords[0]).join("");
    coordsCopy.splice(0,1);
  } while (coordsCopy.length > 0);
  return lettersCopy;
}

console.log(lastSurvivor('abc', [1, 1]));
// 'a'
console.log(lastSurvivor('kbc', [0, 1]));
// 'b'
console.log(lastSurvivor('zbk', [2, 1]));
// 'z'
console.log(lastSurvivor('c', []));
// 'c'
console.log(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1]));
// 'd'


// Solution 1
function lastSurvivor(letters, coords) {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1)
  }
  return letters.join('')
}


// Solution 2
function lastSurvivor(string, indices) {
  const arr = [...string];
  for (const i of indices) arr.splice(i, 1)
  return arr[0];
}


// Solution 3
function lastSurvivor(letters, coords) { return coords.reduce((letters, coord) => letters.slice(0, coord) + letters.slice(coord + 1), letters); }




// Solution 4
function lastSurvivor(letters, coords) {
  const arr = [...letters]
  coords.map((el, i, ar) => arr.splice(el, 1))
  return arr[0]
}


// Solution 5
function lastSurvivor(letters, coords) {
  let result = letters.split('');
  for (let i of coords) {
    result.splice(i, 1);
  }

  return result.join('');
}


// Solution 6
function lastSurvivor(letters, coords) {
  for (let c of coords)
    letters = letters.substr(0, c) + letters.substr(c + 1);
  return letters;
}


// Solution 7
// recursion & pure functions
const R = require('ramda')
const lastSurvivor = (letters, coords) => {
  if (R.isEmpty(coords)) return R.head(letters)
  return lastSurvivor(R.remove(R.head(coords), 1, letters), R.tail(coords))
}


// Solution 8
const lastSurvivor = (l, c) => c.length == 0 ? l : lastSurvivor(l.slice(0, c[0]) + l.slice(c[0] + 1), c.slice(1, c.length));


// Solution 9
function lastSurvivor(letters, coords) {
  let lsplit = letters.split("");
  for (let i = 0; i < lsplit.length; i++) {
    for (let j = 0; j < coords.length; j++) {
      lsplit.splice(coords[j], 1);
    }
  }
  let leftOver = lsplit[0];
  return leftOver;
}


// Solution 10
function lastSurvivor(letters, coords) {

  let newStr = letters.split("")

  for (let coord of coords) {
    newStr.splice(coord, 1)
  }
  return newStr.join("")
}


// Solution 11
function lastSurvivor(str, array) {
  if (array.length === 0) {
    return str;
  } else {
    let stringArray = str.split("");
    const nextIdx = array.shift();
    stringArray.splice(nextIdx, 1);
    return lastSurvivor(stringArray.join(""), array);
  }
}


// Solution 12
function lastSurvivor(letters, coords) {
  const parts = letters.split('')
  coords.forEach((el) => {
    parts.splice(el, 1)
  })
  return parts.join('')
}