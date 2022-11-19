// IP Validation

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:

// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {

  // split the IP on "." into composite parts 
  const composite = str.split(".");

  // IP address must have 4 composite parts
  if (composite.length !== 4) {
    return false;
  }

  // loop through the composite parts
  for (let i = 0; i < composite.length; i++) {

    // each composite part must be between 0 and 255
    if (Number(composite[i]) < 0 || Number(composite[i]) > 255 ) {
      return false;
    }
   
    // break the composite part into sub elements
    const subElement = composite[i].split("");

    // subElement must be between 1-3 digits in length 
    if (subElement.length < 1 || subElement.length > 3) {
      return false;
    }

    // subElement of length 1 must be 0123456789
    if (subElement.length === 1) {
      if ("0123456789".indexOf(subElement[0]) === -1) {
        return false;
      }
    }

    // subElement of length 2 index[0] must be 123456789 and index[1] must be 0123456789
    if (subElement.length === 2) {
      if ("123456789".indexOf(subElement[0]) === -1 || "0123456789".indexOf(subElement[1]) === -1) {
        return false;
      }
    }

    // subElement of length 3 index[0] must be 123456789 and index[1] and index[2] must be 0123456789
    if (subElement.length === 3) {
      if ("123456789".indexOf(subElement[0]) === -1 || "0123456789".indexOf(subElement[1]) === -1 || "0123456789".indexOf(subElement[2]) === -1) {
        return false;
      }
    }
  }

  // if all of the above conditions are met, the IP Address is valid
  return true;

}

console.log(isValidIP("0.0.0.0"));
// true
console.log(isValidIP("12.255.56.1"));
// true
console.log(isValidIP("137.255.156.100"));
// true
console.log(isValidIP(''));
// false
console.log(isValidIP('abc.def.ghi.jkl'));
// false
console.log(isValidIP('123.456.789.0'));
// false
console.log(isValidIP('12.34.56'));
// false
console.log(isValidIP('01.02.03.04'));
// false
console.log(isValidIP('256.1.2.3'));
// false
console.log(isValidIP('1.2.3.4.5'));
// false
console.log(isValidIP('123,45,67,89'));
// false
console.log(isValidIP('1e0.1e1.1e2.2e2'));
// false
console.log(isValidIP(' 1.2.3.4'));
// false
console.log(isValidIP('1.2.3.4 '));
// false
console.log(isValidIP('12.34.56.-7'));
// false
console.log(isValidIP('1.2.3.4\n'));
// false
console.log(isValidIP('\n1.2.3.4'));
// false


// Solution 1
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}


// Solution 3
function isValidIP(str) {
  var p = str.split('.');
  return p.length == 4 && p.every(function(s) {
    return /^\d+$/.test(s) && s >= 0 && s <= 255;
  });
}



// Solution 4
// Pure function
function isValidIP(str) {
  const octets = str.split('.')             // Split into octets
  return (octets.length === 4) &&           // Ensure str has exactly 4 octets
    octets.reduce((acc, octet) =>           // Check all octets
      (acc === true) &&                       // Ensure prior octets okay
      (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
      (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
      (Number(octet) <= 255)                  // Ensure octet is 255 or less
    , true)
}


// Solution 5
function isValidIP(str) {
  return new RegExp(
             "^(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
          +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
          +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
          +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$").test(str);
}


// Solution 6
const isValidIP = str=> {
  let params = str.split('.');
  return params.length === 4 &&
      params.every(param=>Number(param) < 256 && String(Number(param)) === param);
};


// Solution 7
function isValidIP(str) {
  var blocks = str.split(".");
  if(blocks.length === 4) {
    return blocks.every(function(block) {
      return block.indexOf(" ")==-1 && !isNaN(block) && parseInt(block,10) >=0 && parseInt(block,10) <= 255;
    });
  }
  return false;
}


// Solution 8
function isValidIP(str) {
 var numbers = str.split("."); 
 
 for (var i =0; i < numbers.length ; i++){
  if(parseInt(numbers[i]) > 255 || parseInt(numbers[i]) < 0){
  return false;
  }
  if(isNaN(numbers[i])){
  return false;
  }  
  if(numbers[i].indexOf(" ") != -1){
  return false;
  }
  }
  
  if(numbers.length != 4){
  return false;
  }
  return true;
}


// Solution 9
function isValidIP(str) {
  return /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){4}$/.test(str+'.');
}


// Solution 10
function isValidIP(str) {  
  var values = str.split(".");
  if(values.length < 4 || values.length > 4)
    return false;
  for(var i = 0; i < values.length; i++){
    var value = values[i];
    var invalidCharacter = value.indexOf("e") > -1;
    var negativeValue = value < 0;
    var invalidZero = value.length > 1 && value.indexOf("0") == 0;      
    var maxExceeded = value > 255;
    var containSpaces = value.indexOf(" ") > -1 || value.indexOf("\n") > -1;
    if(invalidCharacter || negativeValue || invalidZero || maxExceeded || containSpaces){
      return false;
    }
  }
  return true;
}


// Solution 11
function isValidIP(str) {
  return str.split('.').filter(function(v) {return +v <= 255 && +v >= 0 && v.length == String(+v).length;}).length == 4;
}//I love one-liners


// Solution 12
const isValidIP = (str) => /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(str);


// Solution 13
function isValidIP(str) {
  var split = str.split('.');

  return split.length === 4 && split.every(function (s) {
    return s.match(/^(2([0-4]\d|5[0-5])|1?\d\d|[1-9]?\d)$/);
  });
}


// Solution 14
function isValidIP(str) {
  if(str.match(/\s/)) return false;
  return str.split(".").map(Number).filter(function(v) { return v >= 0 && v <= 255; }).length == 4;
}


// Solution 24
function isValidIP(str) {
  const ip = str.split('.');

  return (
    ip.length == 4 &&
    ip.every(
      (el) =>
        el >= 0 &&
        el <= 255 &&
        el.length === String(+el).length
    )
  );
}