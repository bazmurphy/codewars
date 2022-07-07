// Is it a number ?

// Given a string s, write a method(function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")


function isDigit(s) {
   
    console.log(s, typeof s)

    // if (s[0] === '-') {
    //     s = s.substring(1, s.length)
    // }

    // s = parseFloat(s);
    // console.log(s, typeof s)

    // if (parseInt(s) === 'NaN') {
    //     return false;
    // } else {
    //     return true;
    // }
       
    // return Number(s) === 'NaN' ? false : true;

    // return Number(s) ? true : false;

    // if (Number(s) === 'NaN') {
    //    return false
    // } else {
    //    return true
    // }

    // return parseFloat(s) ? true : false;

    return Number(s) === parseFloat(s)  

}

console.log(isDigit("3"));
// true
console.log(isDigit("  3  "));
// true
console.log(isDigit("-3.23"));
// true
console.log(isDigit("3-4"));
// false
console.log(isDigit("  3   5"));
// false
console.log(isDigit("3 5"));
// false
console.log(isDigit("zero"));
// false


// Solution 1
function isDigit(s) {
    return s == parseFloat(s);
}


// Solution 2
const isDigit = s => /^-?\d+(\.\d+)?$/.test(s);


// Solution 3
function isDigit(s) {
    return parseFloat(s) === Number(s)
}


// Solution 4
function isDigit(s) {
    console.log(s)
    var s = s.trim().split(".")
    console.log(s)
    if (s.length > 2 || s[0].length === 0) {
        return false
    }

    for (var i = 0; i < s[0].length; i++) {
        if (typeof (Number(s[0][i])) && Number(s[0][i]) === Number(s[0][i]) && (s[0][i] !== " ")) {

        } else if (s[0][i] === "-" && i === 0) {

        } else {

            return false;
        }
    }
    if (s[1]) {
        for (var i = 0; i < s[1].length; i++) {
            if (typeof (Number(s[1][i])) && Number(s[1][i]) === Number(s[1][i])) {

            } else {
                return false
            }
        }
    }
    return true;
}


// Solution 5
const isDigit = str => !!str.trim() && !isNaN(str);


// Solution 6
const isDigit = s => +s === parseFloat(s)


// Solution 7
const isDigit = S => S.trim() !== '' && Number(S) === +S; 


// Solution 8
function isDigit(s) {
    return /^-?\d+\.?\d*$/.test(s.trim())
}


// Solution 9
class Tokenizer {
    constructor(string) {
        this.str = string.trim();
    }

    isNumber() {
        const iterator = this[Symbol.iterator]();
        let dotFlag = false;
        let beginFlag = false;
        let tmp;
        if (Tokenizer.isPrefix(iterator.next().value)) {
            beginFlag = true;
            iterator.next('next');
        }
        while (!(tmp = iterator.next()).done) {
            const value = tmp.value;
            if (Tokenizer.isDot(value) && !dotFlag && beginFlag) {
                iterator.next('next');
                dotFlag = true;
            }
            else if (Tokenizer.isDigit(value)) {
                iterator.next('next');
                beginFlag = true;
            }
            else return false;
        }
        return this.str.length > 0;
    }

    *[Symbol.iterator]() {
        const string = this.str;
        let ptr = 0;

        while (ptr < string.length) {
            const readingType = yield string[ptr];
            if (readingType === 'next')
                ptr += 1;
        }
    }

    static isDot(char) {
        const checker = /\./;
        return checker.test(char);
    }

    static isPrefix(char) {
        const checker = /[-|\+]/;
        return checker.test(char);
    }

    static isDigit(char) {
        const checker = /\d/; // useless ^, $
        return checker.test(char);
    }
}

function isDigit(s) {
    const checker = new Tokenizer(s);
    return checker.isNumber();
}


// Solution 10
function isDigit(s) {
    return !!s.trim() && +s == s
}


// Solution 11
function isDigit(s) {
    if (s == ' ' || s == '') return !!0;
    if (+s == 0) return !+[];
    return !!+s;
}


// Solution 12
function isDigit(s) {
    return isNaN(parseInt(s)) || s.includes(' ') || s.includes(s[0] + '-') ? false : true;
}