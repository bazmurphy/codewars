// Get number from string

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {

    // console.log(s)
    // console.log(Number(s.match(/\d+/g).reduce((pV, cV) => pV + cV)))
      
    return Number(s.match(/\d+/g).reduce((pV, cV) => pV + cV))
      
}

console.log(getNumberFromString("1"));
// 1
console.log(getNumberFromString("123"));
// 123
console.log(getNumberFromString("this is number: 7"));
// 7


// Solution 1
function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
}


// Solution 2
function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ""));
}


// Solution 3
function getNumberFromString(s) {
    return parseInt(s.replace(/[^\d]+/g, ""), 10)
}


// Solution 4
const getNumberFromString = (str) => +str.replace(/[^\d]/g, '');


// Solution 5
const getNumberFromString = s => parseInt(s.replace(/\D/g, ``));


// Solution 6
const getNumberFromString = s => parseInt(s.match(/\d/g).join(''));


// Solution 7
const getNumberFromString = (s) => parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""))


// Solution 8
function getNumberFromString(s) {
    return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''))
}