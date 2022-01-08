// Your Task

// Given an array of Boolean values and a logical operator, 
// return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples

//     booleans = [True, True, False], operator = "AND"

//     True AND True -> True
//     True AND False -> False
//     return False

//     booleans = [True, True, False], operator = "OR"

//     True OR True -> True
//     True OR False -> True
//     return True

//     booleans = [True, True, False], operator = "XOR"

//     True XOR True -> False
//     False XOR False -> False
//     return False

// Input

//     an array of Boolean values (1 <= array_length <= 50)
//     a string specifying a logical operator: "AND", "OR", "XOR"

// Output

// A Boolean value (True or False).


// AND : first and second argument are both true => true

// OR : first OR second argument are true => true

// XOR : if ONE of the arguments is true (BUT NOT BOTH) => true


function logicalCalc(array, op){

    let finalOutcome = array[0];

    if (array.length < 2) {
        return finalOutcome;
    }
    else if (op === 'AND') {

        for (let i = 1; i < array.length; i++) {

            if (finalOutcome === true && array[i] === true) {
                finalOutcome = true;
            } else {
                finalOutcome = false;
            }
        }
        
    }
    else if (op === 'OR') {

        for (let i = 1; i < array.length; i++) {

            if (finalOutcome === true || array[i] === true) {
                finalOutcome = true;
            } else {
                finalOutcome = false;
            }
        }

    }
    else if (op === 'XOR') {
        for (let i = 1; i < array.length; i++) {

            if (finalOutcome === true && array[i] === false || finalOutcome === false && array[i] === true) {
                finalOutcome = true;
            } else {
                finalOutcome = false;
            }
        }

    }
    
    return finalOutcome
    
}

console.log(logicalCalc([true, true, true, false], "AND"))
// false
console.log(logicalCalc([true, true, true, false], "OR"))
// true
console.log(logicalCalc([true, true, true, false], "XOR"))
// true
console.log(logicalCalc([true, true, false, false], "AND"))
// false
console.log(logicalCalc([true, true, false, false], "OR")) 
// true
console.log(logicalCalc([true, true, false, false], "XOR"))
// false
console.log(logicalCalc([true, false, false, false], "AND")) 
// false
console.log(logicalCalc([true, false, false, false], "OR")) 
// true
console.log(logicalCalc([true, false, false, false], "XOR")) 
// true
console.log(logicalCalc([true, true], "AND"))
// true
console.log(logicalCalc([true, true], "OR"))
// true
console.log(logicalCalc([true, true], "XOR"))
// false
console.log(logicalCalc([false, false], "AND"))
// false
console.log(logicalCalc([false, false], "OR"))
// false
console.log(logicalCalc([false, false], "XOR"))
// false
console.log(logicalCalc([false], "AND"))
// false
console.log(logicalCalc([false], "OR"))
// false
console.log(logicalCalc([false], "XOR"))
// false
console.log(logicalCalc([true], "AND"))
// true
console.log(logicalCalc([true], "OR"))
// true
console.log(logicalCalc([true], "XOR"))
// true



// Attempt 2

function logicalCalc(array, op){
    if (op === "OR") {
       return array.reduce( (a, b) => a || b );
    } else if (op === "AND") {
        return array.reduce ( (a, b) => a && b );
    } else if (op === "XOR") {
        return array.reduce ( (a, b) => a != b );
    }
}


// Solution 1
var ops = {
    'AND': (a, b) => a && b,
    'OR': (a, b) =>  a || b,
    'XOR': (a, b) => a !== b
}

function logicalCalc(array, op){
    return array.reduce(ops[op]);
}

// Solution 2
function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}

// Solution 3
function logicalCalc(array, op){
    if(op === 'AND')return array.every(v => v);
    else if(op === 'OR')return array.some(v => v);
    else return !!array.reduce((s, v) => s ^ v);
}

// Solution 4
function logicalCalc(array, op) {
    switch (op) {
      case "AND": return array.reduce(and);
      case "OR" : return array.reduce(or);
      case "XOR": return array.reduce(xor);
    }
}

function and(bool1, bool2) {
    return bool1 && bool2;
}

function or(bool1, bool2) {
    return bool1 || bool2;
}

function xor(bool1, bool2) {
    return bool1 != bool2;
}