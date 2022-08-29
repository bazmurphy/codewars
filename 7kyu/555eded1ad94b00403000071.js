// Sum of the first nth term of Series

// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
    
    let num;

    if (n === 0 || n === 1) {
        return n.toFixed(2).toString()

    } else {

        let newArr = [1]
        let denominator = 1;
        let subtotal;

        for (let i = 1; i < n; i++) {
            denominator += 3;
            // console.log(denominator)
            subtotal = 1 / denominator
            // console.log(subtotal)
            newArr.push(subtotal)
        }
        // console.log(newArr)

        return newArr.reduce((pV, cV) => pV + cV).toFixed(2).toString()
    }

}

console.log(SeriesSum(1))
// "1.00"
console.log(SeriesSum(2))
// "1.25"
console.log(SeriesSum(3))
// "1.39"
console.log(SeriesSum(4))
// "1.49"
console.log(SeriesSum(5))
// "1.57"



// Solution 1
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }  
    return s.toFixed(2)
}


// Solution 2
function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
}


// Solution 3
function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}


// Solution 4
function SeriesSum(n)
{
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}


// Solution 5
function SeriesSum(n)
{
  var s = 0;
  while(n) {
    s += 1/(1 + 3 * --n);
  }
  return s.toFixed(2);
}


// Solution 6
function SeriesSum(n) {
    return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
}


// Solution 7
const { range } = require('lodash')
const reducer = (a, i) => a + 1 / (1 + i * 3)
const SeriesSum = (n) => range(n).reduce(reducer, 0).toFixed(2)


// Solution 8
SeriesSum = n => Array.from(Array(n), (e, i) => 1 / (i * 3 + 1)).reduce((s, e) => s + e, 0).toFixed(2);
