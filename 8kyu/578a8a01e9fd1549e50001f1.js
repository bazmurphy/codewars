// Is your period late?

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength) {
  return today.getTime() - last.getTime() > (cycleLength * 24 * 60 * 60 * 1000) ? true : false;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))
// false
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))
// true


// Solution 1
function periodIsLate(last, today, cycleLength) { 
  return (today-last)/86400000>cycleLength
}


// Solution 2
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

function periodIsLate(last, today, cycleLength)
{
  return Math.floor((today - last) / _MS_PER_DAY) > cycleLength;
}


// Solution 3
function periodIsLate(last, today, c){
  return (last.setDate(last.getDate()+c),last<today)
}


// Solution 4
function periodIsLate(last, today, cycleLength){
var oneDay = 1000 * 60 * 60 * 24;
var difference = ( today.getTime() - last.getTime())/oneDay;

if(difference > cycleLength)
{
return true;
}
  return false;
}


// Solution 5
function periodIsLate(last, today, cycleLength){
  var daysSinceLastPeriod = (today.getTime() - last.getTime())/86400000;
  
  if(daysSinceLastPeriod > cycleLength){return true}
  
  return false
 
}


// Solution 6
function periodIsLate(last, today, cycleLength) {
  var expected = new Date(last);
  expected.setDate(expected.getDate()+cycleLength)
  return expected < today;
}


// Solution 7
function periodIsLate(last, today, cycleLength) {

  return cycleLength * (24 * 60 * 60 * 1000) < today - last;
}


// Solution 8
const periodIsLate = (l, t, c) => Math.floor(t.getTime() - l.getTime()) / 86400000 > c


// Solution 9
function periodIsLate(last, today, cycleLength) {
  return (today - last) / 60 / 60 / 24 / 1000 - cycleLength > 0;
}


// Solution 11
let periodIsLate=(last, today, cycleLength)=> (today-last)/(86400000)>cycleLength


// Solution 12
function periodIsLate(last, today, cycleLength) {
  const MS_IN_DAY = 1000 * 60 * 60 *24;
  return (today.getTime() - last.getTime()) / MS_IN_DAY > cycleLength;
}


// Solution 13
const periodIsLate = (last, today, cycleLength) => {
  const date = new Date(last)
  date.setDate(date.getDate() + cycleLength)
  return date < today;
}


// Solution 14
function periodIsLate(last, today, cycleLength) {
  var result = new Date(last);
  result.setDate(result.getDate() + cycleLength);
  return result < today;
}