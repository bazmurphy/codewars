// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

console.log(hoopCount(3))
// "Keep at it until you get it"
console.log(hoopCount(11))
// "Great, now move on to tricks"


// Solution 1
function hoopCount(n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}


// Solution 2
function hoopCount(n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
        ? 'Great, now move on to tricks'
        : 'Keep at it until you get it';
}


// Solution 3
const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';


// Solution 4
function hoopCount(n) {
    return n >= 10 ?
        "Great, now move on to tricks" :
        "Keep at it until you get it";
}


// Solution 5
function hoopCount(n) {
    if (Number.isInteger(n)) {
        if (n >= 10) {
            return "Great, now move on to tricks";
        } else {
            return "Keep at it until you get it";
        };
    };
}


// Solution 6
function hoopCount(n) {
    let times = n;
    let error = 'Invalid input';
    let congrats = 'Great, now move on to tricks';
    let encourage = 'Keep at it until you get it';
    if (times <= 9) {
        return encourage;
    } else if (times >= 10) {
        return congrats;
    } else {
        return error;
    }
}


// Solution 7
const hoopCount = n => n > 9 ? 'Great, now move on to tricks' : 'Keep at it until you get it';


// Solution 8
function hoopCount(n) {
    if (n >= 10) { return ("Great, now move on to tricks") }
    else { return ("Keep at it until you get it") }
}


// Solution 9
hoopCount = (O) => O >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";


// Solution 10
hoopCount = n => n > 9 ? 'Great, now move on to tricks' : 'Keep at it until you get it'


// Solution 11
function hoopCount(n) {
    return n > 9 ?
        "Great, now move on to tricks" :
        "Keep at it until you get it";
}


// Solution 12
function hoopCount(n) {
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}

// const hoopCount = n => n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";

// function hoopCount(n) {
//   switch(true) {
//     case n < 10: return "Keep at it until you get it";
//     case n >= 10: return "Great, now move on to tricks";
//     default: return "Invalid value, please try again"
//   }
// }