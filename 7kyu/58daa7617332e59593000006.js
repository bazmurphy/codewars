// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {

    let mostDigits = Math.max(...array).toString().length
    // console.log(mostDigits)
    return array.find(element => element.toString().length === mostDigits)

}

console.log(findLongest([1, 10, 100]));
// 100
console.log(findLongest([9000, 8, 800]));
// 9000
console.log(findLongest([8, 900, 500]));
// 900


// Solution 1
const findLongest = l => l
    .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


// Solution 2
function findLongest(array) {
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}


// Solution 3
function findLongest(array) {
    let num = '0';
    for (let i = 0; i < array.length; i++) {
        let string = array[i].toString();
        if (string.length > num.length) {
            num = string;
        }
    }
    return parseInt(num);
}


// Solution 4
function findLongest(array) {
    var newArr = array.map(function (element) {
        return element.toString()
    })
    newArr.sort(function (a, b) {
        return b.length - a.length
    })
    return parseInt(newArr[0])
}


// Solution 5
findLongest = arr => arr.sort((a, b) => (b + '').length - (a + '').length)[0]


// Solution 6
const findLongest = array =>
    array.reduce((pre, val) => `${val}`.length > `${pre}`.length ? val : pre);


// Solution 7
function findLongest(a) {
    return a[a.map(n => ~~Math.log10(n)).indexOf(Math.max(...a.map(n => ~~Math.log10(n))))];
}


// Solution 8
function findLongest(a) {
    let m = Math.max(...a);
    for (let i = 0; i < a.length; i++) if (m.toString().length == a[i].toString().length) return a[i];
}


// Solution 9
const findLongest = arr =>
    arr.reduce(compareLength);

const compareLength = (a, b) =>
    `${b}`.length > `${a}`.length ? b : a;


// Solution 10
with (Math) {
    function findLongest(array) {
        var max10 = ~~log10(max(...array))
        return array.find(x => ~~log10(x) == max10)
    }
}


// Solution 11
findLongest = arr => +(arr.sort((a, b) => (b + '').length - (a + '').length)[0]);


// Solution 12
function findLongest(array) {
    let biggestNumber = 0;
    array.forEach(number => {
        if (number.toString().length > biggestNumber.toString().length) {
            biggestNumber = number
        }
    })
    return biggestNumber;
}