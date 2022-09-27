// Mumbling

// This time no story, no theory.The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    // make the string lower case
    // first of all split the string into an array
    // go through the array
    // get each character
    // get the index of that character
    // make sure the first character is upper case
    // then add (index) many times more of that character
    // join it back together as a string with a -

    return s
        .toLowerCase()
        .split("")
        .map((element, index) => element[0].toUpperCase() + element.repeat(index))
        .join("-");
}

console.log(accum("ZpglnRxqenU"));
// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB"));
// "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU"));
// "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM"));
// "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC"));
// "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"


// Solution 1
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


// Solution 2
function accum(s) {
    return s.split('').map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');
}


// Solution 3
function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
}


// Solution 4
function accum(s) {
    return [...s].map((element, index) => {
        return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}


// Solution 5
function accum(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        var row = '';
        for (var j = 0; j < i + 1; j++) {
            row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        res.push(row);
    }
    return res.join('-');
}


// Solution 6
function accum(s) {
    return s.split('')
        .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
        .join('-');
}


// Solution 7
function accum(s) {
    var array = [];
    for (i = 0; i < (s.length); i++) {
        array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
    };
    return array.join("-");
}


// Solution 9
function accum(s) {
    return s
        .split('')
        .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
        .join('-')
}


// Solution 10
function accum(s) {
    return (s.split('').map((c, i) => {
        var res = c.toUpperCase();
        for (var j = 1; j <= i; j++) {
            res += c.toLowerCase();
        }
        return res;
    }).join('-'));
}


// Solution 11
const repeat = (s, n) => Array.from({ length: n }, () => s).join("")
const accum = (s) => s.split("").map((c, i) => c.toUpperCase() + repeat(c.toLowerCase(), i)).join("-")


// Solution 12
const accum = s => s.split("").map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");