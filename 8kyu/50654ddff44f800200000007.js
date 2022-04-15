// Short Long Short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

//     The length of string is not always the same as the number of characters

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
    return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution('45', '1'));
// '1451'
console.log(solution('13', '200'));
// '1320013'
console.log(solution('Soon', 'Me'));
// 'MeSoonMe'
console.log(solution('U', 'False'));
// 'UFalseU'


// Solution 1
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}


// Solution 2
function solution(a, b){
    return (a.length > b.length) ? b + a + b : a + b + a;
}


// Solution 3
// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);


// Solution 4
const solution = (a, b) =>  a < b ? a + b + a : b + a + b;


// Solution 5
var solution = (a, b) => a.length > b.length ? b+a+b : a+b+a;


// Solution 6
function solution(a, b){
    const arr = []
    if (a + b > 0){
    if (a > b) arr.push(b), arr.push(a), arr.push(b)
    if (b > a) arr.push(a), arr.push(b), arr.push(a)
  } else if (a.length > b.length) arr.push(b), arr.push(a), arr.push(b)
    else if (b.length > a.length) arr.push(a), arr.push(b), arr.push(a)
      return arr.join("")
}


// Solution 7
const solution = ( i => () => [
    'abba',
    'baab',
  ] [i++] ) ( 0 ) ;


// Solution 8
function solution(a, b){
    return a.length > b.length
      ? b.concat(a).concat(b)
      : a.concat(b).concat(a);
}


// Solution 9
function solution(a, b){
    var short = a.length <= b.length ? a : b;
    var long = b.length >=a.length  ? b :a;
    
    
    return short  + long + short;
}