// Simple validation of a username with regex

// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).


function validateUsr(username) {
    return /^[a-z0-9_]{4,16}$/.test(username)
}

console.log(validateUsr('asddsa')) 
// true
console.log(validateUsr('a'));
// false
console.log(validateUsr('Hass'));
// false
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
// false
console.log(validateUsr(''));
// false
console.log(validateUsr('____'));
// true
console.log(validateUsr('012'));
// false
console.log(validateUsr('p1pp1'));
// true
console.log(validateUsr('asd43 34'));
// false
console.log(validateUsr('asd43_34'));
// true


// Solution 1
function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
}


// Solution 2
function validateUsr(username) {
    /**
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
    */
    const validator = /^[a-z0-9_]{4,16}$/;
    
    return validator.test(username);
}


// Solution 3
const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);


// Solution 4
function validateUsr(username) {
    return (/^[a-z0-9_]{4,16}$/.test(username));
}


// Solution 5
function validateUsr(username) {
    return /^[a-z_0-9]{4,16}$/.test(username) 
}


// Solution 6



// Solution 7
function validateUsr(username) {
    let str = username.replace(/[ `~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,'');
    let cond = username.length < 4 || username.length > 16;
    let lowLet = username === username.toLowerCase();
      
      return username != str ? false : cond ? false : !lowLet ? false : true;
}