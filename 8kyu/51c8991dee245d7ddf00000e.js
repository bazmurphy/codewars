// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}


console.log(reverseWords("hello world!"))
// "world! hello"
console.log(reverseWords("yoda doesn't speak like this"))  
// "this like speak doesn't yoda"
console.log(reverseWords("foobar"))  
// "foobar"
console.log(reverseWords("kata editor"))  
// "editor kata"
console.log(reverseWords("row row row your boat"))  
// "boat your row row row"


// Solution 1
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}


// Solution 2
const reverseWords = (str) => str.split(" ").reverse().join(" ");


// Solution 3
function reverseWords(str){
    return str.trim().split(' ').reverse().join(' ');
}


// Solution 4
const reverseWords = s => s
  .split` `
  .reverse()
  .join` `;


// Solution 6
function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
      reverse.push(words[i]);
      
    }
    return reverse.join(" ")
}