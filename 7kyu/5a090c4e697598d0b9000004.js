// Max-min arrays

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]

// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

function solve(arr){

    let newArr = [];

    let arraySorted = arr.sort((a,b)=>a-b)

    // console.log('arraySorted: ', arraySorted)

    let max;
    let min;

    while (arraySorted.length > 0) {
        
        max = arraySorted.splice(-1, 1)
        min = arraySorted.splice(0,1)

        // console.log('max: ', max, 'max.length :', max.length)
        // console.log('min: ', min, 'min.length :', min.length)
        
        if (max.length > 0) {
            newArr = newArr.concat(max)
        }

        if (min.length > 0) {
            newArr = newArr.concat(min)
        }
    }

    // console.log('arraySorted AFTER: ', arraySorted)
    // console.log('newArr AFTER: ', newArr)
    
    return newArr;

}


console.log(solve([15,11,10,7,12]));
// [15,7,12,10,11]
console.log(solve([91,75,86,14,82]));
// [91,14,86,75,82]
console.log(solve([84,79,76,61,78]));
// [84,61,79,76,78]
console.log(solve([52,77,72,44,74,76,40]));
// [77,40,76,44,74,52,72]
console.log(solve([1,6,9,4,3,7,8,2]));
// [9,1,8,2,7,3,6,4]
console.log(solve([78,79,52,87,16,74,31,63,80]));
// [87,16,80,31,79,52,78,63,74]


// Solution 1
function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
}


// Solution 2
const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());


// Solution 3
function solve(arr, ar = arr.sort((a, b)=> b - a)){
    let ind = Math.ceil(arr.length/2)
    arr = ar.slice(0, ind)
    ar = ar.slice(ind).reverse()
    return [].concat(...arr.map((_,i)=> ar[i] ? [arr[i], ar[i]] : [arr[i]]))
};


// Solution 4
function solve(arr){
    let result = []
   
    while(arr[0]){
      let max = Math.max.apply(Math,arr)
      let min = Math.min.apply(Math,arr)
      
      if(arr.length === 1){
        result.push(arr[0])
      } else {
         result.push(max)
         result.push(min)
      }
  
      arr.splice(arr.indexOf(max) , 1)
      arr.splice(arr.indexOf(min) , 1)
     
    }
    return result
};


// Solution 5
function solve(arr) {
    arr = arr.slice().sort((x,y) => x-y)
    let ans = []
    while (arr.length) {
      ans.push(arr.pop())
      if (arr.length) ans.push(arr.shift())
    }
    return ans
}


// Solution 6
function solve(arr){
    let res = []
    let len = arr.length
    for(let i=0; i<len; i++) {
      
      if(i%2===0) {
        let max = Math.max(...arr)
        arr.splice (arr.indexOf(max), 1);
        res.push(max)
        
      }else {
        let min = Math.min(...arr)
        arr.splice (arr.indexOf(min), 1);
        res.push(min)
      }
    }
    return res
};


// Solution 7
function solve(arr){
    const output = [];
    arr.sort((a, b)=> a - b);
    
    while( arr.length > 0 ){
      output.push(arr.pop())
      output.push(arr.shift())
    }
    return output.filter(e => e)
};


// Solution 8
// BEST SOLUTION | Time Complexity => O(n^2) | Not using shift()
function solve(arr){
  
    let resultArray = []; // T(4) O(1)
    let sortedIndexedCollection = arr.sort((a, b) => a - b); //Quicksort O(n^2)
    let leftCursor = 0;
    let numberOfTimesToRun = undefined;
  
      numberOfTimesToRun = ~~ sortedIndexedCollection.length / 2;
    
    for(let index in sortedIndexedCollection){
      
        resultArray.push(sortedIndexedCollection.pop())
        resultArray.push(sortedIndexedCollection[leftCursor])
  
        leftCursor++;
      
      
      if(index === numberOfTimesToRun - 1){
        break;
      }
      
    }
    if(resultArray[resultArray.length-1] == undefined){
      resultArray.pop();
    }
   
    
  
    
    return resultArray;
    
}


// Solution 9
function solve(arr) {
    const sortedArr = arr.sort((a, b) => a - b)
    const res = []
    let isMax = true
    while (sortedArr.length > 0) {
      res.push(isMax ? sortedArr.pop() : sortedArr.shift())
      isMax = !isMax
    }
    
    return res
};


// Solution 10
const solve = (array) => (
    [...array].sort(
      (a, b) => a - b
    ).reduce(
      (a, b, i, arr) => a.concat(
        arr[arr.length - i - 1], b
      ), []
    ).slice(0, array.length)
)