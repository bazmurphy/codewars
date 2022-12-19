// Potenciation

// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

function power(x,y){
  return x**y;
}

// function power(x,y) {
//     let result = 1;
//     for (let i = 0; i < y; i++) {
//         result = result * x;
//     }
//     return result;
// }

console.log(power(1,701270))
// 1
console.log(power(2,2))
// 4
console.log(power(3,2))
// 9
console.log(power(-1,40))
// 1


// Solution 1
function power(x,y){
  return x**y;
}

// Solution 2
function power(x,y){
  var result = 1;
  for(var i=0;i<y;i++){
    result = result*x;
  }
  return result;
}


// Solution 3
const power = (x,y) => x ** y ;


// Solution 4
power = (x, y) => x ** y;


// Solution 5
const power = (x,y) => {
  if (y === 0) {
    return 1;
  }
  
  if (y === 1) {
    return x;
  }
  
  if (y % 2 === 0) {
    return power(x * x, y / 2);
  } else {
    return power(x, y - 1) * x;
  }
}


// Solution 6
function power(x,y){
  if (x == 1) return 1
  return y ? x * power(x, y-1) : 1
}


// Solution 7
let power = (x, y) => x ** y;


// Solution 8
const power = (x,y) => [...new Array(y)].fill(x).reduce((a,c)=>a*c, 1)


// Solution 9
function power(x,y){
  return (x == 0 && y == 0) ? 1 : x ** y
}


// Solution 10



// Solution 11



// Solution 12



// Solution 13



// Solution 14