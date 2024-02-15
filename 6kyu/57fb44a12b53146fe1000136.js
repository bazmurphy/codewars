// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

// Each exclamation mark's weight is 2;
// each question mark's weight is 3.
// Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left";
// if the right side is more heavy, return "Right";
// if they are balanced, return "Balance".

// Examples

// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left, right) {
  function getTotal(str) {
    return str.split("").reduce((total, value) => {
      if (value === "!") {
        return total + 2;
      } else if (value === "?") {
        return total + 3;
      }
    }, 0);
  }

  const leftTotal = getTotal(left);
  const rightTotal = getTotal(right);

  if (leftTotal === rightTotal) {
    return "Balance";
  } else if (leftTotal > rightTotal) {
    return "Left";
  } else if (rightTotal > leftTotal) {
    return "Right";
  }
}

console.log(balance("!!", "??"));
// "Right"
console.log(balance("!??", "?!!"));
// "Left"
console.log(balance("!?!!", "?!?"));
// "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!"));
// "Balance"
