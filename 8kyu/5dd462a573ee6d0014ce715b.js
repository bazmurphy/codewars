// Check same case

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns - 1

function sameCase(a, b) {

    function isLetter(input) {
        return input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90 || input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122;
    }

    function isLowerCaseLetter(input) {
        return input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122;
    }

    function isUpperCaseLetter(input) {
        return input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90;
    }

    if (isLetter(a) && isLetter(b)) {
        if (isLowerCaseLetter(a) && isLowerCaseLetter(b) || isUpperCaseLetter(a) && isUpperCaseLetter(b)) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return -1;
    }

}

console.log(sameCase('C', 'B'));
// 1
console.log(sameCase('b', 'a'));
// 1
console.log(sameCase('d', 'd'));
// 1
console.log(sameCase('A', 's'));
// 0
console.log(sameCase('c', 'B'));
// 0
console.log(sameCase('b', 'Z'));
// 0
console.log(sameCase('\t', 'Z'));
// -1
console.log(sameCase('H', ':'));
// -1


// Solution 1
function sameCase(a, b) {
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else {
        return 0
    }
}


// Solution 2
function sameCase(a, b) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if (!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1

    const checkCase = x => {
        if (x === x.toLowerCase()) return 'lower'
        if (x === x.toUpperCase()) return 'upper'
    }

    return checkCase(a) === checkCase(b) ? 1 : 0
}


// Solution 3
sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1


// Solution 4
function sameCase(a, b) {
    if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
    if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
    if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
    return 1;
}


// Solution 5
function sameCase(a, b) {
    if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1;
    }
    return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
}


// Solution 6
function sameCase(a, b) {
    const re = /^[a-zA-Z]+$/
    return re.test(a) && re.test(b)
        ? Number(a.charCodeAt() >= 97 && b.charCodeAt() >= 97) || Number(a.charCodeAt() < 97 && b.charCodeAt() < 97)
        : -1
}


// Solution 7
function sameCase(a, b) {
    let aInfo = getSimbolInfo(a);
    let bInfo = getSimbolInfo(b);

    if (!aInfo.isLetter || !bInfo.isLetter) {
        return -1;
    }
    if (aInfo.isUpperCase === bInfo.isUpperCase) {
        return 1;
    }
    if (aInfo.isUpperCase !== bInfo.isUpperCase) {
        return 0;
    }

    function getSimbolInfo(simbol) {
        return {
            isLetter: /[a-z]/gi.test(simbol),
            isUpperCase: simbol.toUpperCase() === simbol
        };
    }
}


// Solution 8
function sameCase(a, b) {
    if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
    if ((a === a.toUpperCase() && b !== b.toUpperCase()) || (a !== a.toUpperCase() && b === b.toUpperCase())) return 0;
    return 1;
}


// Solution 9
const sameCase = (a, b) => /[^a-z]/i.test(a + b) ? -1 : a === a.toLowerCase() ^ b === b.toUpperCase();


// Solution 10
function sameCase(a, b) {
    let c = a;
    let d = b;
    let e = c.charCodeAt();
    let f = d.charCodeAt();
    if ((e >= 65 && e <= 90) && (f >= 65 && f <= 90)) {
        return 1;
    }
    if ((e >= 97 && e <= 122) && (f >= 97 && f <= 122)) {
        return 1;
    }
    if ((e >= 65 && e <= 90) && (f >= 97 && f <= 122)) {
        return 0;
    }
    if ((e >= 97 && e <= 122) && (f >= 65 && f <= 90)) {
        return 0;
    }
    else {
        return -1;
    }
}


// Solution 11
function sameCase(a, b) {
    if (!/[\[A-Z\]\[a-z\]]/.test(a) || !/[\[A-Z\]\[a-z\]]/.test(b))
        return -1
    if (a === a.toUpperCase() && b === b.toUpperCase())
        return 1
    if (a === a.toLowerCase() && b === b.toLowerCase())
        return 1
    return 0
}


// Solution 12
function sameCase(a, b) {

    function conditionLowcase(char) {
        return (/[a-z]/).test(char)
    }

    function conditionUpperCase(char) {
        return (/[A-Z]/).test(char)
    }

    function conditionLetters(char) {
        return (/[a-zA-Z]/).test(char)
    }


    if (conditionLowcase(a) && conditionLowcase(b)) {
        return 1
    } else if (conditionUpperCase(a) && conditionUpperCase(b)) {
        return 1
    } else if (conditionLowcase(a) && conditionUpperCase(b)) {
        return 0
    } else if (conditionUpperCase(a) && conditionLowcase(b)) {
        return 0
    } else if (!conditionLetters(a) || !conditionLetters(b)) {
        return -1
    }
}