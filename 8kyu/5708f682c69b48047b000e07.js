// Multiply the number

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

function multiply(number){
  // let convertedNumber = Math.abs(number);
  // let numberAsAString = convertedNumber.toString();
  // let lengthOfNumber = numberAsAString.length;
  // let solution = number * Math.pow(5, lengthOfNumber);
  // return solution;

  return number * Math.pow(5, Math.abs(number).toString().length);

}

console.log(multiply(10))
// 250
console.log(multiply(5))
// 25
console.log(multiply(200))
// 25000
console.log(multiply(0))
// 0
console.log(multiply(-2))
// -10


// Solution 1
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}


// Solution 2
function multiply(number){
  var x = "'" + number + "'"
  if (number >= 0){
  var a = x.length - 2
  }else if (number < 0){
  var a = x.length - 3
  }
  var b =  Math.pow(5, a)
  return number * b
  }


// Solution 4
const multiply = num => num * 5 ** (Math.abs(num).toString()).length


// Solution 5
const multiply = number => number * Math.pow(5, (Math.abs(number) + "").length);


// Solution 6
function multiply(number){
  //your code here
  let numStr = number.toString().replace("-", "");
  return number* Math.pow(5,numStr.length)
}


// Solution 7
multiply=number=>number * 5 ** String(Math.abs(number)).length


// Solution 8
function multiply(n) {
  const digCount = Math.floor(Math.log10(Math.abs(n)) + 1) || 1
  return n * 5**digCount
}


// Solution 9
function multiply(number){
  var c = number.toString().replace('-', '').length;
  for( var now = 0; now < c; ++now )
    number *= 5;
  return number;
}


// Solution 10
const multiply = n => n * Math.pow(5,(Math.abs(n)+'').length)


// Solution 11
function multiply(number){
  return number * Math.pow(5, ('' + Math.abs(number)).length);
}


// Solution 12
const multiply = (number) => number * Math.pow(5, String(number).replace(/[^0-9]/g, '').length)