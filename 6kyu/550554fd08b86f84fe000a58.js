// Which are in?

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:

// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1, array2) {

  // let outputArray = [];
  // array1.forEach(array1Element => {
  //   if (array2.filter(array2Element => array2Element.includes(array1Element)).length > 0) {
  //     outputArray.push(array1Element);
  //   }
  // });
  // return outputArray.sort();

  return array1.filter(array1Element => array2.filter(array2Element => array2Element.includes(array1Element)).length > 0).sort();
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
// ["live", "strong"]
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))
// ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
// []


// Solution 1
function inArray(array1, array2) {
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}


// Solution 2
function inArray(arr1, arr2) {
  return arr1.filter(function (needle) {
    return arr2.some(function (haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}


// Solution 3
function inArray(a1, a2) {
  var str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}


// Solution 4
function inArray(a1, a2) {
  return a1.filter(sub => a2.some(whole => whole.includes(sub))).sort();
}


// Solution 5
function inArray(a1, a2) {
  var r = [];

  for (var i = 0; i < a1.length; i++) {
    var s1 = a1[i];

    for (var j = 0; j < a2.length; j++) {
      var s2 = a2[j];

      if (s2.indexOf(s1) != -1 && r.indexOf(s1) == -1) {
        r.push(s1);
      }
    }
  }

  return r.sort();
}


// Solution 6
function inArray(array1, array2) {
  return array1.filter(e => array2.join(' ').includes(e)).sort();
}


// Solution 7
function inArray(arr1, arr2) {
  return arr1.filter(str => arr2.some(str2 => str2.includes(str))).sort();
}


// Solution 8
function inArray(array1, array2) {
  return array1.filter(function (value) { return (array2.join('-').indexOf(value)) != -1 }).sort();
}


// Solution 9
function inArray(array1, array2) {
  return array1.filter(function (word) {
    return array2.join(' ').includes(word);
  }).sort();
}


// Solution 10
const inArray = (array1, array2) =>
  array1.filter(item =>
    array2.some(item2 => item2.includes(item)))
    .sort()


// Solution 11
const inArray = (arr1, arr2) => arr1.filter(item => new RegExp(item).test(arr2)).sort()


// Solution 12
function inArray(array1, array2) {
  return array1.filter((x) => array2.some((y) => y.includes(x))).sort()
}


// Solution 13
const inArray = (arr1, arr2) => {
  const s2 = arr2.join('#');
  return arr1.filter(item => s2.includes(item)).sort();
}


// Solution 14
function inArray(array1, array2) {
  let str = array2.toString();
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    if (str.includes(array1[i]))
      result.push(array1[i]);
  }

  return result.sort();
}