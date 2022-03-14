// Semi-Optional

// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object
// setting the 'value' key on the new Object to the passed-in value.

// So, for example, if we execute the following code:

wrapper_obj = wrap("my_wrapped_string"); 
//  wrapper_obj should be  {"value":"my_wrapped_string"}

// We would then expect the following statement to be true:

wrapper_obj["value"] == "my_wrapped_string"

// Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

function wrap(anythingOtherThanValue) {
    return { value : anythingOtherThanValue };
}


// Solution 1
function wrap(value) {
    return  {
      "value":value 
    };
}


// Solution 2
const wrap = value => ({value});


// Solution 3
const wrap = value => ({value: value})


// Solution 4
function wrap(value) {
  return {value};
}


// Solution 5
function wrap(value) {
  var newObj = {};
  newObj["value"] = value; 
  return newObj; 
}