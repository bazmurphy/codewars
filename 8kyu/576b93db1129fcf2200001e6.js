// Sum without highest and lowest number

// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {

    if (array === null || array === undefined || array.length < 3) {
        return 0;
    } else {
        const sortedArray = array.sort((a, b) => a - b);
        
        if (sortedArray.length > 2) {
            sortedArray.shift()
            sortedArray.pop()
        }

        const sum = sortedArray.reduce((previous, current) => previous + current, 0)

        return sum;
    }

}

console.log(sumArray(null))
// 0
console.log(sumArray([]))
// 0
console.log(sumArray([3]))
// 0
console.log(sumArray([3,5]))
// 0
console.log(sumArray([6,2,1,8,10]))
// 16
console.log(sumArray([0,1,6,10,10]))
// 17
console.log(sumArray([-6,-20,-1,-10,-12]))
// -28
console.log(sumArray([-6,20,-1,10,-12]))
// 3


// Solution 1
function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
}


// Solution 2
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


// Solution 3
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
}


// Solution 4
function sumArray(array) {
  
    if (array == null || array.length <= 2) {
      return 0
    }
    
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);
    var sum = 0
    
    for (i = 0; i < array.length; i++) {
      sum += array[i];
     }
  
    return sum - max - min
}


// Solution 5
const sumArray = (numbers) => (
    numbers && numbers.length > 1
      ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
      : 0
  );


// Solution 6
const sumArray = $ => !$ ? 0 : $.sort((a, b)=> a - b).slice(1,-1).reduce((acc, el)=> acc + el, 0)


// Solution 7
function sumArray(array) {
    array = array || [];
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((a, b) => a + b, 0);
}