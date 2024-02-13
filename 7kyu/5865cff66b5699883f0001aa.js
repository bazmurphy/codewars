// All Star Code Challenge #22

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

function toTime(seconds) {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const hoursFloor = Math.floor(hours);
  const minutesFloor = Math.floor((hours * 60) % 60);
  return `${hoursFloor} hour(s) and ${minutesFloor} minute(s)`;
}

console.log(toTime(3600));
// "1 hour(s) and 0 minute(s)"
console.log(toTime(3601));
// "1 hour(s) and 0 minute(s)"
console.log(toTime(3500));
// "0 hour(s) and 58 minute(s)"
console.log(toTime(323500));
// "89 hour(s) and 51 minute(s)"
console.log(toTime(0));
// "0 hour(s) and 0 minute(s)"

// Solution 1
function toTime(time) {
  var h = Math.floor(time / 3600);
  var m = Math.floor((time % 3600) / 60);
  return h + " hour(s) and " + m + " minute(s)";
}

// Solution 2
function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

// Solution 3
function toTime(seconds) {
  return Math.floor(seconds / 3600) + " hour(s) and " + Math.floor((seconds % 3600) / 60) + " minute(s)";
}
