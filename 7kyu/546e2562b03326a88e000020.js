// Square Every Digit

// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num) {

    let stringFromNum = num.toString();
    // console.log(stringFromNum);

    let arrayOfNumsFromString = stringFromNum.split('');
    // console.log(arrayOfNumsFromString);

    let arrayOfNumsFromStringSquared = arrayOfNumsFromString.map(element => element * element);
    // console.log(arrayOfNumsFromStringSquared);

    let rejoined = arrayOfNumsFromStringSquared.join('');
    // console.log(rejoined);

    let finalResult = Number(rejoined);
    // console.log(finalResult);

    return finalResult;
}



console.log(squareDigits(3212));
// 9414

console.log(squareDigits(2112));
// 4114

console.log(squareDigits(0));
// 0


// Solution 1
function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}


// Solution 2
function squareDigits(num) {
    var array = num.toString().split('').map(function (int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}


// Solution 3
function squareDigits(num) {
    return +num.toString().split('').map(i => i * i).join('');
}


// Solution 4
function squareDigits(num) {
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++) {
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};


// Solution 5
function squareDigits(num) {
    let result = num
        .toString()
        .split("")
        .map(num => parseInt(num))
        .map(num => num * num)
        .join("")

    return parseInt(result)
}


// Solution 6
function squareDigits(num) {
    return +String(num).split('').map(function (num) { return +num * +num; }).join('');
}


// Solution 7
const squareDigits = (num) => Number((num + '').split("").map(c => c * c).join(""));


// Solution 8
function squareDigits(num) {
    //may the code be with you
    var numS = num.toString();
    var output = "";
    for (var i = 0; i < numS.length; i++) {
        output += parseInt(numS[i]) * parseInt(numS[i]);
    }
    return parseInt(output);
}


// Solution 9
function squareDigits(num) {
    var numArray = num.toString(10).split('').map(Number);
    var powArray = numArray.map(function (n) { return n * n; });
    var powString = powArray.join('');

    return parseInt(powString, 10);
}


// Solution 10
function squareDigits(num) {
    var str = String(num)
    var res = ''

    for (var i = 0; i < str.length; i++) {
        res += Math.pow(str.charCodeAt(i) - 48, 2)
    }

    return parseInt(res)
}