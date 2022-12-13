// Collatz Conjecture (3n+1)

// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1

// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// #References

// Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture

var hotpo = function(n) { 
  let count = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else if (n % 2 !== 0) {
      n = (3 * n) + 1;
    }
    count++;
  }
  return count;
}

console.log(hotpo(1));
// 0
console.log(hotpo(5));
// 5
console.log(hotpo(6));
// 8
console.log(hotpo(23));
// 15


// Solution 1
var hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}


// Solution 2
var hotpo = function(n){
  var rs=0;
  while (n>1){
    rs++;
    n=n%2?n*3+1:n/2;
  }
  return rs;
}


// Solution 3
const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);


// Solution 4
let hotpo = n => {
  if (n == 0) return 0;
  let c = 0;
  while (n > 1) {
   n = (n % 2 ? 3 * n + 1 : n / 2);
   c++;
  }
  return c;
}


// Solution 5
var hotpo = function(n){
  if(n == 0) return 0;
  for (let i = 0; i < 100; i++){
      if (n == 1){
        return i;
      }else if ( n % 2 == 0){
        n /= 2;
      }else{
        n = n * 3 + 1
      }
  }  
}


// Solution 6
const hotpo = n => 
  n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1;


// Solution 7
const hotpo = (n, s = 0) => n <= 1 ? s : n % 2 ? hotpo(3 * n + 1,s+1) : hotpo( n/2, s + 1)


// Solution 8
const  hotpo = n =>n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n * 0.5 );


// Solution 9
hotpo = n => n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1


// Solution 10
var hotpo = function(n, def = 0){
  return (n <= 1) ? def 
  : hotpo(n % 2 == 0 ? n / 2 : 3 * n + 1, def + 1) 
}


// Solution 11
var hotpo = function(n){
  let i = 0;

  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    i++;
  }

  return i; 
}


// Solution 12
function hotpo(n) {
  const even = x => x % 2 == 0
  let count = 0
  while(n !== 1) {
    n = even(n) ? n/2 : 3*n + 1
    count++
  }
  return count
}


// Solution 13
var hotpo = function(n){
  var res=0;
  while(n>1){++res; n%2==0 ? n/=2 : n=3*n+1;}
  return res;
}


// Solution 14
var hotpo = function(n) {
  for(var res = 0; n!==1; res++)
    n = n%2 ? n*3+1 : n/2;
  return res;  
}