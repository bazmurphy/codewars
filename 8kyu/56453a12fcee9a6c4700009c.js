// Compare within margin

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. 
// The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

// Please note the following:

// When a is close to b, return 0.

// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

function closeCompare(a, b, margin = 0) {
    if (margin >= Math.abs(a - b)) {
      return 0;
    } else if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
}

console.log(closeCompare(4, 5));
// -1
console.log(closeCompare(5, 5));
// 0
console.log(closeCompare(6, 5));
// 1
console.log(closeCompare(-6, -5));
// -1
console.log(closeCompare(2, 5, 3));
// 0
console.log(closeCompare(8.1, 5, 3));
// 1
console.log(closeCompare(1.99, 5, 3));
// -1


// Solution 1
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}


// Solution 2
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}


// Solution 3
function closeCompare(a, b, margin = 0) {
  return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
}


// Solution 4
function closeCompare(a, b, margin){
  if(a == b || Math.abs(a - b) <= margin){
    return 0
  }
  return a > b ? 1 : -1;
}


// Solution 5
var closeCompare = (a, b, margin=0) => a - margin > b ? 1 : a + margin < b ? -1 : 0


// Solution 6
const closeCompare = ($, ﬂ, m = 0) => $ - m > ﬂ ? 1 : $ + m < ﬂ ? -1 : 0


// Solution 7
const closeCompare = function (a, b, m=0){
  if(a === b) return 0;
  if(a > b){
    if (a + m <= b || a - m <= b) return 0;
    return 1;
  }else{
    if(a + m >= b) return 0;
    return -1;
  }
}


// Solution 8
function closeCompare(a, b, margin = 0) {
  if (Math.abs(a - b) <= margin) return 0;
  return (a < b) ? -1 : 1;
}


// Solution 9
const closeCompare = (a, b, margin = 0) =>
  Math.sign(a - b) * (Math.abs(a - b) > margin);


// Solution 10
closeCompare = (a, b, margin) => Math.abs(a-b) <= margin ? 0 : Math.sign(a - b)


// Solution 11
closeCompare=(a,b,m=0)=>Math.abs(a-b)<=m?0:a>b?1:-1;


// Solution 12
function closeCompare(a, b, margin=0){
  let difference=Math.abs(a-b);
  if (margin>=difference) return 0;
  return a<b ? -1 : 1
}


// Solution 13
function closeCompare(a, b, margin = 0){
  return margin + Math.min(a, b) >= Math.max(a, b) ? 0 : a > b ? 1 : -1;
}


// Solution 14
function closeCompare(a, b, margin){
  if (!margin) margin = 0;
  var diff = Math.abs(a - b);
  
  if (diff <= margin) return 0;
  if (a > b) return 1;
  else if (a < b) return -1;
}