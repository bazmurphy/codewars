// The takeWhile Function

// Here's another staple for the functional programmer. 
// You have a sequence of values and some predicate for those values. 
// You want to get the longest prefix of elements such that the predicate is true for each element. 
// We'll call this the takeWhile function. 
// It accepts two arguments. 
// The first is the sequence of values, and the second is the predicate function. 
// The function does not change the value of the original sequence.

// Example:

// sequence : [2,4,6,8,1,2,5,4,3,2]
// predicate: is an even number
// result   : [2,4,6,8]

// Your task is to implement the takeWhile function.

// If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.

function takeWhile(arr, pred) {
    let result = [];
    for (let element in arr) {
        if (pred(arr[element])) {
            result.push(arr[element]);
        } else {
            break;
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(takeWhile([998, 996, 12, -1000, 200, 0, 1, 1, 1], isEven));
// [998, 996, 12, -1000, 200, 0]
console.log(takeWhile([1, 4, 2, 3, 5, 4, 5, 6, 7], isEven));
// []
console.log(takeWhile([-1, -5, 127, 86, 902, 2, 1], isOdd));
// [-1, -5, 127]
console.log(takeWhile([2, 1, 2, 4, 3, 5, 4, 6, 7, 8, 9, 0], isOdd));
// []


// Solution 1
function takeWhile(arr, pred) {
    for (i = 0; i < arr.length; i++) {
        if (!pred(arr[i])) return arr.slice(0, i);
    }
    return arr
}


// Solution 2
function takeWhile(arr, pred) {
    for (var res = [], i = 0; i < arr.length; i++) {
        if (!pred(arr[i])) break
        res.push(arr[i])
    }

    return res
}


// Solution 3
function takeWhile(arr, pred) {
    return arr.length !== 0 && pred(arr[0]) ?
        [arr[0]].concat(takeWhile(arr.slice(1), pred)) :
        [];
}


// Solution 4
const takeWhile = (arr, pred) => {
    const index = arr.findIndex((value) => !pred(value));
    return index === -1 ? arr : arr.slice(0, index);
};


// Solution 5
function takeWhile(arr, check) {
    var output = []
    arr.some(function (el) {
        if (check(el)) {
            output.push(el)
        }
        return !check(el);
    });
    return output;
}


// Solution 6
function takeWhile(arr, pred) {
    let result = [];
    for (let item of arr) {
        if (pred(item)) result.push(item);
        else break;
    }
    return result
}


// Solution 7
const takeWhile = (arr, pred) => arr
    .reduce((acc, val) => (pred(val) ? acc.slice(-1)[0].push(val) : acc.push([]), acc), [[]])
    .sort((a, b) => a.length - b.length ? -1 : 1)[0]


// Solution 8
function takeWhile(arr, pred) {

    function _takeWhile(arr, pred, i, seq) {
        if (i >= arr.length || !pred(arr[i]))
            return seq;
        return _takeWhile(arr, pred, i + 1, [...seq, arr[i]]);
    }

    return _takeWhile(arr, pred, 0, []);
}


// Solution 9
function takeWhile(A, p) {
    R = []
    for (var i = 0; i < A.length; i++) {
        if (p(A[i])) R.push(A[i]);
        else return R;
    }
    return R;
}


// Solution 10
function takeWhile(arr, pred, valid = !0) {
    return arr.filter(x => valid ? valid = pred(x) : false);
}


// Solution 11
function takeWhile(arr, pred) {
    for (var i = 0; i < arr.length && pred(arr[i]); i++) { }
    return arr.slice(0, i);
}


// Solution 12
const takeWhile = (seq, pred) => {
    for (var i = 0; pred(seq[i]) && i < seq.length; i++);
    return seq.slice(0, i);
}