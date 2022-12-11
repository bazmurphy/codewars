function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}

console.log(integrate(3,2));
// "1x^3"
console.log(integrate(12,5));
// "2x^6"
console.log(integrate(20,1));
// "10x^2
console.log(integrate(40,3));
// "10x^4
console.log,(integrate(90,2));
// "30x^3 


// Solution 1
const integrate = (coefficient, exponent) => {
  return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
}


// Solution 2
integrate = (c, e) => `${c / (e += 1)}x^${e}`;


// Solution 3
function integrate(coeff, exp) {
  return (coeff / (++exp)) + 'x^' + exp;
}


// Solution 4
const integrate = (coefficient, exponent) => `${coefficient / ++exponent}x^${exponent}`;


// Solution 5
function integrate(coefficient, exponent) {
  const a = exponent + 1 ;
  const b = coefficient / a;
  return `${b}x^${a}`;
}


// Solution 6
const integrate= (coefficient, exponent) => coefficient/(exponent+1)+"x^"+(exponent+1)


// Solution 7
function integrate(coefficient, exponent) {
  return coefficient / (exponent + 1) + "x^" + (exponent + 1);
}


// Solution 8
const integrate = (coef, exp) => `${coef/(exp+1)}x^${exp+1}`;


// Solution 9
function integrate(a, b) {
  return (b++,a/b+'x^'+b)
}


// Solution 10
function integrate(coefficient, exponent) {
  return `${coefficient/(exponent+1)}x^${exponent+1}`
}


// Solution 11
function integrate(a, b) {
  return `${a/++b}x^${b}`
}


// Solution 12
function integrate (coefficient, exponent) {
  let exp =  exponent + 1
  let coe = coefficient / (exponent + 1)
  return coe + "x^" + exp
}
// add one to the exponent 
// divide the coefficient by that new number 



// Solution 13
function integrate(c, e) {
  let newExp = e + 1;
  let newCoef = c / newExp;
  return (newCoef + 'x' + '^' + newExp) + '';
}


// Solution 14
function integrate(coefficient, exponent) {
  return `${coefficient/(exponent+1)}x^${exponent+1}`
} 