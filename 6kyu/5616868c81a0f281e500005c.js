// Prize Draw

// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet.
// A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Example:

// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"

// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54

// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.

// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:

// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:

// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4

// The function should return: "PauL"

// Notes:

// The weight array is at least as long as the number of names, it may be longer.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

// See Examples Test Cases for more examples.

function rank(st, we, n) {
  // If st is empty return "No participants"
  if (st.trim() === "") {
    return "No participants";
  }

  // split the string into individual names
  const namesArray = st.split(",");

  // If n is greater than the number of participants then return "Not enough participants"
  if (n > namesArray.length) {
    return "Not enough participants";
  }

  // create an array to hold the objects
  const namesTotals = [];

  // loop through each name
  for (let i = 0; i < namesArray.length; i++) {
    // initialise a firstNameTotal
    let nameTotal = 0;

    const name = namesArray[i];
    const splitName = name.split("");

    // loop through each letter in each name
    for (let j = 0; j < splitName.length; j++) {
      const letter = splitName[j];

      // get the letter amount
      const letterAmount = letter.toLowerCase().charCodeAt(0) - 96;
      // console.log("amount", amount);

      // add it to the total
      nameTotal += letterAmount;
    }

    // add the length of the name
    nameTotal += name.length;

    // multiply the total by the weight
    nameTotal *= we[i];

    // push a new object to the namesTotals array
    namesTotals.push({ name, score: nameTotal });
  }

  // sort by score (and if the score is the same by name)
  const namesTotalsSorted = namesTotals.sort((a, b) => {
    // if the scores are the same
    if (b.score === a.score) {
      // sort them by alphabetical order
      return a.name.localeCompare(b.name);
    }
    // otherwise sort them by score
    return b.score - a.score;
  });

  // get the nth value
  const result = namesTotalsSorted[n - 1];

  // return the name
  return result.name;
}

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    4
  )
);
// "Benjamin"

console.log(rank("Lagon,Lily", [1, 5], 2));
// "Lagon"

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    8
  )
);
// "Not enough participants"

console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6));
// "No participants"

console.log(
  rank("William,Willaim,Olivia,Olivai,Lily,Lyli", [1, 1, 1, 1, 1, 1], 1)
);
// Willaim
