// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  return (h * 3600000) + (m * 60000) + (s * 1000)
}

console.log(past(0,1,1))
// 61000
console.log(past(1,1,1))
// 3661000
console.log(past(0,0,0))
// 0
console.log(past(1,0,1))
// 3601000
console.log(past(1,0,0))
// 3600000


// Solution 1
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}


// Solution 2
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);


// Solution 3
function past(h, m, s){
  var miliseconds = 0;
  miliseconds = miliseconds + s * 1000;
  miliseconds = miliseconds + m * 60000;
  miliseconds = miliseconds + h * 3600000;
  return miliseconds;
}


// Solution 4
function past(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;
  
  return hours + minutes + seconds;
}


// Solution 5
function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}


// Solution 6
const past = (h, m, s) => 3600000*h + 60000*m + 1000*s



// Solution 7
function past(h, m, s){
  return h * 3600000 + m * 60000  + s * 1000;
}


// Solution 8
past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;


// Solution 9
function past(h, m, s){
  return (((h*60) + m)*60 + s)*1000;
}


// Solution 10
function past(h, m, s){
  let milliseconds = 0;
  if (h >= 0 && h <= 23){
    milliseconds += (h * 3600000);
  };
  if (m >= 0 && m <= 59){
    milliseconds += (m * 60000);
  };
  if (s >= 0 && s <= 59){
    milliseconds += (s * 1000);
  };
  
  return milliseconds;
};


// Solution 11
const past = (...args) =>
  args.reduce((pre, val) => 60 * pre + val, 0) * 1e3;


// Solution 12
function past(h, m, s){
    return (h * 3.6e+6) + (m * 60000) + (s * 1000);
  }


// Solution 13
const past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;


// Solution 14
function past(h, m, s){
  return (h*60*60 + m*60 + s) * 1000;
}