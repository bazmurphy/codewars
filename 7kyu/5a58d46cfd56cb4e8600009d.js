// Halving Sum

// Task

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.
// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let sum = 0;
  while (n >= 1) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}

console.log(halvingSum(25));
// 47
console.log(halvingSum(127));
// 247


// Solution 1
function halvingSum(n) {
  var sum = 0;
  while(n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}


// Solution 2
function halvingSum(n) {
    if(n === 1) return n;
    return n + halvingSum(Math.floor(n/2));
}


// Solution 3
const halvingSum = n => n > 1 ? n + halvingSum(n / 2 | 0) : n


// Solution 4
function halvingSum(n) {
    if (n < 1) return 0;
    return n + halvingSum(parseInt(n/2));
}


// Solution 5
function halvingSum(n) {
  return n*2-eval([...n.toString(2)].join`+`)
}


// Solution 6
function halvingSum(n) {
  return n * 2 - n.toString(2).match(/1/g).length;
}


// Solution 7
function halvingSum(n) {
    return n === 1 ? 1 : n + halvingSum(Math.floor(n/2))
}


// Solution 8
halvingSum=H=Q=>Q&&Q+H(Q>>1)


// Solution 9
function halvingSum(n, acc = 0) {

  if (n == 0) return acc;
   
  newN = Math.floor(n / 2);
  
  return halvingSum( newN, n + acc );
}


// Solution 10
function halvingSum(n) {
    var result = 0;
    
    while(n>=1){
      result = result + n;
      n = Math.floor(n/2);
    }
    return result;
}


// Solution 11
function halvingSum(n) {
    let total = []  
    while(n > 0){
      total.push(n)
      n = Math.floor(n/2)
    } 
  return total.reduce((a,b) => a+b)
}


// Solution 12
var halvingSum = (n) => Array.from({length: 14}, (_,i) => 2**i).map(e => parseInt(n/e)).reduce((a,b)=> a+b,0)


// Solution 13
const halvingSum = n =>
  n + (n > 1 && halvingSum(n >> 1));


// Solution 14
const halvingSum = n =>n === 1 ? 1 : n + halvingSum( ~~(n/2) )