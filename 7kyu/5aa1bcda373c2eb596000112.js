// Maximum Triplet Sum (Array Series #7) 

// Task

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Notes :

// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples

// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

// Explanation:

// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)

// Explanation:

// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)

// Explanation:

// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

function maxTriSum(numbers){
  return [...new Set(numbers)]
      .sort((elementOne, elementTwo) => elementTwo - elementOne)
      .slice(0, 3)
      .reduce((acc, cv) => acc + cv, 0);
}

console.log(maxTriSum([3,2,6,8,2,3]));
// 17
console.log(maxTriSum([2,9,13,10,5,2,9,5]));
// 32
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]));
// 18
console.log(maxTriSum([-3,-27,-4,-2,-27,-2]));
// -9
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]));
// -33
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]));
// 232
console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]));
// 41
console.log(maxTriSum([-2,0,2]));
// 0
console.log(maxTriSum([-2,-4,0,-9,2]));
// 0
console.log(maxTriSum([-5,-1,-9,0,2]));
// 1


// Solution 1
const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}


// Solution 2
function maxTriSum(numbers){
  return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
}


// Solution 3
function maxTriSum(numbers){
  return [...new Set(numbers)]
    .sort( (a,b) => a - b)
    .slice(-3)
    .reduce( (acc,el) => acc + el);
}


// Solution 4
function maxTriSum(numbers){
  numbers.sort((a, b) => b - a)
  let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
  return arr[0] + arr[1] + arr[2]
}


// Solution 5
const maxTriSum = numbers => [...new Set(numbers)].sort((p, n) => n - p).slice(0,3).reduce((a, v) => a + v);


// Solution 6
const maxTriSum = a => a.sort((a, b) => a - b).filter((e, i) => a.lastIndexOf(e) === i).slice(-3).reduce((s, e) => s + e, 0);


// Solution 7
const maxTriSum = numbers =>
  [...new Set(numbers)].sort((a, b) => a - b).slice(-3).reduce((pre, val) => pre + val);


// Solution 8
const maxTriSum = numbers => [...(new Set(numbers))].sort((a, b) => a-b).slice(-3).reduce((p, c) => p+c);


// Solution 9
maxTriSum=a=>a.sort((a,b)=>a-b).filter((a,b,c)=>b===c.indexOf(a)).slice(-3).reduce((a,b)=>a+b)


// Solution 10
function maxTriSum(numbers){
  const [a,b,c] = [...new Set(numbers)].sort((a,b) => b-a)
  return a+b+c
}


// Solution 12
function maxTriSum(arr){
  let [a,b,c] = [...new Set(arr)].sort((a,b)=>a-b).slice`-3`
  return a+b+c
}


// Solution 13
const maxTriSum = (numbers, arr = [...new Set(numbers)].sort((a,b)=> b-a)) =>
arr.slice(0,3).reduce((a, i)=> a+i, 0)


// Solution 14
function maxTriSum(numbers){
  let sorting = [...new Set(numbers)];
  let ninja = sorting.sort((a, b) => b - a);
  return ninja[0] + ninja[1] + ninja[2]
}