// Check your arguments

// Bob has written a function to detect the type of an object.
// It receives any primitive values or objects, and returns its object type as a string.
// But it seems to be working incorrectly.
// Can you figure out why, and fix the code for him ?

function objectType(obj) {

    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])

    return Object.prototype.toString.call(arguments.length ? obj : null);
}

console.log(objectType(42));
//'[object Number]', '42 should return [object Number]'
console.log(objectType(false));
//'[object Boolean]', 'false should return [object Boolean]'
console.log(objectType(function () { return this; }));
//'[object Function]', 'function(){} should return [object Function]'
console.log(objectType('Hello World!'));
//'[object String]', '\'Hello world\' should return [object string]'

console.log(objectType({ foo: 'bar' }));
//'[object Object]', 'Normal objects should return [object Object]'
console.log(objectType([1, 4, 6, 4, 1]));
//'[object Array]', 'Arrays should return [object Array]'
console.log(objectType(new Date(2012, 11, 21)));
//'[object Date]', 'Date object should return [object Date]'
console.log(objectType(new RegExp(/^_^/g)));
//'[object RegExp]', 'RegExp object should return [object RegExp]'
console.log(objectType(Math));
//'[object Math]', 'Math object should return [object Math]'
console.log(objectType(new Error('this kata is too awesome')));
//'[object Error]', 'Error object should return [object Error]'
console.log(objectType(Symbol('[native code]')));
//'[object Symbol]', 'Symbol object should return [object Symbol]'

console.log(objectType(NaN));
//'[object Number]', 'NaN should return [object Number]'
console.log(objectType(null));
//'[object Null]', 'null should return [object Null]'
console.log(objectType(undefined));
//'[object Undefined]', 'undefined should return [object Undefined]'
console.log(objectType());
//'[object Null]', 'no arguments should return [object Null]'




// Solution 1
function objectType(obj) {
    return Object.prototype.toString.call(arguments.length == 0 ? null : obj);
}


// Solution 2
const objectType = (...args) => Object.prototype.toString.call(...args, null);


// Solution 3
function objectType() {
    const obj = arguments.length === 0 ? null : arguments[0];
    return Object.prototype.toString.call(obj);
}


// Solution 4
function objectType(obj) {
  if (Object.keys(arguments).length === 0) {
    obj = null
  }
  
  return Object.prototype.toString.call(obj);
}


// Solution 5
function objectType(obj=undefined){
  if (arguments.length == 0) return Object.prototype.toString.call(null)
  return Object.prototype.toString.call(obj);
}


// Solution 6
function objectType(obj) {
  if (arguments.length==0) obj = null;
  return ({}).toString.call(obj);
}


// Solution 7
function objectType(obj) {
  
//   console.log(arguments)
//   console.log(arguments.length)
//   console.log(arguments[0])
  
  return Object.prototype.toString.call(!arguments.length || obj === null ? null : obj);
}


// Solution 8
function objectType(obj) {
    if (arguments.length == 0) return objectType(null);
    return Object.prototype.toString.call(obj);
}


// Solution 9
function objectType(obj) {
    //   if (obj >= "null")//if no arguments are passed, defaults to null
    return Object.prototype.toString.call(arguments.length == 0 ? null : obj);
}


// Solution 10
function objectType(obj) { //if no arguments are passed, defaults to null
    return Object.prototype.toString.call(arguments.length == 0 ? null : obj)
} 


// Solution 11
function objectType(obj) {
  const args = [...arguments];
  return (obj === null || !args.length) ? "[object Null]" : (obj === undefined) ? "[object Undefined]" : Object.prototype.toString.call(obj)
}


// Solution 12
function objectType(...args){
  return Object.prototype.toString.call(...args,null) ;
}