// Find the unique number

// There is an array with some numbers.All numbers are equal except for one.Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let newArr = arr.sort((a,b) => a - b);
    return newArr[0] === newArr[1] ? newArr[newArr.length - 1] : newArr[0];
}

console.log(findUniq([1, 0, 0]));
// 1
console.log(findUniq([0, 1, 0]));
// 1
console.log(findUniq([0, 0, 1]));
// 1
console.log(findUniq([1, 1, 1, 2, 1, 1]));
// 2
console.log(findUniq([1, 1, 2, 1, 1]));
// 2
console.log(findUniq([3, 10, 3, 3, 3]));
// 10


// Solution 1
function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}


// Solution 2
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


// Solution 3
function findUniq(arr) {
    let [a, b, c] = arr.slice(0, 3);
    if (a != b && a != c) return a;
    for (let x of arr) if (x != a) return x
}


// Solution 4
function findUniq(arr) {
    return +arr.filter((value) => { return arr.indexOf(value) == arr.lastIndexOf(value) });
}


// Solution 5
function findUniq(arr) {
    return arr.filter(function (elem) {
        return arr.indexOf(elem) === arr.lastIndexOf(elem)
    })[0]

}


// Solution 6
function findUniq(arr) {
    let uniq = {},
        result;
    arr.forEach(function (item) {
        uniq[item] = uniq[item] + 1 || 1;
    });
    Object.keys(uniq).forEach(function (key) {
        if (uniq[key] == 1) {
            result = key;
        }
    });

    return parseFloat(result);
}


// Solution 7
function findUniq(arr) {
    var aux = (arr[0] != arr[1]) ? arr[3] : arr[0];
    return arr.filter(x => x != aux)[0];
}


// Solution 8
let findUniq = arr => +arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e))


// Solution 9
function findUniq(arr) {
    return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
}


// Solution 10
function findUniq(arr) {
    arr = arr.sort()
    if (arr[0] === arr[1]) {
        return arr[arr.length - 1]
    } else {
        return arr[0]
    }
}


// Solution 11
function findUniq(arr) {
    if (arr[0] == arr[arr.length - 1]) {
        return arr.filter(a => a != arr[0])[0];
    }
    else {
        return arr.filter(a => a != arr[1])[0];
    }
}


// Solution 12
function findUniq(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        (arr[i] in map) ? map[arr[i]] += 1 : map[arr[i]] = 1;
    }

    for (var key in map) {
        if (map[key] == 1) {
            return parseFloat(key);
        }
    }
}