// Dashatize it

// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  let result = "";

  // convert num to positive
  let tempNum = num;
  if (num < 0) {
    tempNum = num * -1;
  }

  // convert to string
  numAsString = tempNum.toString();

  // split into individual numbers (as strings)
  const compositeParts = numAsString.split("");

  // loop over the individual numbers
  for (let i = 0; i < compositeParts.length; i++) {
    const currentValue = compositeParts[i];
    let prevValue = result[result.length - 1];

    // first item just concat
    if (i === 0) {
      result += currentValue;
      continue;
      // if it is odd, add a - prefix and concat
    } else if (currentValue % 2 !== 0) {
      result += "-";
      result += currentValue;
      // if it is even and the prev value is odd add a - prefix and concat
    } else if (currentValue % 2 == 0 && prevValue % 2 !== 0) {
      result += "-";
      result += currentValue;
      // if it is even just concat
    } else if (currentValue % 2 === 0) {
      result += currentValue;
    }
  }

  return result;
}

console.log(dashatize(274));
// "2-7-4"
console.log(dashatize(5311));
// "5-3-1-1"
console.log(dashatize(86320));
// "86-3-20"
console.log(dashatize(974302));
// "9-7-4-3-02"
console.log(dashatize(0));
// "0"
console.log(dashatize(-1));
// "1"
console.log(dashatize(-28369));
// "28-3-6-9"

// Solution 1
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Solution 2
function dashatize(num) {
  return isNaN(num)
    ? "NaN"
    : num
        .toString()
        .match(/([13579]|[02468]+)/g)
        .join("-");
}

// Solution 3
function dashatize(num) {
  return (num = num
    .toString()
    .split("")
    .map(function (c) {
      return c % 2 ? "-" + c + "-" : c;
    })
    .join("")
    .split("-")
    .filter((a) => a != "")
    .join("-"));
}
