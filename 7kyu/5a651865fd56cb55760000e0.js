// Array Leaders (Array Series #3)

// Definition

// An element is leader if it is greater than The Sum all the elements to its right side.

// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes

// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples

// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

// Explanation:

// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

// Explanation:

// 17 is greater than the sum all the elements to its right side
// 5 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}

// Explanation:

// 5 is greater than the sum all the elements to its right side
// 2 is greater than the sum all the elements to its right side

// Note : The last element -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

// Explanation:

// 0 is greater than the sum all the elements to its right side
// -1 is greater than the sum all the elements to its right side
// 3 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

function arrayLeaders(numbers){

  let output = [];

  for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] > numbers.slice(i+1).reduce((acc, cv) => acc + cv, 0)) {
      output.push(numbers[i]);
     }
  }

  return output;

}

console.log(arrayLeaders([1,2,3,4,0]));
// [4]
console.log(arrayLeaders([16,17,4,3,5,2]));
// [17,5,2]
console.log(arrayLeaders([-1,-29,-26,-2]));
// [-1]
console.log(arrayLeaders([-36,-12,-27]));
//  [-36,-12]
console.log(arrayLeaders([5,-2,2]));
// [5,2]
console.log(arrayLeaders([0,-1,-29,3,2]));
//  [0,-1,3,2]


// Solution 1
var arrayLeaders = numbers => {
  let answer = [];

  for (let i=0; i<numbers.length; i++){          //loop through array
    let sum = 0;
    for (let j=i+1; j<numbers.length; j++){      //start one position right of the main loop element
      sum += numbers[j];                         //add all those numbers together
    }
    
    if(numbers[i] > sum){                        //compare that sum to the initial number
      answer.push(numbers[i]);                   //if it's bigger push it to the answer array
    }
  }
  return answer;                                 //return it like it's defective
}


// Solution 2
var arrayLeaders = numbers => {
  return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}


// Solution 3
// O(n) attempt
var arrayLeaders = numbers => {
  const sumOfAllAfter = []

  let sum = 0
  for (let i = numbers.length - 1; i >= 0; i--) {
    sumOfAllAfter[i] = sum
    sum += numbers[i]
  }

  return numbers.filter((num, i) => num > sumOfAllAfter[i])
}


// Solution 4
const arrayLeaders = numbers => 
  numbers.filter((val, idx) => val > numbers.slice(++idx).reduce((pre, val) => pre + val, 0));


// Solution 5
var arrayLeaders = numbers => {

  let sum = 0, res = []
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > sum) res.unshift(numbers[i]);
    sum += numbers[i];
  }

  return res;
}


// Solution 6
// WTF task without meaning, yuck!
const arrayLeaders = (numbers, arr = []) => {
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > numbers.slice(i+1).reduce((a,b)=> a+b, 0)){
      arr.push(numbers[i])
    }
  }
  return arr
}


// Solution 7
const arrayLeaders = numbers => {
  return numbers.filter((n, i) => n > numbers.slice(i + 1).reduce((a, b) => a + b, 0));
};


// Solution 8
const arrayLeaders = nums => nums.reduceRight(({ sum, acc }, n) => (
  { sum: sum + n, acc: n > sum ? [n, ...acc] : acc }
), { sum: 0, acc: [] }).acc;


// Solution 9
const arrayLeaders = nums => nums.filter((n, i) => nums.slice(i + 1).reduce((a, v) => a + v, 0) < n);


// Solution 10
var arrayLeaders = numbers => {

  let res = []
  ,   sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {

    if (numbers[i] > sum)
      res.push(numbers[i])

    sum += numbers[i];

  }

  return res.reverse();
  
}


// Solution 11
arrayLeaders=n=>n.filter((e,i)=>e>n.slice(i+1).reduce((a,b)=>a+b,0))


// Solution 12
const calcSum = a => a.reduce((s,v)=>s+v,0)

const arrayLeaders = N => N.filter((n,i,RA) => n > calcSum( RA.slice(i+1) ) )


// Solution 13
var arrayLeaders = numbers => {
  let arr = []
  for(i=0; i < numbers.length; i++){
   if(numbers[i] > numbers.slice(i+1).reduce((a,b) => a + b, 0)) arr.push(numbers[i]) 
  }
   return arr
 }


// Solution 14
function arrayLeaders(num){
  let sum = num.reduce((a,b)=>a+b)
  return num
  .filter((x) => {
    sum -= x
    return sum < x
  })
}