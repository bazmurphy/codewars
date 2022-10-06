// Is the date today

// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


function isToday(date) {
  function convertDateToTruncatedString(date) {
    return date.toString().split(" ").filter((element, index) => index < 4).join(" ");
  }
  return convertDateToTruncatedString(date) === convertDateToTruncatedString(new Date());
}

const today = new Date();
console.log(isToday(today))
// true

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(isToday(tomorrow))
// false

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday));
// false


// Solution 1
function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}


// Solution 2
function isToday(date) {
  var today = new Date();
  return date.toDateString() == today.toDateString();
}


// Solution 3
function isToday(date) {
  var d = new Date();
  return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
}


// Solution 4
const isToday = receivedDate => new Date().toDateString() === receivedDate.toDateString();


// Solution 5
function isToday(date) {
  return new Date().toString().substr(0, 15) === date.toString().substr(0, 15);
}


// Solution 6
const isToday = date => date.toDateString() === new Date().toDateString()


// Solution 7
const isToday = date => new Date().toDateString() === date.toDateString();


// Solution 8
const isToday = date => {
  let d = new Date();
  return ['getDate', 'getMonth', 'getFullYear'].every(v => date[v]() == d[v]());
}


// Solution 9
function isToday(date) {
  today = new Date();
  return today.setHours(0,0,0,0) == date.setHours(0,0,0,0);
}


// Solution 10
function isToday(date) {
  return (''+date).slice(0, 16) === Date().slice(0, 16);
}


// Solution 11
function isToday(date) {
  var currdate = new Date();
  return currdate.toLocaleDateString() == date.toLocaleDateString();
}


// Solution 12
isToday = d => (new Date()).toDateString() == d.toDateString();


// Solution 13
function isToday(date) {
  let dateAux = new Date();
  return date.getDate() == dateAux.getDate() && date.getMonth() == dateAux.getMonth() && date.getFullYear() == dateAux.getFullYear()
}


// Solution 14
function isToday(date) {
  return new Date().toDateString()==date.toDateString()
}