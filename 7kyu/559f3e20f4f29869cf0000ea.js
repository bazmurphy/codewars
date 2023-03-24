// Sort with Arrow Functions

// Order People by age Using Arrow Function

// Sort and Order people by their age using Arrow Functions

// Task
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions

// Input
// Input will be a valid array with People objects containing an Age and Name

// Output
// Output will be a valid sorted array with People objects sorted by Age in ascending order

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const OrderPeople = (people) => people.sort((elementOne, elementTwo) => elementOne.age - elementTwo.age);

console.log(OrderPeople([
  { age: 83, name: 'joel' },
  { age: 46, name: 'roger' },
  { age: 99, name: 'vinny' },
  { age: 26, name: 'don' },
  { age: 74, name: 'brendan' } 
]));


// Solution 1
var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age );
}


// Solution 2
function OrderPeople(people) {
  return people.sort((a, b) => a.age - b.age)
}


// Solution 3
var OrderPeople = function(people){
  return people.sort( (a,b) => a.age - b.age );
}


// Solution 4
const OrderPeople = people => people.sort((a,b) => a.age-b.age)


// Solution 5
var OrderPeople = function(people){
  return people.sort( (a,b) => a.age > b.age ? 1 : a.age < b.age ? -1 : 0); //complete this function
}


// Solution 6
OrderPeople = people => people.sort((a, b) => a.age - b.age)


// Solution 7
const OrderPeople = people => people.sort(({age: p}, {age: n}) => p - n);


// Solution 8
var OrderPeople = (people) => people.sort( (a,b) => a.age-b.age );


// Solution 9
function OrderPeople(people) {
  return people.sort((a,b) => a.age - b.age);
}


// Solution 10
const OrderPeople = function(people){
  return people.slice().sort((a,b)=>a.age - b.age); 
}


// Solution 12
var OrderPeople = function(people){
  return people.sort((a,b) => a.age-b.age/* || a.name<b.name && -1 || a.name>b.name*/);
}


// Solution 13
function OrderPeople (people){
  return people.sort((p, p2) => { return p.age - p2.age; });
}


// Solution 14
var OrderPeople = function(people){
  return people.sort((p1, p2) => p1.age < p2.age ? -1 : p1.age > p2.age ? 1 : 0); //complete this function
}