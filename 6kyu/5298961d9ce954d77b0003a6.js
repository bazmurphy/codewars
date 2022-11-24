// The range() function

// Let's implement the range function:

// range([start], stop, [step])

// range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(1, 4, 0); // /!\ note that the step is 0
// => [1, 1, 1]

// range(0);
// => []

// range(10, 0); // /!\ note that the end is before the start
// => []

// range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]

// start, if omitted, defaults to 0; step defaults to 1.

// Returns a list of integers from start to stop, incremented by step, exclusive.

// Note that ranges that stop before they start are considered to be zero-length instead of negative.


function range(start, stop, step) {
  // console.log(arguments);
  // console.log(`BEFORE: start: ${start} stop: ${stop} step: ${step}`);
  if (arguments.length === 1) {
    // console.log("1 ARGUMENT PROVIDED");
    stop = arguments[0];
    start = 0;
    step = 1;
  } else if (arguments.length === 2) {
    // console.log("2 ARGUMENTS PROVIDED");
    stop = arguments[1];
    start = arguments[0];
    step = 1;
  } else if (arguments.length === 3) {
    // console.log("3 ARGUMENTS PROVIDED");
    stop = arguments[1];
    start = arguments[0];
    step = arguments[2];
  }
  // console.log(`AFTER : start: ${start} stop: ${stop} step: ${step}`);
 
  let count = stop - start;
  console.log(`count: ${count}`);

  let output = [];
  for (let i = start; i < stop; i += step) {
    // console.log(i);
    output.push(i);
    // console.log(count);
    // count--;
  }
  return output;
}

// range(stop)
console.log(range(0));
// []
console.log(range(1));
// [0]
console.log(range(5));
// [0, 1, 2, 3, 4]
console.log(range(10));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(start, stop)
console.log(range(1, 1));
// []
console.log(range(1, 5));
// [1, 2, 3, 4]
console.log(range(5, 10));
// [5, 6, 7, 8, 9]
console.log(range(1, 11));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(start, stop, step
console.log(range(1, 1, 1));
// []
console.log(range(1, 2, 1));
// [1]
console.log(range(2, 6, 2));
// [2, 4]
console.log(range(1, 5, 0));
// [1, 1, 1, 1]