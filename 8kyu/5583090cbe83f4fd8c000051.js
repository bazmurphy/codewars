// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {

    return String(n).split('').map(Number).reverse();

    // for (let i = 0; i < n.length; i++) {
    //     newArray.push(n[i]);
    //     console.log(n[i]);
    // }

    // console.log(newArray);


}

console.log(digitize(35231))
// [1,3,2,5,3]
console.log(digitize(0))
// [0]


// Solution 1
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}


// Solution 2
function digitize(n){
    return (n + '').split('').map(Number).reverse();
}


// Solution 3
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}


// Solution 5
function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}