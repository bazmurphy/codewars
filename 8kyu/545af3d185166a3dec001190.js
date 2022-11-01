// Enumerable Magic #20 - Cascading Subsets

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
// #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (array.slice(i, i + n).length === n) {
      output.push(array.slice(i, i+n))
    }
  }
  return output;
}

console.log(eachCons([3,5,8,13], 1));
// [[3], [5], [8], [13]]
console.log(eachCons([3,5,8,13], 2));
// [3,5], [5,8], [8,13]
console.log(eachCons([3,5,8,13], 3));
// [3,5,8], [5,8,13]
console.log(eachCons([], 3));
// []


// Solution 1
function eachCons(array, n) {
  let res = [];
  
  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }
  
  return res.filter(e => e.length === n);
}


// Solution 2
function eachCons(array, n) {
  let cascadingSubset = [];
  for( i = 0; i <= array.length - n; i++){
    cascadingSubset.push(array.slice(i, i + n ));
  }
  return cascadingSubset;
}


// Solution 3
function eachCons(array, n) {
  const newArr = [];
  for (let a=n, i=0; a <= array.length; i++, a++){
    newArr.push(array.slice(i,a))
  }
  return newArr
}


// Solution 4
const eachCons = (l,n) => [...Array(Math.max(0,l.length-n+1)).keys()].map(i=>l.slice(i,i+n));


// Solution 5
const eachCons = (arr, n) => {
  let result = []
  for (let i = 0; i <= arr.length - n; i++) {
    let temp = []
    for (let j = 0; j < n; j++) {
      temp.push(arr[i + j])
    }
    result.push(temp)
  }
  return result
}


// Solution 6
function eachCons(array, n) {
  return array.map((x,y) => array.slice(y, y + n)).filter(x => x.length == n)
}


// Solution 7
function eachCons(array, n, result=[]) {
  if (array.length < n) return result;
   
  result = [...result, array.slice(0,n)];  
  const [, ...tail] = array;
  return eachCons(tail, n, result);
}


// Solution 8
eachCons=(a,n)=>a.reduce((p,_,i)=>i+n<=a.length?[...p,a.slice(i,i+n)]:p,[])


// Solution 9
function eachCons(array, n) {
  return Array.from({length: array.length - n + 1}, (_, i) => array.slice(i, i + n))
}


// Solution 10
function eachCons(array, n) {
  return array.map((el, i)=> array.slice(i, i+n)).filter(x => x.length === n)
}


// Solution 11
function eachCons(arr, n) {
  let output = []
  for (let i = 0; i + n <= arr.length; i++) {
    output.push(arr.slice(i, i + n))
  }
  return output
}


// Solution 12
function eachCons(ar, n) {
  let res=[];
  for (let i=0;i+n<=ar.length;i++)
      res.push(ar.slice(i,i+n));
  return res;
}


// Solution 13
function eachCons(array, n) {
  const results = [];
  for (let i = 0; i < array.length - n + 1; i++) {
    results.push(array.slice(i, i + n))
  }
  return results
}


// Solution 14
const eachCons = (arr, n) => arr
  .map((_, idx) => arr.slice(idx, idx + n))
  .filter(i => i.length === n)