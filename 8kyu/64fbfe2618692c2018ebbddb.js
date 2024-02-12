// Flick Switch

// Create a function that always returns True/true for every item in a given list.

// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes

// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {
  // initialise a toggle
  let flickToggle = false;

  // map over the input array
  const result = arr.map((element) => {
    // if the element is flick, then toggle
    if (element === "flick") {
      flickToggle = !flickToggle;
    }
    // return false if the toggle is on, or true if the toggle is off
    return flickToggle ? false : true;
  });

  // return the new array
  return result;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
// [true, false, false, false]
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
// [false, false, false, false]
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
// [true, true, false, false, true]
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));
// [false, true, false, true, false]
console.log(flickSwitch(["john, smith, susan", "flick"]));
// [true, false]
console.log(flickSwitch(["bicycle"]));
// [true]
console.log(flickSwitch(["flick"]));
// [false]
console.log(flickSwitch([]));
// []
