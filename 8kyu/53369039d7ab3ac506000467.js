// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool === true) return 'Yes'
  else if (bool === false) return 'No'
}

console.log(boolToWord(true));
// 'Yes'
console.log(boolToWord(false));
// 'No'

// Solution 1
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}


// Solution 2
function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}


// Solution 3
let boolToWord = bool => bool ? 'Yes' : 'No';


// Solution 4
const boolToWord = bool => bool ? 'Yes' : 'No';


// Solution 5
var boolToWord = function boolToWord() {
  //compile
  var result = compile(Array.prototype.slice.call(arguments, 0)[0])
  //finish
  return result;
};

function compile(input) {
  var iterator = 0,
      input    = input.toString(),
      output   = [];
  for( ; iterator < input.length; iterator++) {
    output[iterator] = input[iterator];
  }
  switch (output.join('')) {
    case 'true':
      return 'Yes';
      break;
    case 'false':
      return 'No';
      break;
    case 'maybe':
      return 'Maybe';
      break;
    default: 
      throw new Error('Input was not recognized');
  }
}


// Solution 6
function boolToWord(bool) {
  if(bool === true){
    return "Yes"
  }
  else{
      return "No"
  }
}

boolToWord(false)


// Solution 7
function boolToWord( bool ){
  if( bool ){
    return "Yes";
  }
  
  return "No";
  
}


// Solution 8
function boolToWord( bool ){
  return bool === true ? "Yes" : "No";
}


// Solution 9
function boolToWord( bool ){
  return true === bool ? 'Yes' : 'No'
}


// Solution 10
function boolToWord( bool ){
  return ['No','Yes'][+bool];
}


// Solution 11
function boolToWord( bool ){
  return bool == true ? "Yes" : 'No';
}


// Solution 12
const boolToWord = bool => bool === true ? 'Yes' : 'No'


// Solution 13
function boolToWord( bool ){
if(bool === true)
return 'Yes'
else
return 'No'
}
console.log(boolToWord(true), 'Yes');
console.log(boolToWord(false), 'No');