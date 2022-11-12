// Expressions Matter

// Task

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

// Example

// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

// So the maximum value that you can obtain is 9.
// Notes

// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    (a + b) * c,
    a * (b + c),
    (a * b) * c,
    a * (b * c)
  )
}

console.log(expressionMatter(2, 1, 2));
// 6
console.log(expressionMatter(2, 1, 1));
// 4
console.log(expressionMatter(1, 1, 1));
// 3
console.log(expressionMatter(1, 2, 3));
// 9
console.log(expressionMatter(1, 3, 1));
// 5
console.log(expressionMatter(2, 2, 2));
// 8
console.log(expressionMatter(5, 1, 3));
// 20
console.log(expressionMatter(3, 5, 7));
// 105
console.log(expressionMatter(5, 6, 1));
// 35
console.log(expressionMatter(1, 6, 1));
// 8
console.log(expressionMatter(2, 6, 1));
// 14
console.log(expressionMatter(6, 7, 1));
// 48
console.log(expressionMatter(2, 10, 3));
// 60
console.log(expressionMatter(1, 8, 3));
// 27
console.log(expressionMatter(9, 7, 2));
// 126
console.log(expressionMatter(1, 1, 10));
// 20
console.log(expressionMatter(9, 1, 1));
// 18
console.log(expressionMatter(10, 5, 6));
// 300
console.log(expressionMatter(1, 10, 1));
// 12


// Solution 1
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}


// Solution 2
function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}


// Solution 3
const expressionMatter=(a,b,c)=>Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);


// Solution 4
function expressionMatter(a, b, c) {
  
  if(a==1 && b==1 && c==1){
    return 3;
  }
  
  if(a!=1 && b!=1 && c!=1){
    return a*b*c;
  }
  if(a==1 && b!=1 && c!=1){
    return (a+b)*c
  }
   if(a!=1 && b!=1 && c==1){
    return a*(b+c);
  }
 
  if(a!=1 && b==1 && c==1){
    return a*2;
  }
 
  if(a==1 && b==1 && c!=1){
    return c*2;
  }
 
  if(a==1 && b!=1 && c==1){
    if(a==c){
      return a+b+c;
    }
    if(a>c){
      return a*(b+c);
    }
    if(a<c){
      return (a+b)*c;
    }
  }
  
  if(a!=1 && b==1 && c!=1){
    if(a==c){
      return (a+b)*c;
    }
    if(a>c){
      return a*(b+c);
    }
    if(a<c){
      return (a+b)*c;
    }
    
  }
  
}


// Solution 5
function expressionMatter(a, b, c) {
  let arr = [];
  arr.push(a + b + c);
  arr.push(a * b * c);
  arr.push(a + b * c);
  arr.push(a * b + c);
  arr.push((a + b) * c);
  arr.push(a * (b + c));
  return arr.reduce((a,b) => Math.max(a, b));
}


// Solution 6
const expressionMatter = (a,b,c) => Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c ) ;


// Solution 7
function expressionMatter(a, b, c) {
  var values = [(a*(b+c)), (a*b*c), (a+b*c), ((a+b)*c), (a+b+c)];
  return Math.max(...values);
}


// Solution 8
function expressionMatter(a, b, c) {
  if (a == 1 && b == 1 && c == 1) {
    return 3;
  } else if (a == 1 && c == 1) {
    return a + b + c;
  } else if ((a == 1 || c == 1) || (a != 1 && b == 1 && c != 1)) {
    return a < c ? (a+b)*c : a*(b+c);
  } else {
    return a * b * c;
  }
}


// Solution 9
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);
}


// Solution 10
var max = Math.max

function expressionMatter(a, b, c) {
  const add = (a, b) => a + b
  const mult = (a, b) => a * b
  const opPairs = [[add, add], [mult, mult], [add, mult], [mult, add]] 
  
  let maxRes = -Infinity
  for (const [op1, op2] of opPairs){
    maxRes = max(maxRes, op2(op1(a, b), c))
    maxRes = max(maxRes, op1(op2(b, c), a))
  }
  return maxRes
}


// Solution 11
function expressionMatter(a, b, c) {
  let arr = [
    a + b + c,
    a * b * c,
    a * b + c,
    a + b * c,
    a * (b + c),
    (a + b) * c,
  ];
  let max = arr.sort( (a, b) => b - a );
  return max[0];
}


// Solution 12
expressionMatter = (a, b, c) =>
{
  return Math.max(
    a * (b + c),
    (a + b) * c,
    a * b * c,
    a + b * c,
    a + b + c
  )
}


// Solution 13
function expressionMatter(a, b, c) {
  let multi = a * b * c;
  let add = a + b + c;
  let addMulti = (a + b) * c;
  let multiAdd = a * (b + c);
  
  return Math.max(multi, add, addMulti, multiAdd);
}


// Solution 14
function expressionMatter(a, b, c) {
  let arr = [];
  arr.push(a + b + c);
  arr.push((a + b) * c);
  arr.push(a * (b + c));
  arr.push(a * b * c);
  arr.push(a * b + c);
  arr.push(a + b * c)
  return Math.max.apply(null, arr);
}