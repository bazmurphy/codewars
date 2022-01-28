// repeatIt

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example

// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

var repeatIt = function(str, n) {
    if (typeof str !== 'string') {
        return 'Not a string'
    } else {
        let outputString = ""
        for (let i = 1; i <= n; i++) {
            outputString += str
        }
        return outputString;
    }
}

console.log(repeatIt("*",3))
// "***"
console.log(repeatIt("Hello",11))
// "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"


// Solution 1
const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'


// Solution 2
var repeatIt = function(str, n) {
    return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
}


// Solution 3
var repeatIt = function(str, n) {
    var output = '';
    if (typeof(str) !== 'string') {
      return "Not a string";
    }
    for (var i = 0; i<n; i++) {
      output += str;
    }
  
    return output;
}


// Solution 4
var repeatIt = function(str, n) {
    return typeof str=="string" ? String.repeat(str,n) : "Not a string";
}


// Solution 6
function repeatIt(str, n) {
    if(typeof str !== 'string') return 'Not a string';
    return Array.apply(null, Array(n + 1)).join(str);
}