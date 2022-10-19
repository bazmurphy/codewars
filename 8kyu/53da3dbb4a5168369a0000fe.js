// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if(number % 2 === 0) {
    return "Even";
  } else if(number % 2 !== 0) {
    return "Odd";
  }
}

console.log(even_or_odd(2));
// "Even"
console.log(even_or_odd(7));
// "Odd"
console.log(even_or_odd(-42));
// "Even"
console.log(even_or_odd(-7));
// "Odd"
console.log(even_or_odd(0));
// "Even"


// Solution 1
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}


// Solution 2
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


// Solution 3
function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}


// Solution 4
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';


// Solution 5
function even_or_odd(number) {
  return ( (number % 2) == 0 ) ? "Even" : "Odd";
}


// Solution 6
const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';


// Solution 7
var even_or_odd = n => n & 1 ? 'Odd' : 'Even'


// Solution 8
function even_or_odd(number) {
  if (number % 2 === 0)
    return "Even"
  else
    return "Odd"
}


// Solution 9
function even_or_odd(number) {
  return number%2==0 ? 'Even' : 'Odd'
}


// Solution 10
function even_or_odd(number) {
  return number & 1 ? 'Odd' : 'Even';
}


// Solution 11
function even_or_odd(number) {
 if(number%2 === 0 ){
   return "Even";
  }
  return "Odd"; 
}


// Solution 12
const even_or_odd = (number) => number % 2 ? 'Odd' : 'Even'


// Solution 13
function even_or_odd(n) {
  return n % 2 ? 'Odd' : 'Even';
}


// Solution 14
const even_or_odd = number => number % 2 == 0 ? 'Even' : 'Odd';