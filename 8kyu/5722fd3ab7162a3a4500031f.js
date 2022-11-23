// The number is a basic data type in javascript. javascript also supports Number objects. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor Number(). Although it is not necessary to do so. Usage:

// var num=new Number(value);

// Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.

// Constructor Number() can be used without operator new and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN). Usage:

// var num=Number(value);

// Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.

// In addition to the above two, the Number objects have five attributes (or called constant):

// MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

// MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324

// NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.

// Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared with Number.NaN to detect a value is not a number but can only call isNaN() to compare.

// NEGATIVE_INFINITY: The value represents the negative infinity. Usage:Number.NEGATIVE_INFINITY. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.

// POSITIVE_INFINITY: The value represents the positive infinity. Usage:Number.POSITIVE_INFINITY. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.

// Ok, lesson is over. let's us do some task with Number objects.

// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"

// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"

// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

function whatNumberIsIt(n){
  let result;
  if (n === Number.MAX_VALUE) {
    result = "Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    result = "Number.MIN_VALUE";
  } else if (isNaN(n)) {
    result = "Number.NaN";
  } else if (n === Number.NEGATIVE_INFINITY) {
    result = "Number.NEGATIVE_INFINITY";
  } else if (n === Number.POSITIVE_INFINITY) {
    result = "Number.POSITIVE_INFINITY";
  } else {
    result = n;
  }
  return `Input number is ${result}`;
}

console.log(whatNumberIsIt(1/0));
// "Input number is Number.POSITIVE_INFINITY"
console.log(whatNumberIsIt(100));
// "Input number is 100"
console.log(whatNumberIsIt(1.7976931348623157e+308));
// "Input number is Number.MAX_VALUE"
console.log(whatNumberIsIt(5e-324));
// "Input number is Number.MIN_VALUE"
console.log(whatNumberIsIt(-Number.MAX_VALUE*2));
// "Input number is Number.NEGATIVE_INFINITY"
console.log(whatNumberIsIt(NaN));
// "Input number is Number.NaN"
console.log(whatNumberIsIt(Infinity+1));
// "Input number is Number.POSITIVE_INFINITY"


// Solution 1
function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}


// Solution 2
function whatNumberIsIt(n){
  switch(n){
  	case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
  	case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
  	case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
  	case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
  	case Number(n) : return "Input number is " + n;
	default: return "Input number is Number.NaN";
  }
}


// Solution 3
function whatNumberIsIt(n){
  const CHOICES = Object.getOwnPropertyNames(Number);
  let choice = CHOICES.filter(a => n === Number[a]).join('');
  return `Input number is ${(choice ? `Number.${choice}` : isNaN(n) ? 'Number.NaN' : n)}`;
}


// Solution 4
function whatNumberIsIt(n){
  switch (n) {
  case Number.MAX_VALUE:
    return "Input number is Number.MAX_VALUE";
  case Number.MIN_VALUE:
    return "Input number is Number.MIN_VALUE";
  case Number.NEGATIVE_INFINITY:
    return "Input number is Number.NEGATIVE_INFINITY";
  case Number.POSITIVE_INFINITY:
    return "Input number is Number.POSITIVE_INFINITY";
  case Number(n):
    return "Input number is " + n;
  default:
    return "Input number is Number.NaN";
  }
}


// Solution 5
function whatNumberIsIt(n) {
  return `Input number is ${isNaN(n) ? "Number.NaN" : n == Number.MAX_VALUE ? "Number.MAX_VALUE" : n == Number.MIN_VALUE ? "Number.MIN_VALUE" : n > Number.MAX_VALUE ? "Number.POSITIVE_INFINITY" : n < Number.MIN_VALUE ? "Number.NEGATIVE_INFINITY" : n}`;
}


// Solution 6
function whatNumberIsIt(n){
  if (Number.isNaN(n)) return "Input number is Number.NaN";
  switch (n) {
     case Number.POSITIVE_INFINITY: return "Input number is Number.POSITIVE_INFINITY";
     case Number.MAX_VALUE: return "Input number is Number.MAX_VALUE"
     case Number.MIN_VALUE: return "Input number is Number.MIN_VALUE"
     case Number.NEGATIVE_INFINITY: return "Input number is Number.NEGATIVE_INFINITY"
  }
  return "Input number is "+n
}


