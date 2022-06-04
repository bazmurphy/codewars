// Character Frequency

// Description

// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
// Explanation

// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example

charFreq("I like cats")
// {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}



function charFreq(message) {

    let returnObject = {}

    for (char in message) {
        // console.log(message[char])
        if (returnObject.hasOwnProperty(message[char]) == false) {
            returnObject[message[char]] = 1 
        } else {
            returnObject[message[char]] += 1
        }        
        
    }

    // console.log(returnObject)
    return returnObject;

}



// Solution 1
function charFreq(message) {
    return message.split('').reduce(function(acc, cur) {
      return (acc[cur] = (acc[cur] || 0) + 1) && acc;
    }, {});
}


// Solution 2
function charFreq(message) {
    let arr = message.split('')
    let item = {}
    for (let i = 0; i < arr.length; i++) {
      if (!item[arr[i]]) {
        item[arr[i]] = 1
      } else item[arr[i]]++
    }
    return item 
}


// Solution 3
function charFreq(message) {
    a={}
    for(v of message)if(a[v])a[v]++
    else a[v]=1
    return a
}


// Solution 4
const charFreq = message =>
  [...message].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});


// Solution 5
function charFreq(message) {
    var obj = {};
    for (var i=0; i<message.length; i++) {
      obj[message[i]] = ++obj[message[i]] || 1;
    }
    return obj;
}


// Solution 6
const charFreq = msg => [...msg].reduce((result, ch) => ({...result, [ch]: (result[ch] || 0) + 1}), {});


// Solution 7
function charFreq(message) {
    let obj = {}
    message.split('').forEach(x => obj[x] = (obj[x] || 0) + 1 )
    return obj
}