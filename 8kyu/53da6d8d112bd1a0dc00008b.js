// Reverse List Order

// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)

// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {

    // let arr = [];

    // for (let i = list.length -1; i > -1; i--) {
    //     arr.push(list[i])
    // }

    // return arr;

    return list.reverse()
}


console.log(reverseList([1, 2, 3, 4]));
// [4, 3, 2, 1]
console.log(reverseList([3, 1, 5, 4]));
// [4, 5, 1, 3]


// Solution 1
function reverseList(list) {
    return list.reverse();
}


// Solution 2
const reverseList = list => list.reverse();


// Solution 3
function reverseList(list) {
    return list.slice().reverse();
}


// Solution 4
function reverseList(list) {
    var array = [];
    for (var i = list.length - 1; i >= 0; i--) {
        array.push(list[i]);
    }
    return array;
}


// Solution 5
reverseList = a => a.reverse();


// Solution 6
function reverseList(list) {
    let fin = []
    for (let i = 0; i < list.length; i++) {
        fin.push(list[list.length - i - 1])
    }
    return fin
}


// Solution 7
const reverseList = ([h, ...t]) => h == undefined ? [] : [...reverseList(t), h];


// Solution 8
reverseList = l => l.map((e, i) => l[l.length - 1 - i])


// Solution 9
const reverseList = list => list.reduceRight((arr, v) => arr.concat(v), [])


// Solution 10
function reverseList(dupa) { return dupa.reverse() }


// Solution 11
const reverseList = l => l.reverse();
// function reverseList(list) {
//   return list.reverse();
// }


// Solution 12
function reverseList(list) {
    let revList = list.reverse();
    return revList;
}