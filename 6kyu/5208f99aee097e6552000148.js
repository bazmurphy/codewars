// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {

    let output = [];
       
    let arr = string.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            output.push(' ', arr[i])
        } else {
            output.push(arr[i])
        }
    }
    
    return output.join('');

}


console.log(solution('camelCasing'));
// 'camel Casing'
console.log(solution('camelCasingTest'));
// 'camel Casing Test'


// Solution 1
function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));

}


// Solution 2
function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}


// Solution 3
function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}


// Solution 4
const solution = string => string.replace(/[A-Z]/g, ' $&');


// Solution 5
function solution(string) {
    return string.replace(/[A-Z]/g, function (c) { return " " + c; });
}


// Solution 6
const solution = string => {
    return [...string].map((char) => {
        return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
}


// Solution 7
function solution(string) {
    return string.replace(/(?=[A-Z])/g, " ")
}


// Solution 8
function solution(text) {
    return text.split(/(?=[A-Z])/).join(' ');
}


// Solution 9
function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach(letter => {
        if (letter.toUpperCase() == letter)
            res += " " + letter
        else
            res += letter
    })
    return res;
}


// Solution 10
function solution(string) {
    return string.split('').map(s => {
        if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90)
            return ' ' + s;
        else
            return s;
    }).join('');
}


// Solution 11
const solution = string => string.replace(/([A-Z])/g, ' $1');


// Solution 12
function solution(string) {
    var chars = string.split('');
    var resultArray = [];
    chars.forEach(function (c) {
        if (c.toUpperCase() === c) {
            resultArray.push(' ');
        }
        resultArray.push(c);
    });
    return resultArray.join('');
}