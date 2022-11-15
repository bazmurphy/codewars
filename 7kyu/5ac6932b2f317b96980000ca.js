// Form The Minimum

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)

// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)

// Explanation:

// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// Explanation:

// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 

function minValue(values) {
    return Number(Array.from(new Set(values.sort((a, b) => a - b))).join(''));
}

console.log(minValue([1, 3, 1]));
// 13
console.log(minValue([4, 7, 5, 7]));
// 457
console.log(minValue([4, 8, 1, 4]));
// 148
console.log(minValue([5, 7, 9, 5, 7]));
// 579
console.log(minValue([6, 7, 8, 7, 6, 6]));
// 678
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
// 45679
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
// 134679
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
// 356789
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// 1


// Solution 1
function minValue(values) {
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}


// Solution 2
function minValue(values) {
    const n = values
        .filter((e, i, arr) => arr.indexOf(e) === i)
        .sort()
        .join('');
    return Number(n);
}


// Solution 3
function minValue(values) {
    return Number(Array.from(new Set(values)).sort().join(''))
}


// Solution 4
const minValue = (v) => +[...new Set(v)].sort().join``


// Solution 5
function minValue(values) {
    return parseInt([...new Set(values)].sort((a, b) => a - b).join(''));
}


// Solution 6
const minValue = (a) => +[...new Set(a)].sort((a, b) => a - b).join('');


// Solution 7
function minValue(values) {
    var uniq = values.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });
    return parseInt(uniq.sort().join(''));
}


// Solution 8
function minValue(values) {
    var result = [];
    values.forEach(function (n) {
        if (result.indexOf(n) < 0) {
            result.push(n);
        }
        return result;
    });
    var str = ""
    result.sort().forEach(function (n) {
        str = str + n;
        return str;
    }); return Number(str);
}


// Solution 9
function minValue(values) {
    return parseInt([...new Set(values)].sort().join(''))
}


// Solution 10
function minValue(a) {
    return +[...new Set(a)].sort().join``
}


// Solution 11
function minValue(values) {
    return parseInt(Array.from(new Set(values)).sort().join(""))
}


// Solution 12
const minValue = (values) => {
    let sorted = values.sort();
    let lowestNums = [];

    for (let i = 0; i < sorted.length; i++) {
        if (lowestNums.indexOf(sorted[i]) === -1) {
            lowestNums.push(sorted[i]);
        }
    }

    return Number(lowestNums.join(""));
}