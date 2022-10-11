// String ends with?

// Description:

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
    if (ending === '')
        return true;
    else {
        console.log(`str: ${str} ending: ${ending}`)
        return str.slice(-ending.length) === ending
    }
}

console.log(solution('abcde', 'cde'))
// true
console.log(solution('abcde', 'abc'))
// false


// Solution 1
function solution(str, ending) {
    return str.endsWith(ending);
}


// Solution 2
const solution = (str, ending) => str.endsWith(ending);


// Solution 3
function solution(str, ending) {
    if (typeof (str) != "string" || typeof (ending) != "string")
        throw "wrong type";
    if (ending.length > str.length)
        return false;
    return str.substr(str.length - ending.length, ending.length) == ending;
}


// Solution 4
function solution(str, ending) {
    return str.substr(-ending.length) == ending;
}


// Solution 5
const solution = (str, ending) => str.endsWith(ending)


// Solution 6
function solution(str, ending) {
    return str.slice(0 - ending.length) === ending;
}


// Solution 7
const solution = (s, t) => s.endsWith(t);


// Solution 8
function solution(str, ending) {
    var l = ending.length;
    var str = str.slice(-l);
    return str.match(ending) ? true : false;
}


// Solution 9
function solution(str, ending) {
    return ending === str.substr(str.length - ending.length, str.length);
}


// Solution 10
const solution = (s, e) => s.endsWith(e)