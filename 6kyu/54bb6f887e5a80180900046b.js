// longest_palindrome

// Longest Palindrome

// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:

// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

function longestPalindrome(s) {
  if (s.length === 0) {
    return 0;
  }

  let longestPalindrome = 0;

  for (let leftPointer = 0; leftPointer < s.length; leftPointer++) {
    for (let rightPointer = leftPointer + 1; rightPointer < s.length + 1; rightPointer++) {
      // console.log("leftPointer", leftPointer, "rightPointer", rightPointer);
      const currentChunk = s.slice(leftPointer, rightPointer);
      const currentChunkReversed = currentChunk.split("").reverse().join("");
      if (currentChunk === currentChunkReversed) {
        if (longestPalindrome < currentChunk.length) {
          longestPalindrome = currentChunk.length;
        }
      }
    }
  }

  return longestPalindrome;
}

console.log(longestPalindrome("a"));
// 1
console.log(longestPalindrome("aa"));
// 2
console.log(longestPalindrome("baa"));
// 2
console.log(longestPalindrome("aab"));
// 2
console.log(longestPalindrome("zyabyz"));
// 1
console.log(longestPalindrome("BaaBcd"));
// 4
console.log(longestPalindrome("baablkj12345432133d"));
// 9
console.log(longestPalindrome(""));
// 0
console.log(longestPalindrome("Aa"));
// 1

// Solution 1
var longestPalindrome = function (s) {
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
};

// Solution 2
longestPalindrome = function (s) {
  var longest = 0;
  var length = s.length;

  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j <= length; j++) {
      var str = s.slice(i, j);
      var l = str.length;
      if (isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
};

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}

// Solution 3
longestPalindrome = function (s) {
  var a = s.split("");
  var length = 0;
  a.forEach(function (c, i) {
    length = Math.max(exploreArrayForImpairPalindrome(i, a), length);
    length = Math.max(exploreArrayForPairPalindrome(i, a), length);
  });
  return length;
};

exploreArrayForImpairPalindrome = function (i, a) {
  var length = 1;
  var iter = 1;
  while (thoseValuesAreEquals(i, i, a, iter)) {
    length += 2;
    iter++;
  }
  return length;
};

exploreArrayForPairPalindrome = function (i, a) {
  var length = 0;
  var iter = 0;
  while (thoseValuesAreEquals(i, i + 1, a, iter)) {
    length += 2;
    iter++;
  }
  return length;
};

thoseValuesAreEquals = function (i1, i2, a, iter) {
  return a[i1 - iter] && a[i1 - iter] === a[i2 + iter];
};

// Solution 4
longestPalindrome = function (s) {
  var l = 0;
  for (var i = 0; i < s.length; i++)
    for (var j = i; j <= s.length; j++)
      if (s.substring(i, j) === s.substring(i, j).split("").reverse().join("") && s.substring(i, j).length > l)
        l = s.substring(i, j).length;

  return l;
};

// Solution 5
const longestPalindrome = (s) => {
  let result = 0;
  const l = s.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j <= l; j++) {
      const sub = s.slice(i, j);
      if (sub === sub.split``.reverse().join``) {
        result = Math.max(result, sub.length);
      }
    }
  }
  return result;
};
