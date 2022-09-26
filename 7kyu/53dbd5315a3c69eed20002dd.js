// List Filtering

// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

function filter_list(l) {
    return l.filter(element => Number.isInteger(element))
}

console.log(filter_list([1, 2, 'a', 'b']))
// [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15]))
// [1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))
// [1, 2, 123]


// Solution 1
function filter_list(l) {
    return l.filter(function (v) { return typeof v == 'number' })
}


// Solution 2
function filter_list(l) {
    return l.filter(v => typeof v == "number")
}


// Solution 3
function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
}


// Solution 4
function filter_list(l) {
    return l.filter(Number.isInteger);
}


// Solution 5
const filter_list = l => l.filter(c => typeof c === 'number');


// Solution 6
function filter_list(l) {
    return l.filter(function (elem) { return typeof elem != "string" })
}


// Solution 7
function filter_list(l) {
    var res = [];
    for (var item = 0; item < l.length; item++) {
        if (typeof l[item] === "number") {
            res.push(l[item]);
        }

    }
    return res;
}


// Solution 8
function filter_list(l) {
    return l.filter(i => typeof i !== 'string');
}


// Solution 9
function filter_list(l) {
    return l.filter(x => typeof (x) == "number");
}


// Solution 10
const filter_list = l => l.filter(Number.isInteger);


// Solution 11
function filter_list(l) {
    return l.filter(function (item) {
        return typeof item === 'number';
    });
}