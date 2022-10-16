// Unexpected parsing

// Here is a piece of code:

// function getStatus(isBusy) {
//   var msg = (isBusy ? "busy" : "available");
//   return 
//   {
//     status: msg
//   }
// }

// Expected Behaviour

// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {
  const msg = isBusy ? "busy" : "available";
  return { status: msg }
}

console.log(getStatus(true).status);
// "busy"


// Solution 1
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}


// Solution 2
const getStatus = isBusy => ({ status: isBusy ? "busy" : "available" });


// Solution 3
function getStatus(isBusy) {
  return { status: isBusy ? "busy" : "available" }
}


// Solution 4
let getStatus = isBusy => ({ status: isBusy ? 'busy' : 'available' });


// Solution 5
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return { status: msg }
}


// Solution 6
const getStatus = isBusy => 
  ({status: isBusy ? `busy` : `available`});


// Solution 7
getStatus = function(isBusy) {
  
  var msg = (isBusy ? "busy" : "available");
  status = msg;
  return this;
}


// Solution 8
function getStatus(isBusy) {
  return { status: { true : 'busy', false: 'available' }[isBusy] };
}


// Solution 9
function getStatus(isBusy) {
  let msg = isBusy===true ? "busy" : "available";
  let obj = {status: msg}
  return obj
}


// Solution 10
getStatus = isBusy => { return { status: (isBusy ? "busy" : "available") } }