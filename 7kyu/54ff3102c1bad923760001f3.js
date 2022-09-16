// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'a'
        || str[i].toLowerCase() === 'e'
        || str[i].toLowerCase() === 'i'
        || str[i].toLowerCase() === 'o'
        || str[i].toLowerCase() === 'u') {
          vowelsCount++
        }
    }
    
    return vowelsCount;
}

console.log(getCount("abracadabra"));
// 5


// Solution 1
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}


// Solution 2
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
}


// Solution 3
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}


// Solution 4
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


// Solution 5
function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length:0;
}


// Solution 6
function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length
}


// Solution 7
function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
}


// Solution 8
function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
}


// Solution 9
const getCount = str => str.replace(/[^aeiou]/g, '').length;


// Solution 10
function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
}