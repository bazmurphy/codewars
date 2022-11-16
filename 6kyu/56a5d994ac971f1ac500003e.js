// Consecutive strings

// You are given an array(list) strarr of strings and an integer k.

// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling(length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)-- > "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return ""(return Nothing in Elm, "nothing" in Erlang).

// Note

// consecutive strings: follow one after another without an interruption

function longestConsec(strarr, k) {
  // argument checking
  if (k <= 0 || k > strarr.length) {
    return "";
  } else {
    let longestCombination = "";
    let longestCombinationLength = 0;
    let longestCombinationIndexStart = 0;

    for (let i = 0; i < strarr.length; i++) {
      // console.log(`currentCombination: ${strarr.slice(i, i + k).join("")}`);
      // console.log(`currentCombinationLength: ${strarr.slice(i, i + k).join("").length}`);
      
      if (strarr.slice(i, i + k).join("").length > longestCombinationLength) {
        longestCombination = strarr.slice(i, i + k).join("");
        longestCombinationLength = strarr.slice(i, i + k).join("").length;
        longestCombinationIndexStart = i;
      }

    }

    // console.log(`longestCombination:${longestCombination}`);
    // console.log(`longestCombinationLength:${longestCombinationLength}`);
    // console.log(`longestCombinationIndexStart:${longestCombinationIndexStart}`);
    return strarr.slice(longestCombinationIndexStart, longestCombinationIndexStart + k).join("");
  }
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// "abigailtheta"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
// "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3));
// ""
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
// "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2));
// "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2));
// ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
// "ixoyx3452zzzzzzzzzzzz"
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15));
// ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0));
// ""


// Solution 1
function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}


// Solution 2
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}


// Solution 3
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }

  return strarr
    .map((value, index) => (
      strarr.slice(index, index + k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)

}


// Solution 4
function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 1) return "";
  let lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join('').length),
    i = lens.indexOf(Math.max(...lens));
  return strarr.slice(i, i + k).join('')
}


// Solution 5
function longestConsec(strarr, k) {
  var n = strarr.length;
  if ((n === 0) || (k > n) || (k <= 0)) return "";
  var arr = strarr.map(function (u) { return u.length; });
  var sm = 0;
  for (var i = 0; i < k; i++) sm += arr[i];
  var mx_sm = sm, mx_nd = k - 1;
  for (var u = k; u < n; u++) {
    sm = sm + arr[u] - arr[u - k];
    if (sm > mx_sm) {
      mx_sm = sm; mx_nd = u;
    }
  }
  var start = mx_nd - k + 1;
  return strarr.slice(start, mx_nd + 1).join("");
}


// Solution 6
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let result = '';
  for (let i = 0; i <= strarr.length - k; i++) {
    let str = '';
    for (let j = i; j < i + k; j++) {
      str += strarr[j];
    }
    if (result.length < str.length) {
      result = str;
    }
  }
  return result;
}


// Solution 7
const longestConsec = (a, k) => (k < 1 || a.length < 1 || k > a.length)
  // Test for k
  ? ''
  // Map Reduce for longest k combo string
  : a.map((_, i, a) => a.slice(i, i + k).join(''))
    .reduce((a, b) => a.length >= b.length ? a : b)


// Solution 8
function longestConsec(strarr, k) {
  var n = strarr.length,
    str = '';

  if (n = 0 || k > n || k <= 0) {
    return str;
  }

  for (var i = 0; i < strarr.length; i++) {
    var currentStr = strarr.slice(i, k + i).join('');
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  return str;
}


// Solution 9
function longestConsec(strarr, k) {
  if (k <= 0) { return '' }

  let max = ''

  for (let i = 0; i < strarr.length - k + 1; i++) {
    const str = strarr.slice(i, i + k).join('')
    if (str.length > max.length) { max = str }
  }
  return max
}


// Solution 10
function longestConsec(a, k) {
  return (a.length == 0 || k > a.length || k < 1) ? '' : a.reduce(function (s, c, i) {
    return i + k > a.length || s.length >= a.slice(i, i + k).join('').length ? s : a.slice(i, i + k).join('');
  }, '');
}


// Solution 11
function longestConsec(source, k) {
  return new Array(Math.max(0, Math.min(k >= 0 ? source.length - k + 1 : k, source.length)))
    .fill('')
    .map((s, i) => source.slice(i, i + k).join(''))
    .reduce((max, x) => max.length < x.length ? x : max, '');
}


// Solution 12
function longestConsec(strarr, k) {

  let long = strarr.slice(0, k).join('')
  if (k > strarr.length || k < 1) {
    return ''
  }
  for (let i = 0; i <= strarr.length - k; i++) {
    let temp = strarr.slice(i, i + k).join('')
    long = temp.length > long.length ? temp : long
  }
  return long
}


// Solution 13
function longestConsec(strarr, k) {
  if (!strarr.length || k <= 0 || k > strarr.length) return '';

  let max = '';
  for (let i = 0; i <= strarr.length - k; i++) {
    let str = (k === 1) ? strarr[i] : strarr.slice(i, i + k).join('');
    max = str.length > max.length ? str : max;
  }

  return max;
}


// Solution 14
const longestConsec = (strarr, k) =>
  k > strarr.length || k <= 0 ? `` :
    [...Array(strarr.length - k + 1)].reduce((pre, _, idx) => (str => str.length > pre.length ? str : pre)(strarr.slice(idx, idx + k).join(``)), ``);