// Solution 7
function whatNumberIsIt(n){
  var types = ["Number.MAX_VALUE", "Number.MIN_VALUE",  "Number.NaN", "Number.POSITIVE_INFINITY", "Number.NEGATIVE_INFINITY"];
  for (var i in types){
    if (isNaN(n)) {
      return "Input number is Number.NaN";
    }
    if (eval(types[i]) == n) {
      return "Input number is " + types[i]
    }
  }
  return "Input number is " + n;
}


// Solution 8
const whatNumberIsIt = n =>
  `Input number is ${Number.isNaN(n) ? `Number.NaN` : 
    n === Number.MAX_VALUE ? `Number.MAX_VALUE` :
      n === Number.MIN_VALUE ? `Number.MIN_VALUE` :
        n === Infinity ? `Number.POSITIVE_INFINITY` :
          n === -Infinity ? `Number.NEGATIVE_INFINITY` : n}`;


// Solution 9
whatNumberIsIt = (n) => {
  //coding here
  if (n === Number.MAX_VALUE) return ("Input number is Number.MAX_VALUE");
  if (n === Number.MIN_VALUE) return ("Input number is Number.MIN_VALUE");
  if (n === Number.POSITIVE_INFINITY) return ("Input number is Number.POSITIVE_INFINITY");
  if (n === Number.NEGATIVE_INFINITY) return ("Input number is Number.NEGATIVE_INFINITY");
  return Number.isNaN(n) ? "Input number is Number.NaN" : ("Input number is " + n);
}


// Solution 10
function whatNumberIsIt(n,s='Input number is '){
  return s +(n==Number.MAX_VALUE ? "Number.MAX_VALUE"           : 
             n==Number.MIN_VALUE ? "Number.MIN_VALUE"           :
             isNaN(n)            ? "Number.NaN"                 :
             n==-Infinity        ? "Number.NEGATIVE_INFINITY"   :
             n==Infinity         ? "Number.POSITIVE_INFINITY"   : n)
}


// Solution 11
// Object.getOwnPropertyNames & Array.find() & Object.is()

whatNumberIsIt = n => {
  let str = Object
    .getOwnPropertyNames(Number)          // return array with property names
    .slice(1)                             // exclude 1st property (Number.length)
    .find(i => Object.is(Number[i], n));  // return numeric constant name or undefined
  str = str ? 'Number.' + str : n;        // assign str special value or ordinary number
  return `Input number is ${str}`
}


// Solution 12
function whatNumberIsIt(n){
  const possibilities = {
    [Number.MAX_VALUE]: "Input number is Number.MAX_VALUE",
    [Number.MIN_VALUE]: "Input number is Number.MIN_VALUE",
    [Number.NaN]: "Input number is Number.NaN",
    [Number.NEGATIVE_INFINITY]: "Input number is Number.NEGATIVE_INFINITY",
    [Number.POSITIVE_INFINITY]: "Input number is Number.POSITIVE_INFINITY",
  }
  return possibilities[n] || `Input number is ${n}`
}


// Solution 13
function whatNumberIsIt(n){
  return n === Number.MAX_VALUE ? "Input number is Number.MAX_VALUE" :
        n === Number.MIN_VALUE ? "Input number is Number.MIN_VALUE" :
        isNaN(n) ? "Input number is Number.NaN" :
        n <= Number.NEGATIVE_INFINITY ? "Input number is Number.NEGATIVE_INFINITY" :
        n >= Number.POSITIVE_INFINITY ? "Input number is Number.POSITIVE_INFINITY" :
        `Input number is ${n}`;  
  }


// Solution 14
function whatNumberIsIt(n){
  let msg = (n===1.7976931348623157e+308) ? "Input number is Number.MAX_VALUE" :
  (n===5e-324) ? "Input number is Number.MIN_VALUE" :
  (isNaN(n)) ? "Input number is Number.NaN" :
  (n===-Infinity) ? "Input number is Number.NEGATIVE_INFINITY" :
  (n===Infinity) ? "Input number is Number.POSITIVE_INFINITY" :
  "Input number is " + n;
   return msg
 }