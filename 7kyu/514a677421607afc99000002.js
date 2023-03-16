// getNames()

// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']


function getNames(data){
  // return data.map(function(item) {return item.name});
  return data.map(item => item.name);
}

const data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]
console.log(getNames(data));
// ['Joe', 'Bill', 'Kate'])


// Solution 1
function getNames(data){
  return data.map(function(item){return item.name});
}


// Solution 2
function getNames(data){
  return data.map(i => i.name);
}


// Solution 3
function getNames(data){
  return data.map(item => item.name);
}


// Solution 4
const getNames = data =>
  data.map(item => item.name);


// Solution 5
function getNames(data){
  return data.map(function(e){ return e.name});
}


// Solution 6
function getNames(data){
  var array = [];
  for(var key in data) {
    array.push(data[key].name);
  }
  return array;
}


// Solution 7
// function getNames(data){
//   return data.map(function(item){return item.name});
// }
// --- but it will be easier to do this:
const getNames = (data) => data.map(el => el.name)


// Solution 8
const getNames = data =>
  data.map(val => val.name);