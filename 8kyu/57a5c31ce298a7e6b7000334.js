// Bin to Decimal

// Complete the function which converts a binary number(given as a string) to a decimal number.

function binToDec(bin) {
    return parseInt(bin, 2)
}


console.log(binToDec("1"))
// 1
console.log(binToDec("0"))
// 0
console.log(binToDec("1001001"))
// 73


// Solution 1
function binToDec(bin) {
    return parseInt(bin, 2);
}


// Solution 2
const binToDec = bin => parseInt(bin, 2);


// Solution 3
binToDec = n => parseInt(n, 2)


// Solution 4
// const binToDec = bin => parseInt(bin, 2);

const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);


// Solution 5
const binToDec = bin => [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0)


// Solution 6
function binToDec(bin) {
    return bin.split("").reverse().map(function (a, b) { return Number(a) * Math.pow(2, b) }).reduce(function (a, b) { return a + b });
}


// Solution 7
function binToDec(bin) {
    return bin.split('')
        .reverse()
        .map((x, i) => x == 1 ? Math.pow(2, i) : 0)
        .reduce((a, b) => a + b, 0);
}


// Solution 8
function binToDec(bin) {
    let result = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[bin.length - i - 1] == 1) {
            result += Math.pow(2, i);
        }
    }
    return result;
}


// Solution 9
binToDec = (bin) => parseInt(bin, 2)


// Solution 10
function binToDec(bin) {
    let arr = bin.split('').reverse();
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1' || arr[i] === '0') {
            num += arr[i] * Math.pow(2, i);
        } else {
            throw 'Not bin num'
        }
    }
    return num;
}


// Solution 11
const binToDec = (bin) => parseInt(bin, 2);

//function binToDec(bin){
//  return parseInt(bin, 2);
//}


// Solution 12
function binToDec(bin) {
    return '0b' + bin - 0
}