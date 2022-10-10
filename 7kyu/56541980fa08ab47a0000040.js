// Printer Errors

// In a factory a printer prints labels for boxes. 
// For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {

    let errors = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'n' ||
            s[i] === 'o' ||
            s[i] === 'p' ||
            s[i] === 'q' ||
            s[i] === 'r' ||
            s[i] === 's' ||
            s[i] === 't' ||
            s[i] === 'u' ||
            s[i] === 'v' ||
            s[i] === 'w' ||
            s[i] === 'x' ||
            s[i] === 'y' ||
            s[i] === 'z') {
                errors++;
            }
    }

    return `${errors}/${s.length}`
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
// "3/56"


// Solution 1
function printerError(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}


// Solution 2
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;


// Solution 3
function printerError(s) {
    var x = 0;
    var y = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i).includes("n")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("o")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("p")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("q")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("r")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("s")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("t")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("u")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("v")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("w")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("x")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("y")) {
            x++;
            y++;
        } else if (s.charAt(i).includes("z")) {
            x++;
            y++;
        } else {
            y++;
        }
    }
    var xString = x.toString();
    var yString = y.toString();
    var fraction = "/";
    return xString + fraction + yString;
}


// Solution 4
const printerError = ($) => [($.match(/[n-z]/g) || []).length, $.length].join('/')


// Solution 5
var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;


// Solution 6
var printerError = (s) => (s.match(/[n-z]/g) || []).length + '/' + s.length


// Solution 7
function printerError(s) {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}


// Solution 8
function printerError(s) {
    var m = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
            m++;
        }
    }
    return m + '/' + s.length;
}


// Solution 9
function printerError(s) {
    var allowed = 'abcdefghijklm';
    var error = 0;

    s.split('').forEach(function (item) {
        return (allowed.indexOf(item) === -1) ? error++ : '';
    });

    return error + '/' + s.length;
}


// Solution 10
const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;