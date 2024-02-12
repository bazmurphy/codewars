// shorter concat [reverse longer]

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null

// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorterReverseLonger(a, b) {
  let longer;
  let shorter;
  if (a.length === b.length) {
    longer = a;
    shorter = b;
  } else if (a.length > b.length) {
    longer = a;
    shorter = b;
  } else if (b.length > a.length) {
    longer = b;
    shorter = a;
  }

  // avoiding using split("").reverse().join("")
  let temp = "";
  for (let index = 0; index < longer.length; index++) {
    const char = longer[index];
    temp = char + temp;
  }
  longer = temp;

  return `${shorter}${longer}${shorter}`;
}

console.log(shorterReverseLonger("first", "abcde"));
// "abcdetsrifabcde"
console.log(shorterReverseLonger("hello", "bau"));
// "bauollehbau"
console.log(shorterReverseLonger("fghi", "abcde"));
// "fghiedcbafghi"
