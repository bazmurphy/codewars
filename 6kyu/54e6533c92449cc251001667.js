// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    return [...iterable].filter((element, index, array) => element !== array[index - 1])
}

const uniqueInOrder = (iterable) => [...iterable].filter((element, index, array) => element !== array[index - 1])

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// ['A', 'B', 'C', 'D', 'A', 'B']


// Solution 1
function uniqueInOrder(it) {
    var result = []
    var last

    for (var i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push(last = it[i])
        }
    }

    return result
}


// Solution 2
var uniqueInOrder = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}


// Solution 3
var uniqueInOrder = function (iterable) {
    return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}


// Solution 4
var uniqueInOrder = function (iterable) {
    var res = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) res.push(iterable[i]);
    }
    return res;
}


// Solution 5
const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])


// Solution 6
var uniqueInOrder = function (iterable) {
    var result = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i - 1] === undefined || iterable[i - 1] !== iterable[i]) {
            result.push(iterable[i]);
        }
    }
    return result;
}


// Solution 7
var uniqueInOrder = function (iterable) {
    return Array.prototype.filter.call(iterable, function (current, index) { return iterable[index - 1] !== current })
}


// Solution 8
var uniqueInOrder = function (iterable) {
    var result = []; // this array will store unique elements
    for (var i = 0, length = iterable.length; i < length; i++) {
        // we step through the elements in iterable from the beginning to the end
        if (iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])) {
            // and add an element to the result array every time this is different from the following element
            result.push(iterable[i]);
        }
    }
    return result;
}


// Solution 9
var uniqueInOrder = function (iterable) {
    return Array.prototype.reduce.call(iterable, function (a, b) { if (a[a.length - 1] !== b) a.push(b); return a; }, []);
}


// Solution 10
var uniqueInOrder = function (iterable) {
    iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
    return iterable.filter(function (e, i, arr) {
        return e !== arr[i - 1];
    });
}


// Solution 11
var uniqueInOrder = function (iterable) {
    var newArr = [];

    if (typeof iterable === "string") {
        iterable = iterable.split('');
    }

    if (iterable.length > 0) {
        var arr = iterable
            .reduce(function (prev, curr) {
                if (prev !== curr) {
                    newArr.push(prev);
                }
                return curr;
            });
        newArr.push(arr);
    }

    return newArr;
}


// Solution 12
const reducer = (acc, x) =>
    acc[acc.length - 1] === x
        ? acc
        : [...acc, x]

const uniqueInOrder = x => [].reduce.call(x, reducer, [])