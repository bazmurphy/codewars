// Training JS #32: methods of Math---round() ceil() and floor()

// From this lesson, we learn about JS static object: Math. It mainly helps us to carry out mathematical calculations. It has a lot of properties and methods. Some of the properties and methods we rarely used. So we only learn some common methods.

// The properties of the Math object are some constants, such as PI, on behalf of the approximate value of pi. The usage is Math.PI. I will no longer introduce one by one, please refer to the manual:

// Math Object

// In this lesson we learn three methods to turn a number into an integer: round(), ceil() and floor().

// Their definitions and detailed information:

// Math.round()
// Math.ceil()
// Math.floor()

// First of all, we have to understand the first thing, all the methods of the Math object are static methods. It means that you need to use the Math method like this: Math.round(1.23). Not like this: (1.23).round().

// Here we use some examples to understand their usage:

// console.log(Math.round(1.45)); //output:1
// console.log(Math.ceil(1.45));  //output:2
// console.log(Math.floor(1.45)); //output:1
// console.log(Math.round(1.55)); //output:2
// console.log(Math.ceil(1.55));  //output:2
// console.log(Math.floor(1.55)); //output:1

// We can see, ceil() always rounding up to get a large integer; floor() always rounding down to get a small integer; round() according to the fractional part and round it to integer.

// When the parameter is negative, they still works:

// console.log(Math.round(-1.45)); //output:-1
// console.log(Math.ceil(-1.45));  //output:-1
// console.log(Math.floor(-1.45)); //output:-2
// console.log(Math.round(-1.55)); //output:-2
// console.log(Math.ceil(-1.55));  //output:-1
// console.log(Math.floor(-1.55)); //output:-2

// It should be noted that they are not working on the fractional part. If you want to keep two decimal places or otherwise, you should use Methods of Number object--toFixed(), toExponential() and toPrecision(), or use the following techniques:

// var n=1.23456
// var a=Math.round(n*100)/100
// var b=Math.ceil(n*100)/100
// var c=Math.floor(n*100)/100
// console.log(a,b,c);  //output: 1.23 1.24 1.23

// In the example above, we first multiply the number by 100, and then round it. the final result is to retain two decimal places.

// Ok, lesson is over. let's us do some task.

// Task

// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4

// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34

// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

function roundIt(n) {
  const numbers = n.toString().split(".");
  if (numbers[0].length > numbers[1].length) {
    return Math.floor(n);
  } else if (numbers[0].length < numbers[1].length) {
    return Math.ceil(n);
  } else {
    return Math.round(n);
  }
}

console.log(roundIt(3.45));
// 4
console.log(roundIt(34.5));
// 34
console.log(roundIt(34.56));
// 35


// Solution 1
function roundIt(n){
  var [a, b] = n.toString().split('.');
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}


// Solution 2
function roundIt(n) {
  var [a, b] = String(n).split('.').map(s => s.length);
  if (a < b) return Math.ceil(n);
  if (a > b) return Math.floor(n);
  return Math.round(n);
}


// Solution 3
function roundIt (n) {
  let [left, right] = n.toString().split('.').map(x => x.length),
      dx = left - right,
      fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round
  return fn(n)
}


// Solution 4
function roundIt(n){
  let [l, r] = n.toString().split('.')
  l = l.length;
  r = r.length;
  console.log(l, r);
  if(l < r) return Math.ceil(n);
  if(l > r) return Math.floor(n);
  return Math.round(n);
}


// Solution 5
const roundIt = n =>
  (val => val < 0 ? Math.ceil(n) : val > 0 ? Math.floor(n) : Math.round(n))
  (`${n}`.split(`.`)[0].length - `${n}`.split(`.`)[1].length);


// Solution 6
roundIt = n => {
  let s = String(n).split('.'), s0 = s[0].length, s1 = s[1].length;
  return n = s0 < s1 ? Math.ceil(n) : (s0 > s1) ? Math.floor(n) : Math.round(n);
}


// Solution 7
const roundIt = n => {
  const a = String(n).split('.')
  
  if (a[0].length < a[1].length) return Math.ceil(n)
  if (a[0].length > a[1].length) return Math.floor(n)
  return Math.round(n)
}


// Solution 8
function roundIt(n){
  [a,b] = [...(n+'').split('.')].map(a=>a.length)
  return eval(`Math.${a<b?'ceil':a>b?'floor':'round'}(${n})`)
}


// Solution 9
function roundIt(n){
  let N = String(n).split('.')
  let [a,b] = [N[0].length,N[1].length]
  switch (true){
    case a==b:   return Math.round(n); break;
    case a>b:   return Math.floor(n); break;
    case a<b:   return Math.ceil(n); break;
  }
}


// Solution 10
const roundIt = n =>
  Math[
    String(n).split('.')
      .map(el => el.length)
        .reduce((r, e, i, a) =>
          a[i+1] ? ((e < a[i+1]) ? 'ceil' : (e > a[i+1]) ? 'floor' : r) : r 
        , 'round')
  ](n)


// Solution 11
function roundIt(n){
  nAr = String(n).split(".");
  return nAr[0].length < nAr[1].length ? Math.ceil(n) : nAr[0].length > nAr[1].length ? parseInt(n) : Math.round(n);
}


// Solution 12
function roundIt(n){
  let [l, r] = n.toString().split('.').map((c) => c.length)
  return l === r ? Math.round(n) : l > r ? Math.floor(n) : Math.ceil(n);
}


// Solution 13
roundIt = n =>
  (difference => difference < 0 ? Math.ceil(n) : difference > 0 ? Math.floor(n) : Math.round(n))
  (String(n).split('.').reduce((prev,curr) => prev.length - curr.length)) 


// Solution 14
function roundIt(n){
  var [l, r] = String(n).split('.');
  return l.length>r.length?Math.floor(n):l.length==r.length?Math.round(n):Math.ceil(n);
}