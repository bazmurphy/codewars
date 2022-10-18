// Training JS #12: loop statement --for..in and for..of

// In lesson #11, we learned that the for loop can be used to traverse an array. 
// If we want to traverse an object, we can use a variant of the for: for..in. 
// This can traverse all the keys of the object. 
// An example:

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
// console.log("keys of ob:")
// showObjectKeys(ob);
// console.log("values of ob:")
// showObjectValues(ob);

// Code results:

// keys of ob:
// item1
// item2
// item3
// item4
// values of ob:
// This
// is
// an
// example

// for..in can also be used with arrays. Modifying the code above:

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var arr=["one","two","three"];
// console.log("keys of arr:")
// showObjectKeys(arr);
// console.log("values of arr:")
// showObjectValues(arr);

// Code results:

// keys of arr:
// 0
// 1
// 2
// values of arr:
// one
// two
// three

// As you can see, the keys are the indices of the array elements. 
// Important: When using for..in with an array, the key (index) is always a string, not a number. 
// In the example above, the keys are "0", "1", and "2". 
// We can't see the quotes because console.log() doesn't show them.

// Although for..in can be used to traverse the array, this is discouraged because in some cases the order may be unexpected. 
// So it's recommended that you use another variant for this: for..of (new in ES6). for..of can traverse all the values of the array (without accessing them through their index). 
// Function showObjectValues() from above can be modified like this:

// function showArrayValues(arr){
//   for (var value of arr){
//     console.log(value);
//   }
// }

// Ok, lesson is over, let's do a task with for..in.

// Task

// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). 
// Then, traverse obj, checking each key and value. 
// If the length of the key is equal to 5, then push the key to your array. 
// Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.


function giveMeFive(obj){
  let output = [];
  for (let key in obj) {
    if (key.length === 5) {
      output.push(key);
    }
    if (obj[key].length === 5) {
      output.push(obj[key]);
    }
  }
  return output;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
// ["earth","world"]
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
// ["Ihave","money","model"]
console.log(giveMeFive({Pears:"than",apple:"sweet"}));
// ["Pears","apple","sweet"]


// Solution 1
function giveMeFive(obj){
  var five=[];
  for (var key in obj) {
    if (key.length==5) five.push(key);
    if (obj[key].length==5) five.push(obj[key]);
  }
  return five;
}


// Solution 2
function giveMeFive(obj) {
  var five = [];
  for (var key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  return five;
}


// Solution 3
function giveMeFive(obj) {
  const fives = []
  
  for (key in obj) {
    if (obj.hasOwnProperty(key)) { // always use this with for..in loops for objects !
      if (key.length === 5) fives.push(key)
      if (obj[key].length === 5) fives.push(obj[key])
    }
  }
  
  return fives
}


// Solution 4
giveMeFive = obj => 
  Object              // converting instead for ( in )
    .entries(obj)
    .join(',')
    .split(',')         
    .filter(i => i.length == 5);


// Solution 5
const giveMeFive = obj =>
  [].concat(...Object.entries(obj, `for( in `)).filter(val => val.length === 5);


// Solution 6
giveMeFive = o => {
  let r = [];
  for (k in o) {
    if (k.length == 5) r.push(k);
    if (o[k].length == 5) r.push(o[k]);
  }
  return r;
}


// Solution 7
const giveMeFive = obj => /*for( in )*/[].concat(...Object.entries(obj)).filter(element => element.length == 5)


// Solution 8
function giveMeFive(obj){
  var out = []
  for (x in obj){
    if (x.length==5) out.push(x)
    if (obj[x].length==5) out.push( obj[x] ) 
  }
  return out
}


// Solution 9
function giveMeFive(obj) {
  const fives = [];
  for (const k in obj) {
    const v = obj[k];
    if (k.length == 5) fives.push(k);
    if (v.length == 5) fives.push(v);
  }
  return fives;
}


// Solution 10
function giveMeFive(obj){
  return Object.entries(obj).join(',').split(',').filter((el) => el.length == 5);
}


// Solution 11
function giveMeFive(obj){
   five=[];
   for (o in obj) {
      if (o.length==5) five.push(o);
      if (obj[o].length==5) five.push(obj[o]);
   }
   return five
}


// Solution 12
function giveMeFive(obj){
  let arr = []
  for(let key in obj) {
   arr.push(key) && arr.push(obj[key])
  }
  return arr.filter( word => word.length === 5) 
}


// Solution 13
function giveMeFive(obj){
  const output = []
  for (text in obj) {
    if (text.length === 5) output.push(text)
    if (obj[text].length === 5) output.push(obj[text])
  }
  return output
}


// Solution 14
var giveMeFive=(o)=>Object.entries(o)// for ( in )
.join(',').split(',').filter(e=>e.length==5);