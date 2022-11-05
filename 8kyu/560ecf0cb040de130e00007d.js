// Grasshopper - Order of operations

// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. 
// Fix the function to make it return 32 without changing the number or the operators.

function orderOperations () {
  return ((2 + 2) * (2 + 2)) * 2
}

console.log(orderOperations())
// 32


// Solution 1
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}


// Solution 4
let orderOperations = () => (2+2)*(2+2)*2;


// Solution 5
// parenthesis to the addition because
// PEMDAS
// parenthesis, exponents, multiplication/division, addition/subtraction
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

// Solution 6
const orderOperations = () => (2 + 2) * (2 + 2) * 2


// Solution 7
function orderOperations () {
  return ((2 + 2 * 2 + 2) * 2)* 2
}


// Solution 8
const orderOperations = () => (2 + 2) * (2 + 2) * 2;