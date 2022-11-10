// Equal Sides Of An Array

// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array [1,2,3,4,3,2,1]:

// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ([1,2,3]) and the sum of the right side of the index ([3,2,1]) both equal 6.

// Let's look at another one.

// You are given the array [1,100,50,-51,1,1]:

// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ([1]) and the sum of the right side of the index ([50,-51,1,1]) both equal 1.

// Last one:

// You are given the array [20,10,-80,10,10,15,35]
// At index 0 the left side is []
// The right side is [10,-80,10,10,15,35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. 
// If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr) {

    // for (let i = 0; i < arr.length; i++) {

    //     const firstChunk = arr.slice(0,i);
    //     const secondChunk = arr.slice(i+1, arr.length)
    //     const firstChunkTotal = firstChunk.reduce((acc, cv) => acc + cv, 0);
    //     const secondChunkTotal = secondChunk.reduce((acc, cv) => acc + cv, 0);

    //     // console.log(`firstChunk ${firstChunk}`)
    //     // console.log(`firstChunkTotal ${firstChunkTotal}`)
    //     // console.log(`secondChunk ${secondChunk}`)
    //     // console.log(`secondChunkTotal ${secondChunkTotal}`)

    //     if (firstChunkTotal === secondChunkTotal) {
    //         return i;
    //     }

    // }

    // return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0,i).reduce((acc, cv) => acc + cv, 0) === (arr.slice(i+1, arr.length).reduce((acc, cv) => acc + cv, 0))) {
            return i;
        }
    }

    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
// 3
console.log(findEvenIndex([1,100,50,-51,1,1]));
// 1
console.log(findEvenIndex([1,2,3,4,5,6]));
// -1
console.log(findEvenIndex([20,10,30,10,10,15,35]));
// 3


// Solution 1
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}


// Solution 2
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));


// Solution 3
function findEvenIndex(arr)
{
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}


// Solution 4
function findEvenIndex(arr)
{
  function sum(arr){
    return arr.reduce(function(a,b){return a+b;},0);
  }

  return arr.findIndex(function(el,i,arr){
    return sum(arr.slice(0, i)) === sum(arr.slice(i+1,arr.length));
  });
}


// Solution 5
function findEvenIndex(arr) {
  return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).reduce((p,c)=>p+c,0));
}


// Solution 6
function findEvenIndex(arr){
  const sum = arr => arr.reduce((acc,cur)=> (acc+cur) ,0)
  return arr.findIndex((val,idx) => sum(arr.slice(0,idx)) === sum(arr.slice(idx+1)))
}


// Solution 7
function findEvenIndex(arr) {
  // LOOP THROUGH INDEX
    for (var i = 0; i < arr.length; i++) {
      var j = arr.slice(0, i);
      var l = arr.slice(i+1, arr.length);
  // ADD THE LEFT SIDE AND THE RIGHT SIDE 
      function add(a, b) {
        return a + b
      }
    var sumLeft = j.reduce(add, 0);
    
    var sumRight = l.reduce(add, 0);

  // DOES IS EQUAL THE SAME 
    if (sumLeft === sumRight) {
      return i
    };
    if (i === arr.length-1 && sumLeft!== sumRight) {
      return -1
     }
    }
}


// Solution 8
function findEvenIndex(arr) {
  var leftsum = 0;
  var rightsum = 0;
  for(var i = 0; i < arr.length; i++) {
    rightsum += arr[i]; 
  }
  for(i = 0; i < arr.length; i++) {
    rightsum -= arr[i];
    if(leftsum === rightsum) return i;
    leftsum += arr[i];
  }
  return -1;
}


// Solution 9
findEvenIndex=(a,b=a=>a.reduce((a,b)=>a+b,0))=>a.findIndex((_,i)=>b(a.slice(0,i))==b(a.slice(i+1)))


// Solution 10
function sum(a, b) { 
    return a + b; 
}
function findEvenIndex(arr) {
  return arr.findIndex((_, i) =>
    arr.slice(0, i + 1).reduce(sum) === arr.slice(i).reduce(sum)
  );
}


// Solution 11
function findEvenIndex(arr) {
    var sum = arr.reduce((c, p) => c + p), res = -1, sumHalf = 0;
    for(var i = 0; i < arr.length; i++) {
      if((sum - arr[i]) / 2 === sumHalf ) {
        return i;
      } else {
        sumHalf += arr[i];
      }
    }
    return res;
}


// Solution 12
function findEvenIndex(arr) {
  let lSum = 0;
  let rSum = 0;
  arr.forEach((a)=>{
    rSum += a;
  });
  for(let i = 0; i < arr.length; i++){
    rSum -= arr[i];
    if(lSum == rSum){
      return i;
    }else{
      lSum += arr[i];
    }
  }
  return -1;
}