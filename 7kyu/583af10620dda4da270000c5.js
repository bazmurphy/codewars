// Merge two arrays

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

function mergeArrays(a, b) {

    // console.log('\na: ', a,'\nb: ', b)
    // console.log('\na.length: ', a.length,'\nb.length: ', b.length)

    let newArr = [];

    let newArrLength = a.length > b.length ? a.length : b.length;
    // console.log('newArrLength: ', newArrLength);

    for (let i = 0; i < newArrLength; i++) {
        newArr.push(a[i])
        newArr.push(b[i])
    }

    return newArr.filter(element => element !== undefined);
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
// [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), );
// ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']));
// [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]));
// ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']


// Solution 1
function mergeArrays(a, b) {
    var returnArray = [];
    var counter = 0;
    while (a[counter] || b[counter] ){
      if(a[counter]){
        returnArray.push(a[counter]);
      }
      if(b[counter]){
        returnArray.push(b[counter]);
      }
      counter++;
      
     }
     return returnArray;
}


// Solution 2
function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a:b;
    for (var i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return j
}


// Solution 3
function mergeArrays(a, b) {
    var answer = [];
    
    for (i = 0; i < Math.max(a.length, b.length); i++){
      if (i < a.length) {answer.push(a[i]);}
      if (i < b.length) {answer.push(b[i]);}
    }
    
    return answer;   
  
}


// Solution 5
const mergeArrays = ( $ , $2) => [...Array($.length + $2.length)].reduce((acc, el, i) => acc.concat( $[i],$2[i]), []).filter(e => e)


// Solution 6
function mergeArrays(a, b) {
    var res = [];
    let i=0; 
    while ((i<a.length) || (i<b.length) ) {
      if (i<a.length) res.push(a[i]); 
      if (i<b.length) res.push(b[i]); 
      i++;
    }
    return res;
}


// Solution 7
function mergeArrays(a, b) {
    let answer = [];
    
    for (let i = 0; a[i] || b[i]; i++) {
      if (a[i]) {answer.push(a[i])};
      if (b[i]) {answer.push(b[i])};
    }
    
    return answer;
}


// Solution 8
const mergeArrays = (a, b) => a
  .reduce((arr, el, idx) => (b[idx] ? arr.push(el, b[idx]) : arr.push(el), arr), [])
  .concat(b.slice(a.length));


// Solution 9
function mergeArrays(a, b) {
    const result = [];
    while (a.length || b.length) {
      if (a.length)
        result.push(a.shift());
      if (b.length)
        result.push(b.shift());
    }
    return result;
}


// Solution 10
const mergeArrays = (a, b) =>
  a.reduce((pre, val) => b.length ? [...pre, val, b.shift()] : [...pre, val], []).concat(b);


// Solution 11
function mergeArrays(a, b, result=[]) {
    // new Array    make a new empty array with the longer input array
    //   .fill      give each index something to map over
    //   .forEach   for each index in indexArray
    //              push the corresponding a & b value to resultArray
    new Array(a.length < b.length ? b.length : a.length)
      .fill()
      .forEach( 
        (_, i) => result.push(a[i], b[i])
      )
    
    // strip any undefined entries out of resultArray, and return it
    return result.filter(x=>!!x)
}


// Solution 11
const mergeArrays = ([ a, ...b ], x = []) =>
  a === undefined ? x : [ a, ...mergeArrays (x, b) ];