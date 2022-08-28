// Odd or Even?

// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Have fun!

function oddOrEven(array) {

    return array.reduce((pV, cV) => pV + cV, 0) % 2 === 0 ? 'even' : 'odd'

}


console.log(oddOrEven([0]))
// 'even'
console.log(oddOrEven([1]))
// 'odd'
console.log(oddOrEven([]))
// 'even'

console.log(oddOrEven([0, 1, 5]))
// 'even'
console.log(oddOrEven([0, 1, 3]))
// 'even'
console.log(oddOrEven([1023, 1, 2])) 
// 'even'

console.log(oddOrEven([0, -1, -5]))
// 'even'
console.log(oddOrEven([0, -1, -3]))
// 'even'
console.log(oddOrEven([-1023, 1, -2]))
// 'even'

console.log(oddOrEven([0, 1, 2]))
// 'odd'
console.log(oddOrEven([0, 1, 4]))
// 'odd'
console.log(oddOrEven([1023, 1, 3]))
// 'odd'

console.log(oddOrEven([0, -1, 2]))
// 'odd'
console.log(oddOrEven([0, 1, -4])) 
// 'odd'
console.log(oddOrEven([-1023, -1, 3]))
// 'odd'


// Solution 1
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}


// Solution 2
function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
}


// Solution 3
const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";


// Solution 4
const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';


// Solution 5
const oddOrEven = (arr) => arr.reduce((a,i) => a + i, 0) % 2 ? 'odd' : 'even'


// Solution 6
function oddOrEven(array) {
    if(array.length == 0){
      return 'even'
    }
    var sum = array.reduce(add, 0)
    function add(x, y){
      return x + y
    }
    
    if(sum % 2 == 0){return 'even'}
    else{return 'odd'}
 }


// Solution 7
const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];