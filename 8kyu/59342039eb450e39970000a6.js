// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!

function oddCount(n){
  return Math.floor(n / 2);
}

console.log(oddCount(15))
// 7
console.log(oddCount(15023))
// 7511


// Solution 1
const oddCount = n => Math.floor(n/2) ;


// Solution 2
function oddCount(n){
  return Math.floor(n/2);
}


// Solution 3
function oddCount(n){
 /*
  var returnArray = [];
  for(var i=1;i<n;i=i+2) {
    returnArray.push(i);
  }
  return returnArray.length;
 */
 return parseInt(n/2);
}


// Solution 4
oddCount=n=>Math.floor(n/2)


// Solution 5
oddCount=_=>this['Math']['floor'](_/[-~[]+!!{}][~~{}])


// Solution 6
function oddCount(n){
  // your code here
  console.log(n)
  var result = 0
  result = Math.floor(n/2)
  return result
}


// Solution 7
function oddCount(n){
  let odd = Math.round((n - 1) / 2);
  return odd;
}


// Solution 8
let oddCount=(n)=>Math.floor(n / 2)


// Solution 9
const oddCount = (n) => (n - (n % 2)) / 2;


// Solution 10
function oddCount(n) {
  return Math.trunc(n / 2);
}


// Solution 11
oddCount = x => Math.floor(x / 2);


// Solution 12
function oddCount(n){ return Math.floor(n/2) }