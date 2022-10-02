// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen.Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// "4556364607935616" -- > "############5616"
// "64607935616" -- > "#######5616"
// "1" -- > "1"
// "" -- > ""

// // "What was the name of your first pet?"

// "Skippy" -- > "##ippy"

// "Nananananananananananananananana Batman!"
// -->
//     "####################################man!"

// return masked string

function maskify(cc) {
    if (cc.length > 4) {
        let numbers = cc.substring(cc.length -4, cc.length)
        // console.log('numbers', numbers)

        let hashes = '';

        for (let i = 0; i < cc.length - 4; i++)
            hashes += '#'

        // console.log('hashes', hashes)

        return hashes + numbers;
    } else {
        return cc;
    }
}

console.log(maskify('4556364607935616'))
// '############5616'
console.log(maskify('1'));
// '1'
console.log(maskify('11111'));
// '#1111'


// Solution 1
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


// Solution 2
function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}


// Solution 3
function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}


// Solution 4
function maskify(cc) {
    cc = cc.split("");
    for (var i = 0; i < cc.length - 4; i++) {
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}


// Solution 5
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length, '#')
}


// Solution 6
maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);


// Solution 7
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}


// Solution 8
function maskify(cc) {
    var maskedString = "";
    for (var i = 0; i < cc.length; i++) {
        if (i < cc.length - 4) {
            maskedString = maskedString + "#";
        } else {
            maskedString = maskedString + cc.charAt(i);
        };
    }
    return maskedString;
}


// Solution 9
const maskify = cc => cc.slice(-4).padStart(cc.length, '#')


// Solution 10
function maskify(cc) {
    return cc.replace(/(?=.{5})./g, '#')
}