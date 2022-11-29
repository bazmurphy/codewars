// Array Helpers

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!

// Example

// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function() {
    return this.map((element) => Math.pow(element, 2));
}

Array.prototype.cube = function() {
    return this.map((element) => Math.pow(element, 3));
}

Array.prototype.sum = function() {
    return this.reduce((elementOne, elementTwo) => elementOne + elementTwo, 0);
}

Array.prototype.average = function() {
    return this.reduce((elementOne, elementTwo) => elementOne + elementTwo, 0) / this.length;
}

Array.prototype.even = function() {
    return this.filter((element) => element % 2 === 0);
}

Array.prototype.odd = function() {
    return this.filter((element) => element % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square())
// [1, 4, 9, 16, 25]
console.log(numbers.cube());
// [1, 8, 27, 64, 125]
console.log(numbers.sum());
// 15
console.log(numbers.average());
// 3
console.log(numbers.even());
// [2, 4]
console.log(numbers.odd());
// [1, 3, 5]


// Solution 1
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }


// Solution 2
Object.assign(Array.prototype, {
    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);}
});


// Solution 3
Array.prototype.square = function() {
  var squared = [];
  for (var i = 0; i < this.length; i++) {
    squared[i] = Math.pow(this[i], 2);
  }
  return squared;
}

Array.prototype.cube = function() {
  var cubed = [];
  for (var i = 0; i < this.length; i++) {
    cubed[i] = Math.pow(this[i], 3);
  }
  return cubed;
}

Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.average = function() {
  if (this.length == 0) return NaN;
  return this.sum() / this.length;
}

Array.prototype.even = function() {
  var evens = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) evens.push(this[i]);
  }
  return evens;
}

Array.prototype.odd = function() {
  var odds = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 1) odds.push(this[i]);
  }
  return odds;
}


// Solution 4
Array.prototype.square = function(){
  return this.map(a => Math.pow(a, 2));
}

Array.prototype.cube = function(){
  return this.map(a => Math.pow(a, 3));
}

Array.prototype.sum = function(){
  return this.reduce((a, b) => a + b, 0);
}

Array.prototype.average = function(){
  return this.sum() / this.length;
}

Array.prototype.even = function(){
  return this.filter(a => !(a % 2));
}

Array.prototype.odd = function(){
  return this.filter(a => !!(a % 2));
}


// Solution 5
rray.prototype.square  = Square;
Array.prototype.cube    = Cube;
Array.prototype.average = Average;
Array.prototype.sum     = Sum;
Array.prototype.even    = Even;
Array.prototype.odd     = Odd;

function Square()  { return this.map(function(e){return e*e;});                         }
function Cube()    { return this.map(function(e){return e*e*e;});                       }
function Average() { return this.sum() / this.length;                                   }
function Sum()     { return (this == '') ? 0 : this.reduce(function(a,b){return a+b;}); }
function Even()    { return this.filter(function(e){return e%2==0;});                   }
function Odd()     { return this.filter(function(e){return e%2!=0;});                   }


// Solution 6
Object.assign(Array.prototype, {
  square() { return this.map(x => x * x) },
  cube() { return this.map(x => x * x * x) },
  sum() { return this.reduce((a, b) => a + b, 0) },
  average() { return this.sum() / this.length },
  even() { return this.filter(x => !(x % 2)) },
  odd() { return this.filter(x => (x % 2)) }
})


// Solution 7
Object.assign(Array.prototype, {
  square(){return this.map(x=>x*x)},
  cube(){return this.map(x=>x*x*x)},
  sum(){return this.reduce((acc,val)=>acc+val,0)},
  average(){return this.length?this.sum()/this.length:NaN},
  odd(){return this.filter(x=>x&1)},
  even(){return this.filter(x=>!(x&1))}
})


// Solution 8
const square = x => x*x;
const cube   = x => x*x*x;
const sum    = (p, c) => p + c;
const even   = x => x % 2 == 0;
const odd    = x => !even(x);

Array.prototype.square =  function() { return this.map(square); }
Array.prototype.cube =    function() { return this.map(cube); }
Array.prototype.sum =     function() { return this.reduce(sum, 0); }
Array.prototype.average = function() { return this.length ? this.reduce(sum, 0) / this.length : NaN; }
Array.prototype.even =    function() { return this.filter(even); }
Array.prototype.odd =     function() { return this.filter(odd); }


// Solution 9
Array.prototype.square = function() { return this.map(n => n * n)}

Array.prototype.cube = function() { return this.map(n => n * n * n)}

Array.prototype.sum = function() { return this.reduce((a, b) => a + b, 0)}

Array.prototype.average = function() { return this.sum() / this.length}

Array.prototype.even = function() { return this.filter(n => !(n & 1))}

Array.prototype.odd = function() { return this.filter(n => (n & 1))}


// Solution 10
Object.assign(Array.prototype, {
  square() {return this.map(val => val ** 2);},
  cube() {return this.map(val => val ** 3);},
  average() {return this.sum() / this.length;},
  sum() {return this.reduce((pre, val) => pre + val, 0);},
  even() {return this.filter(val => !(val % 2));},
  odd() {return this.filter(val => val % 2);}
});