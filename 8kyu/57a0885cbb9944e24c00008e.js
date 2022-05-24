// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(string) {

    let newString = [] 

    for (let i = 0; i < string.length; i++) {
            
        if (string[i] !== '!') {
            newString += string[i]
        }
    }

    return newString;
}

console.log(removeExclamationMarks("Hello World!"));
// Hello World


// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");
// console.log(result);
// "Visit W3Schools"


// Solution 1
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}


// Solution 2
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}


// Solution 3
const removeExclamationMarks = s => s.replace(/!/g,"") ;


// Solution 4
function removeExclamationMarks(s) {
    return s.split('!').join('');
}


// Solution 5
let removeExclamationMarks = (s) => s.replace(/!/g,'');


// Solution 6
function removeExclamationMarks(s) {
    var arr =s.split("");
    arr = arr.filter(function(e){
          return e !== "!";
      })
      return arr.join("");
}