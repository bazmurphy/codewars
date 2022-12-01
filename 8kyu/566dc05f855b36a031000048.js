// Add new item (collections are passed by reference)

// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)


function addExtra( listOfNumbers ){
  return [...listOfNumbers, "extra"]
}

console.log(addExtra([1,2,3]).length);
// 4
console.log(addExtra([1,2]).length);
// 3
console.log(addExtra([]).length);
// 1



// Solution 1
function addExtra( listOfNumbers ){
  // your code here
  // add an int to listOfNumbers and return it
  return [...listOfNumbers, 13];
}


// Solution 2
function addExtra(listOfNumbers) {
  return listOfNumbers.concat(0)
}


// Solution 3
const addExtra = listOfNumbers =>
  [...listOfNumbers, null];


// Solution 4
var addExtra = ( listOfNumbers ) => [...listOfNumbers, 10]


// Solution 6
function addExtra(listOfNumbers){
  return [...listOfNumbers, 1];
}


// Solution 7
addExtra = a => a.concat(0);


// Solution 9
const addExtra = listOfNumbers => [...listOfNumbers, 13]