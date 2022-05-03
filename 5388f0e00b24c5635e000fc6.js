// Swap Values
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

// swapValues([1,2])
// [2,1]

function swapValues() {
    return Array.prototype.slice.call(arguments)[0].reverse();

}
// [2, 1]


// Solution 1
function swapValues() {
    return arguments[0].reverse();
}


// Solution 2
function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}


// Solution 3
function swapValues() {
    var args = Array.prototype.slice.call(arguments)[0];
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}


// Solution 4
function swapValues(arr) {
    return arr.reverse();
}