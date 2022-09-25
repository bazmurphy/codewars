// Descending Order

// Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(0));
// 0
console.log(descendingOrder(1));
// 1
console.log(descendingOrder(111));
// 111
console.log(descendingOrder(15));
// 51
console.log(descendingOrder(1021));
// 2110
console.log(descendingOrder(123456789));
// 987654321


// Solution 1
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}


// Solution 2
function descendingOrder(n) {
    return +(n + '').split('').sort(function (a, b) { return b - a }).join('');
}


// Solution 3
function descendingOrder(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}


// Solution 4
function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
}


// Solution 5



// Solution 6
function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}


// Solution 7
function descendingOrder(n) {
    return n.digits().sort().reverse().undigits();
}

Number.prototype.digits = function () {
    const result = [];
    let n = this;
    do {
        result.unshift(n % 10);
        n = Math.floor(n / 10);
    } while (n);
    return result;
};

Array.prototype.undigits = function () {
    return this.reduce((n, d) => n * 10 + d, 0);
};


// Solution 8
function descendingOrder(n) {
    return parseInt(n.toString().split('').sort(function (a, b) {
        return b - a;
    }).join(''));
}


// Solution 9
function descendingOrder(n) {
    return +(n + '').split('').sort().reverse().join('')
}


// Solution 10
const descendingOrder = (n, arr = [...String(n)]) => parseInt(arr.sort((a, b) => b - a).join(''));


// Solution 11
function descendingOrder(n) {

    n = [...n.toString()];

    return Number(
        n
            .sort()
            .reverse()
            .join('')
    );
}