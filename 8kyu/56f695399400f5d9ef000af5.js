// Is this my tail ?

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be strings, and normal letters.

// For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.

function correctTail(body, tail) {
  
    // let sub = body.substr(body.length - tail.length)
  
    // if (sub = tail) {
    //     return true
    // } else { 
    //     return false
    // }

    return tail === body.substr(body.length - tail.length) ? true : false
}

console.log(correctTail("Fox", "x"))
// true
console.log(correctTail("Rhino", "o"))
// true
console.log(correctTail("Meerkat", "t"))
// true


// Solution 1
function correctTail(bod, tail) {
    return bod[bod.length - 1] === tail
}


// Solution 2
const correctTail = (x, y) => x.endsWith(y)


// Solution 3
const correctTail = (body, tail) => body.slice(-1) === tail[0]


// Solution 4
function correctTail(body, tail) {

    var sub = body.substr(body.length - (tail.length));

    if (sub === tail) {
        return true;
    }
    else {
        return false;
    }
}


// Solution 5
const correctTail = (body, tail) => body[body.length - 1] === tail;


// Solution 6
function correctTail(body, tail) {
    return (tail == body.charAt(body.length - 1)) ? true : false;
}


// Solution 7
function correctTail(body, tail) {
    return body.substr(body.length - tail.length) === tail;
}


// Solution 8
const correctTail = (body, tail) => body.slice(-1) === tail  


// Solution 9
const correctTail = (body, tail) => body.substr(-1) == tail;


// Solution 10
function correctTail(body, tail) {
    return body.substr(body.length - (tail.length)) == tail;
}


// Solution 11
const correctTail = (bod, tail) => bod.split("").reverse()[0] === tail;


// Solution 12
const correctTail = (body, tail) => body.charAt(body.length - 1) === tail;