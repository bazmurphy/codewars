// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input / output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

    // check if same number of X and O
    // case insensitive
    // string can contain any char
    // return boolean

    // create a count for X
    // create a counter for O
    // iterate through the String
    // count how many X
    // count how many O 
    // compare the count
    // if count the same: return true
    // if count different: return false

    let countOfX = 0;
    let countOfO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            countOfX++;
        }
        else if (str[i].toLowerCase() === 'o') {
            countOfO++;
        }
    }

    return countOfX === countOfO;

}

console.log(XO('xo') );
// true
console.log(XO("xxOo") );
// true
console.log(XO("xxxm") );
// false
console.log(XO("Oo") );1
// false
console.log(XO("ooom") );
// false


// Solution 1
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}


// Solution 2
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


// Solution 3
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


// Solution 4
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}


// Solution 5
function XO(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'x') sum++;
        if (str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}


// Solution 6
function XO(str) {
    return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
}


// Solution 7
function XO(str) {
    let countX = countStr(str, 'x');
    let countO = countStr(str, 'o');
    return countX === countO;
}

function countStr(s, match) {
    let regex = new RegExp(match, "gi");
    return (s.match(regex) || []).length;
}


// Solution 8
function XO(str) {
    if (str == "" || str == null) return true;
    str = str.toLowerCase();
    var list = str.split("");
    var xNum = 0;
    var oNum = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === 'x') {
            xNum++;
        }
        if (list[i] === 'o') {
            oNum++;
        }
    }
    if (xNum === oNum)
        return true;
    return false;
}


// Solution 9
function XO(str) {
    str = str.toLowerCase();
    return (str.match(/o/g) || []).length === (str.match(/x/g) || []).length;
}


// Solution 10
function XO(str) {
    return str = str.toLowerCase(), str.split("o").length == str.split("x").length
}