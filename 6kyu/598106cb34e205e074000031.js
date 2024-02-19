// The Deaf Rats of Hamelin

// Story

// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task

// How many deaf rats are there?

// Legend

// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right

// Example

// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

function countDeafRats(town) {
  let totalDeafRats = 0;
  let leftString = "";
  let rightString = "";
  let piperFound = false;

  for (let i = 0; i < town.length; i++) {
    if (town[i] === "P") {
      piperFound = true;
    }
    if (!piperFound) {
      if (town[i] === "~" || town[i] === "O") {
        leftString += town[i];
      }
    } else if (piperFound) {
      if (town[i] === "~" || town[i] === "O") {
        rightString += town[i];
      }
    }
  }

  for (let i = 0; i < leftString.length; i += 2) {
    const rat = leftString[i] + leftString[i + 1];
    if (rat !== "~O") {
      totalDeafRats++;
    }
  }

  for (let i = 0; i < rightString.length; i += 2) {
    const rat = rightString[i] + rightString[i + 1];
    if (rat !== "O~") {
      totalDeafRats++;
    }
  }

  return totalDeafRats;
}

console.log(countDeafRats("~O~O~O~O P"));
// 0

console.log(countDeafRats("P O~ O~ ~O O~"));
// 1

console.log(countDeafRats("~O~O~O~OP~O~OO~"));
// 2
