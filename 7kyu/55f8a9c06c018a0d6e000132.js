// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    } else {
        const numbers = "0123456789";
        for (let entry of pin) {
            if (numbers.indexOf(entry) === -1) {
                return false;
            }
        }
        return true;
    }
}

"should return False for pins with length other than 4 or 6"
console.log(validatePIN("1"));
// false
console.log(validatePIN("12"));
// false
console.log(validatePIN("123"));
// false
console.log(validatePIN("12345"));
// false
console.log(validatePIN("1234567"));
// false
console.log(validatePIN("-1234"));
// false
console.log(validatePIN("1.234"));
// false
console.log(validatePIN("-1.234"));
// false
console.log(validatePIN("00000000"));
// false
"should return False for pins which contain characters other than digits"
console.log(validatePIN("a234"));
// false
console.log(validatePIN(".234"));
// false
"should return True for valid pins"
console.log(validatePIN("1234"));
// true
console.log(validatePIN("0000"));
// true
console.log(validatePIN("1111"));
// true
console.log(validatePIN("123456"));
// true
console.log(validatePIN("098765"));
// true
console.log(validatePIN("000000"));
// true
console.log(validatePIN("123456"));
// true
console.log(validatePIN("090909"));
// true




// Solution 1
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


// Solution 2
function validatePIN(pin) {

    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);

    if (isCorrectLength && hasOnlyNumbers) {
        return true;
    }

    return false;

}


// Solution 3
const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);


// Solution 4
function validatePIN(pin) {
    //return true or false
    var n = pin.length;
    if (n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
}


// Solution 5
const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)


// Solution 6
function validatePIN(pin) {
    var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
    return reg.test(pin);
}


// Solution 7
function validatePIN(pin) {
    return /^\d{4}(\d{2})?$/.test(pin);
}


// Solution 8
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);


// Solution 9
/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);


// Solution 10
function validatePIN(pin) {
    pin = pin.split('')
    const findNaN = pin.find(character => !(parseInt(character) >= 0))
    if ((pin.length === 4 || pin.length === 6) && !findNaN) {
        return true
    } else {
        return false
    }

}


// Solution 11
const validatePIN = pin => !!pin.match(/^(\d{4}|\d{6})$/);


// Solution 13
function validatePIN(pin) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    let pinArr = pin.split('');
    for (let i of pinArr) {
        if (num.includes(i)) {
            count += 1;
        } else {
            return false;
        }
    }
    return count == 4 || count == 6;
}