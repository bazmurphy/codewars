// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  const numAsString = num.toString();

  let numbersArray = [];

  for (let i = 0; i < numAsString.length; i++) {
    const integer = numAsString[i];

    if (integer === "0") {
      continue;
    }

    const value = integer.padEnd(numAsString.length - i, 0);

    numbersArray.push(value);
  }

  return numbersArray.join(" + ");
}

console.log(expandedForm(12));
// "10 + 2"
console.log(expandedForm(42));
// "40 + 2"
console.log(expandedForm(70304));
// "70000 + 300 + 4"
