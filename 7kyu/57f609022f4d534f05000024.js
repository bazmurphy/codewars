// Find the stray number

// You are given an odd - length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid!(odd - length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {

    // console.log(numbers)

    let sorted = numbers.sort((a, b) => b - a)

    // if (sorted[0] !== sorted[1]) {
    //     return sorted[0]
    // } else {
    //     return sorted[sorted.length - 1]
    // }

    return sorted[0] !== sorted[1] ? sorted[0] : sorted[sorted.length -1]
}

console.log(stray([1, 1, 2]));
// 2
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
// 3


// Solution 1
function stray(numbers) {
    for (var i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
    }
}


// Solution 2
const stray = nums => nums.reduce((a, b) => a ^ b);


// Solution 3
function stray(numbers) {
    var a = numbers.sort();

    if (a[0] != a[1]) {
        return a[0]
    }
    return a[a.length - 1]
}


// Solution 4
function stray(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return nums.filter(x => x == max).length == 1 ? max : min
}


// Solution 5
// function stray(numbers){
//   for ( let num of numbers ){
//     if ( numbers.indexOf(num) === numbers.lastIndexOf(num) ){
//       return num
//     }
//   }
// }
const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]


// Solution 6
function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
}


// Solution 7
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));


// Solution 8
function stray(numbers) {
    var sort = numbers.sort();
    if (sort[0] === sort[1]) {
        return sort[sort.length - 1]
    } else {
        return sort[0]
    }

}


// Solution 9
function stray(numbers) {
    var num = numbers.sort(function (a, b) { return a - b; });
    return (num[0] === num[1]) ? num[num.length - 1] : num[0];
}


// Solution 10
const stray = arr => ~~arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).join('')


// Solution 11
function stray(numbers) {
    return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
}


// Solution  12
function stray(numbers) {
    numbers = numbers.sort(function (a, b) {
        return a > b;
    });

    return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];

}