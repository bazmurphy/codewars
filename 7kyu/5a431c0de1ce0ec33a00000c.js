// Even numbers in an array

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  return array
    .filter((element) => element % 2 === 0)
    .slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]));
// [-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
// [6]


// Solution 1
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


// Solution 2
const isEven = n => n % 2 === 0;
const evenNumbers = (a, n) => a.filter(isEven).slice(-n);


// Solution 3
var evenNumbers = (arr, num) => arr.filter(el=> el % 2 == 0).slice(-num)


// Solution 4
function evenNumbers(array, number) {
 var EvenNumbers= [];
 
 for(var i=0; i<=array.length; i++)
  {
      if(array[i] % 2 ==0)
        EvenNumbers.push(array[i]);
  }
 
   return EvenNumbers.splice(EvenNumbers.length-number,number);
   
}


// Solution 5
const evenNumbers = (array, number) =>
  array.filter(val => !(val & 1)).slice(-number);


// Solution 6
function evenNumbers(array, number) {
      let arr = [];
      for (let i=array.length-1;number>0;i--){
        if (array[i] % 2 == 0) {
          arr.push(array[i]);
          number--;
        }
      }
  return arr.reverse();
}


// Solution 7
function evenNumbers (numbers, count) {
  let result = []
  
  for (let index = numbers.length - 1; index >= 0; index -= 1) {
    if (result.length === count) break
    
    const number = numbers[index]
    if (number % 2 === 0) result.unshift(number)
  }
  
  return result
}


// Solution 8
const evenNumbers = (a, n) => a.filter(e => !(e % 2)).slice(-n);


// Solution 9
function evenNumbers(array, number) {
    let l = array.filter(e => e % 2 === 0)
    return l.slice(l.length - number)
}


// Solution 10
function evenNumbers(array, number) {
  return array.filter(num => num % 2 == 0).slice(-number);
}


// Solution 11
const evenNumbers = (array, number) => array.filter(el => el  % 2 == 0).slice(- number);


// Solution 12
const evenNumbers = (arr, num) => arr.filter(n => !(n & 1)).slice(-num);


// Solution 13
const evenNumbers = (a, n) => a.reduceRight((s,e)=> (s.length<n && e%2==0? s.concat([e]) : s) , []).reverse();


// Solution 14
function evenNumbers(arr, n) {
  return arr.filter(x => x % 2 == 0)
            .reverse()
            .slice(0,n)
            .reverse()
}