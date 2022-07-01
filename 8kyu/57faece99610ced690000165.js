// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:

// Remove all exclamation marks from the end of sentence.

// Examples:

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(string) {
    
    let lastIndex;

    for (let i = string.length - 1; i > -1; i--)
        if (string[i] === '!')
            continue;
        else {
            lastIndex = i;
            break;
        }

    return string.substring(0, lastIndex + 1)

}

console.log(remove("Hi!"));
// "Hi"
console.log(remove("Hi!!!"));
// "Hi"
console.log(remove("!Hi"));
// "!Hi"
console.log(remove("!Hi!"));
// "!Hi"
console.log(remove("Hi! Hi!"));
// "Hi! Hi"
console.log(remove("Hi"));
// "Hi"


// Solution 1
const remove = s => s.replace(/!+$/, '');


// Solution 2
function remove(s) {
    return s.replace(/!+$/, '');
}


// Solution 3
function remove(s) {
    while (s && s.slice(-1) == "!") {
        s = s.slice(0, -1)
    }
    return s;
}


// Solution 4
function remove(s) {
    //coding and coding....
    while (s[s.length - 1] === '!') {
        s = s.slice(0, -1);
    }
    return s;
}


// Solution 5
function remove(s) {
    return s.replace(/!*$/, '')
}


// Solution 6
const remove = s =>
    s.replace(/!+$/g, ``);


// Solution 7
function remove(s) {
    return s.charAt(s.length - 1) === '!' ? remove(s.slice(0, s.length - 1)) : s;
}


// Solution 8
const remove = $ => $.replace(/[!]+$/g, '');


// Solution 9
function remove(s) {
    let res = s;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == "!") { res = res.slice(0, -1) }
        else { break; }
    }
    return res;
}


// Solution 10
function remove(s) {
    for (var i = 0; s.endsWith("!"); i++) {
        s.endsWith("!") ? s = s.slice(0, -1) : s;
    }
    return s;
}


// Solution 11
const remove = s => s.replace(/[!]+$/g, '');


// Solution 12
function remove(s) {
    var sArr = s.split('').reverse(),
        len = sArr.length;
    num = 0;
    for (i = 0; i < len; i++) {
        if (sArr[i] == sArr[i + 1] == '!' || sArr[i] == '!' || sArr[i + 1] == '!') {
            num++
        }
        else { break }
    }
    if (num === 0) {
        return s;
    } else { return s.slice(0, -num) }
};