// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
    return (a+b).toString(2)
}

console.log(addBinary(1,2))
// 11
console.log(addBinary(1,1))
// 10
console.log(addBinary(5,9))
// 1110


// Solution 1
function addBinary(a, b) {
    return (a + b).toString(2)
}


// Solution 2
const addBinary = (a, b) => (a + b).toString(2);


// Solution 3
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

function addBinary(a, b) {
    return decimalToBinary(a + b);
}


// Solution 4
function addBinary(a, b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
        var res = c % 2 + res;
        c = Math.floor(c / 2);
    }
    return res;
}


// Solution 5
function addBinary(a, b) {
    return Number(a + b).toString(2);
}


// Solution 6
const addBinary = (a, b) => Math.trunc(a + b).toString(2)


// Solution 7
function addBinary(a, b) {
    if (a.isIntiger && b.isIntiger) { //if all argument is intiger digits
        return (a + b).toSting(2); //ok , return a string
    } else {
        return (parseInt(a, 10) + parseInt(b, 10)).toString(2); //if some of argument send as a string - parse values to 10 digits int. values and return as a binary 
    }
}


// Solution 8
function addBinary(a, b) {
    var added = a + b;
    var binary = added.toString(2);
    return binary;
}


// Solution 9
function addBinary(a, b) {
    var sum = a + b, binary = '';

    while (sum > 0) {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    }

    return binary;
}


// Solution 10
function addBinary(a, b) {
    let c = a + b;
    return c.toString(2);
}