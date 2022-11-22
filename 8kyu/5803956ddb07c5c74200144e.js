// Age Range Compatibility Equation

// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

// minimum age <= your age <= maximum age #Task

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age

// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20


function datingRange(age){
  let min;
  let max;
  if (age <= 14) {
    min = age - 0.10 * age;
    max = age + 0.10 * age;
  } else {
    min = (age / 2) + 7;
    max = (age - 7) * 2;
  }
  return `${Math.floor(min)}-${Math.floor(max)}`
}

console.log(datingRange(17));
// "15-20"
console.log(datingRange(40));
// "27-66"
console.log(datingRange(15));
// "14-16"
console.log(datingRange(35));
// "24-56"
console.log(datingRange(10));
// "9-11"


// Solution 1
function datingRange(age){
  return `${min(age)}-${max(age)}`;
  
  function min(age) {
    return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
  }
  
  function max(age) {
    return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  }
}


// Solution 2
function datingRange(n) {
  return [n <= 14 ? 0.9 * n : 0.5 * n + 7, n <= 14 ? 1.1 * n : 2 * n - 14].map(Math.floor).join("-");
}


// Solution 3
function datingRange(age){
  var min = age > 14 ? age/2 + 7 : age - (0.10 * age);
  var max = age > 14 ? (age-7)*2 : age + (0.10 * age);
  
  return Math.floor(min) + "" + '-' + Math.floor(max) + ""
}


// Solution 4
function datingRange(age){
  let min = 0, 
      max = 0
  if (age <= 14) {
    min = Math.floor(age - 0.10 * age)
    max = Math.floor(age + 0.10 * age)
  } else {
    min = Math.floor(age / 2 + 7)
    max = Math.floor((age - 7) * 2)
  }
  return `${min}-${max}`
}


// Solution 5
const datingRange = age =>
  age > 14 ? `${age / 2 + 7 ^ 0}-${(age - 7) * 2 ^ 0}` : `${0.9 * age ^ 0}-${1.1 * age ^ 0}`;


// Solution 6
const datingRange = (age, min, max) => {
  if (age > 14) [min, max] = [Math.floor(age / 2 + 7), age * 2 - 14];
  else [min, max] = [Math.floor(age * 0.9), Math.floor(age * 1.1)];
  return [min, max].join('-');
}


// Solution 7
datingRange = a => a > 14 ? `${~~(a / 2) + 7}-${a * 2 - 14}` : `${~~(a * 0.9)}-${~~(a * 1.1)}`;


// Solution 8
const flr = (x) => Math.floor(x);

function datingRange(age) {
  return age <= 14
    ? `${flr(age * 0.9)}-${flr(age * 1.1)}`
    : `${flr(age / 2 + 7)}-${flr((age - 7) * 2)}`;
}


// Solution 9
function datingRange(age){
  //return min-max
  if(age <= 14) return `${(age - .1 * age) ^ 0}-${(age + .1 * age) ^ 0}`;
  return `${(age / 2 + 7) | 0}-${2 * (age - 7) | 0}`;
}


// Solution 10
function datingRange(age) {
  let over14 = `${Math.floor((age / 2) + 7)}-${Math.floor((age - 7) *2) }`;
  let under14 = `${Math.floor(Math.abs((age * .10 ) - age))}-${Math.floor((age * .10) + age)}`;

  return (age<= 14 ? under14 : over14);   
}


// Solution 11
function datingRange(age){
  let min = (age / 2) + 7;
  let max = (age - 7) * 2;
  
  if(age <= 14) {
    min = age - (0.10 * age);
    max = age + (0.10 * age);
  } else {
    min;
    max;
  }
  return `${Math.trunc( min )}-${Math.trunc( max )}`;
}


// Solution 12
function datingRange(age){
  return age > 14 ? `${parseInt(age/2)+7}-${(age-7)*2}` : `${parseInt(age-0.1*age)}-${parseInt(age+0.10*age)}`;
}


// Solution 13
function datingRange(age, max=0, min=0){
  if ( age > 14) {
    min = Math.floor(age / 2) + 7;
    max = (age - 7) * 2;
  } else {
    min = Math.floor(age - 0.10 * age);
    max = Math.floor(age + 0.10 * age);
  }
  return [min, max].join('-')
}


// Solution 14
function datingRange(age){
  let yMin = Math.floor(age - 0.10 * age),
      yMax = Math.floor(age + 0.10 * age),
      oMin = Math.floor((age / 2) + 7),
      oMax = Math.floor((age - 7) * 2);  
  
  return (age <= 14) ? `${yMin}-${yMax}` : `${oMin}-${oMax}`;
}