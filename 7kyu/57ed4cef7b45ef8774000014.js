// The Office II - Boredom Score

// Every now and then people in the office moves teams or departments.
// Depending what people are doing with their time they can become more or less boring.
// Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff) {
  console.log(staff);

  let points = 0;

  for (const value of Object.values(staff)) {
    switch (value) {
      case "accounts":
        points += 1;
        break;
      case "finance":
        points += 2;
        break;
      case "canteen":
        points += 10;
        break;
      case "regulation":
        points += 3;
        break;
      case "trading":
        points += 6;
        break;
      case "change":
        points += 6;
        break;
      case "IS":
        points += 8;
        break;
      case "retail":
        points += 5;
        break;
      case "cleaning":
        points += 4;
        break;
      case "pissing about":
        points += 25;
      default:
        break;
    }
  }

  let message = "";

  if (points <= 80) {
    message = "kill me now";
  } else if (points < 100 && points > 80) {
    message = "i can handle this";
  } else if (points > 100) {
    message = "party time!!";
  }

  return message;
}

console.log(
  boredom({
    tim: "change",
    jim: "accounts",
    randy: "canteen",
    sandy: "change",
    andy: "change",
    katie: "IS",
    laura: "change",
    saajid: "IS",
    alex: "trading",
    john: "accounts",
    mr: "finance",
  })
);
// "kill me now"
console.log(
  boredom({
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen",
  })
);
// "i can handle this"
console.log(
  boredom({
    tim: "accounts",
    jim: "accounts",
    randy: "pissing about",
    sandy: "finance",
    andy: "change",
    katie: "IS",
    laura: "IS",
    saajid: "canteen",
    alex: "pissing about",
    john: "retail",
    mr: "pissing about",
  })
);
// "party time!!"
