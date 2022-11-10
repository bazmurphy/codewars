// Weight for weight

// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// Example:

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes

// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers

// For C: The result is freed.

function orderWeight(strng) {
  return strng
    .split(" ")
    .sort((elementOne, elementTwo) => {
      return elementOne.split("").map((element) => Number(element)).reduce((acc, cv) => acc + cv, 0) 
            - elementTwo.split("").map((element) => Number(element)).reduce((acc, cv) => acc + cv, 0) 
            || elementOne.localeCompare(elementTwo);
    })
    .join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));
// "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// "11 11 2000 10003 22 123 1234000 44444444 9999"


// Solution 1
function orderWeight(strng) {
  const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
   function comp(a,b){
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
  return strng.split(' ').sort(comp).join(' ');
 }


// Solution 2
function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}


// Solution 3
function digitSum(str) {
  return str.split('').reduce(function(s, e) { 
    return s + parseInt(e); 
  }, 0);
}

function orderWeight(str) {
    return str.split(' ').sort(function(a, b) {
      return digitSum(a) - digitSum(b) || a.localeCompare(b);
    }).join(' ');
}


// Solution 4
function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
}


// Solution 5
function orderWeight(s) {
  return s.split(' ').sort((a,b) => sum(a) - sum(b) || a.localeCompare(b)).join(' ');
}
function sum(s) { return s.split('').reduce((s,v) => s + +v, 0); }


// Solution 6
function orderWeight(s) {
  return s.split(' ').sort((a,b)=>a.split('').reduce((pv,cv)=>pv+ +cv,0)-b.split('').reduce((pv,cv)=>pv+ +cv,0)||(a>b?1:-1)).join(' ');
}


// Solution 7
function orderWeight(str) {
  return str.split(" ").sort((a,b) => {
    let sumA = a.split("").reduce((acc,cur) => acc+Number(cur), 0)
    let sumB = b.split("").reduce((acc,cur) => acc+Number(cur), 0)
    if (sumA < sumB) return -1
    if (sumA > sumB) return 1
    if (a < b) return -1
    return 1
  })
  .join(" ")
}


// Solution 8
let orderWeight = s => s.split` `.sort((r, s) => r.split``.reduce((s, n) => s + +n, 0) - s.split``.reduce((s, n) => s + +n, 0) || r.localeCompare(s)).join` `;


// Solution 9
const orderWeight = (string) => {
  return string
    .split(' ')
    .sort((a,b) => weight(a) - weight(b) || a.localeCompare(b))
    .join(' ')
}

const weight = (string) => string.split('').reduce((acc, el) => acc + +el, 0)


// Solution 10
function sum(n){
  return n.split('').map(Number).reduce((a,b)=> a+b , 0 )
}
function sortNum(a,b){
  return sum(a) === sum(b) ? a > b ? 1 : -1 : sum(a) - sum(b)
}
function orderWeight(strng) {
   return strng.split(' ').sort(sortNum).join(' ')
}


// Solution 11
const weight = str => [...str].reduce((acc, dgt) => acc + +dgt, 0);

const orderWeight = string =>
  string.trim().split(/\s+/).sort((a,b) => weight(a) - weight(b) || a.localeCompare(b)).join` `;


// Solution 12
function orderWeight(strng) {
  let array = strng.split(' ');
  let map = new Map();
  for (let elem of array) {
    let sum = 0;
    for (let digit of elem) {
        sum+= +digit;
    }
    map.set(elem, sum);
  }
  
  array.sort(function(weight1, weight2) {
      if (map.get(weight1) === map.get(weight2)) {
          return weight1 > weight2 ? 1 : -1;
      }
    
    return map.get(weight1) - map.get(weight2);
  })
  
  return array.join(' ');
  
}


// Solution 13
function orderWeight(strng) {
  return strng.split(" ").sort(function f(a, b){ 
    return eval(a.split("").join("+")) - eval(b.split("").join("+")) + ([a, b].sort()[1] == a ? 0.1 : -0.1);
  }).join(" ");
}


// Solution 14
function orderWeight(strng) {
  return strng.split(' ').sort((a,b) => {
      var c = a.split('').reduce((a, b) => Number(a) + Number(b));
      var d = b.split('').reduce((a, b) => Number(a) + Number(b));
      return (c < d) ? -1 : (c > d) ? 1 : a.localeCompare(b);
  }).join(' ');
}