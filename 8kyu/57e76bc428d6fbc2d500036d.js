// Convert a string to an array

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
  return string.split(" ");
}

console.log(stringToArray("Robin Singh"));
// ["Robin", "Singh"]
console.log(stringToArray("I love arrays they are my favorite"));
// ["I", "love", "arrays", "they", "are", "my", "favorite"]


// Solution 1
function stringToArray(string){
  return string.split(' ');
}


// Solution 2
const stringToArray = string => string.split(' ');


// Solution 3
stringToArray=(s)=>s.split(' ')


// Solution 4
function stringToArray(string){
    var result = [];
    var traverse = function foo(string){
        for(var i=0;i<string.length;i++){
            var chr = string.charAt(i);
            if(chr === " "){
                result.push(string.slice(0,i));
                foo(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    traverse(string);
    return result;
}


// Solution 5
const stringToArray = ( $ ) => $.split` `;


// Solution 6
function stringToArray(s){ return s.split(' ')}


// Solution 7
const stringToArray = (s = '') => s.split(' ')