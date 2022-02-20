// Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// For example:
// sumOfDifferences([2, 1, 10])
// Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0.

function sumOfDifferences(arr) {

    if (arr.length <= 1) {
        return 0;

    } else {

        let array1 = arr.sort( (a,b) => b - a)
        
        // console.log(array1)

        let array2 = [];

        for (let i = 0; i < array1.length - 1; i++) {
            array2.push(array1[i] - array1[i+1])
        }

        // console.log(array2)

        return array2.reduce( (previousValue, currentValue) => previousValue + currentValue )
    }
}

sumOfDifferences([1, 2, 10])


// Solution 1
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}


// Solution 2
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);


// Solution 3
function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b);
    let b = 0;
    for(let a = arr.length - 1; a > 0; a--) {
      b += arr[a] - arr[a - 1];
    }
    return b;
  }

// Solution 4
sumOfDifferences = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);


// Solution 5
const sumOfDifferences = arr => arr.sort((a, b) => b - a).shift() - arr.pop() || 0;


// Solution 6
function sumOfDifferences(arr) {
    return arr.sort((a,b)=>b-a).reduce((o,c,i,a)=>{
    if(a.length-1>i)
       o +=c-a[i+1];
    return o;
    },0) || 0;
}