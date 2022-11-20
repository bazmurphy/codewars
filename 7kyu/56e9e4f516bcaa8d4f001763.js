// Sum of numbers from 0 to N

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:

// Input:

// > 6

// Output:

// 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

// Input:

// > -15

// Output:

// -15 < 0

// Input:

// > 0

// Output:

// 0 = 0

var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {

        // console.log(count)

        if (count < 0) {
            return `${count}<0`
        }
        else if (count === 0) {
            return `0=0`;
        }

        let arr = [];

        let i = 0;

        while (i <= count) {
            arr.push(i);
            i++;
        }

        let total = arr.reduce((p, c) => p + c, 0)

        return `${arr.join('+')} = ${total}`;

    };

    return SequenceSum;

})();

console.log(SequenceSum.showSequence(6));
// "0+1+2+3+4+5+6 = 21"


// Solution 1
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        var sum = 0;
        var str = "";
        if (count === 0) {
            return "0=0";
        } else if (count < 0) {
            return count + "<0";
        } else {
            for (var i = 0; i < count; i++) {
                sum += i;
                str += i + "+";
            };
            sum += count;
            str += count + " = " + sum;
            return str;
        };
    };

    return SequenceSum;

})();


// Solution 2
class SequenceSum {
    static showSequence(n) {
        return n < 0
            ? `${n}<0`
            : `${Array.from({ length: n + 1 }, (v, k) => k).join('+')}${n ? ' = ' : '='}${n * (n + 1) / 2}`;
    }
}


// Solution 3
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        var m = [], s = 0;
        if (count === 0) return count + '=' + 0;
        if (count < 0) return count + '<' + 0;

        for (var i = 0; i <= count; i++) {
            s += i;
            m.push(i);
        };

        return m.join('+') + ' = ' + s;
    };

    return SequenceSum;

})();


// Solution 4
function SequenceSum() { }

SequenceSum.showSequence = function (a) {
    if (a < 0) return `${a}<0`;
    if (a === 0) return '0=0';

    let arr = Array.from({ length: a + 1 }, (_, i) => i)
    return `${arr.join('+')} = ${arr.reduce((x, y) => x + y)}`
};


// Solution 5
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        console.log(count)
        if (count === 0) return '0=0'
        if (count < 0) return `${count}<0`
        let arr = Array.from({ length: count + 1 }, (_, i) => i)
        return `${arr.join('+')} = ${arr.reduce((x, y) => x + y)}`
    };

    return SequenceSum;

})();


// Solution 6
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {

        if (count > 0) return [...Array(count + 1).keys()].join('+') + ' = ' + count * (count + 1) / 2;
        if (count == 0) return '0=0';
        return count + '<0';
    };

    return SequenceSum;

})();


// Solution 7
var SequenceSum = { showSequence: n => n < 0 ? n + '<0' : [...Array(n + 1).keys()].join('+') + (n ? ' = ' : '=') + n * (n + 1) / 2 }


// Solution 8
let SequenceSum = { showSequence: count => count <= 0 ? count == 0 ? '0=0' : `${count}<0` : `${[...Array(count + 1).keys()].join('+')} = ${[...Array(count + 1).keys()].reduce((x, y) => x + y)}` }


// Solution 9
const SequenceSum = { showSequence: (n) => n < 0 ? `${n}<0` : n ? `${[...Array(n + 1).keys()].join("+")} = ${(n * (n + 1)) / 2}` : '0=0' }


// Solution 10
const SequenceSum = {
    showSequence: val => val < 0 ? `${val}<0` :
        [...Array(val + 1).keys()].join(`+`) + (val ? ` = ` : `=`) + val * (++val) / 2
};


// Solution 11
let SequenceSum = {
    showSequence: count => {
        if (count < 1) return count + (count < 0 ? '<0' : '=0')
        return Array.from({ length: count + 1 }, (_, i) => i).join('+') + ' = ' + count * (count + 1) / 2
    }
}


// Solution 12
var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count < 0) {
            return count + "<0";
        }
        if (count === 0) {
            return "0=0";
        }
        let sum = 0;
        let text = "0";
        for (let n = 1; n <= count; n += 1) {
            sum += n;
            text += "+";
            text += n;
        }
        text += " = " + sum;
        return text;
    };

    return SequenceSum;

})();