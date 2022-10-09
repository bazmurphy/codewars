// Is it a Set ?

// The cards

// Every card has one, two or three symbols in it. A symbol has three distinct features:

// Shape (either diamond, snake or capsule)
// Colour (either green, blue or red)
// Pattern (either blank, striped or solid)

// The Set Cards (Image is taken as fair use from Wikipedia.)

// What's a set?

// A set always consists of three cards. 
// The set is considered valid if, and only if, every property of the card is either the same as the other two cards, or distinct from the other two. 
// Properties include the three features mentioned above plus the quantity of symbols.

// Input & Output

// You will receive an four arrays, containing the properties of the cards.
// One array, containing the quantity of symbols, will be numeric, the others will contain strings.

// It's safe to assume that any card provided will always satisfy the properties outlined above. 
// For example, there will be no card passed with 5 symbols, or with a circle shape.

// Your task is to return a boolean, indicating if the given input properties qualify as a valid set - true if they do false if not.

function isValidSet(quantities, shapes, colours, patterns) {

  // quantities = 1,2,3
  // shape = diamond, snake, capsule
  // colours = green, blue, reg
  // pattern = blank, striped, solid
 
  return [new Set(quantities).size, new Set(shapes).size, new Set(colours).size, new Set(patterns).size].filter(element => element === 2).length ? false : true;

}

// "all different"
console.log(isValidSet([1, 2, 3], ["diamond", "snake", "capsule"], ["green", "blue", "red"], ["blank", "striped", "solid"]));
// true

// "some same, some different"
console.log(isValidSet([1, 1, 1], ["capsule", "diamond", "snake"], ["red", "red", "red"], ["striped", "blank", "solid"]));
// true

// "only pattern same"
console.log(isValidSet([3, 1, 2], ["diamond", "capsule", "snake"], ["blue", "green", "red"], ["solid", "solid", "solid"]));
// true

// invalid everything
console.log(isValidSet([1, 2, 1], ["diamond", "diamond", "snake"], ["blue", "red", "red"], ["blank", "blank", "striped"]));
// false

// "invalid quantities"
console.log(isValidSet([1, 1, 3], ["diamond", "snake", "capsule"], ["green", "blue", "red"], ["blank", "striped", "solid"]));
// false


// Solution 1
function isValidSet(...a) {
  return a.map(x => new Set(x)).every(x => x.size === 1 || x.size === 3);
}


// Solution 2
function distinctOrIdentical(arr) {
  const s = new Set(arr);
  return s.size === 1 || s.size === arr.length;
}

function isValidSet(...props) {
  return props.every(distinctOrIdentical);
}


// Solution 3
const toSet = p => new Set(p);
const isSize = n => s => s.size == n;
const use = x => ({ as: f => f(x) })

const isValidSet = (...props) =>
  use(props.map(toSet)).as(sets =>
    sets.some(isSize(1)) || sets.every(isSize(3)));


// Solution 4
function isValidSet(quantities, shapes, colours, patterns) {
  const evaluate = [...arguments].map(arg => {
    const x = new Set(arg);
    return x.size === 1 || x.size === 3 && true;
  });
  return !evaluate.includes(false);
}


// Solution 5
isValidSet = (...V) => V.every(x => new Set(x).size % 2)


// Solution 6
function isValidSet(quantities, shapes, colours, patterns) {
  if (JSON.stringify(quantities) !== JSON.stringify([1, 1, 1])
    && quantities.some((item, idx, arr) => arr.indexOf(item) !== idx)) {
    // Check if quantity is not [1, 1, 1]
    // OR if some quantities occur more than once
    return false;
  }

  if (shapes.some((item, idx, arr) => arr.indexOf(item) !== idx)) {
    // Check if some shapes occur more than once
    return false;
  }

  if (colours.join("") !== colours[0].repeat(3)
    && colours.some((item, idx, arr) => arr.indexOf(item) !== idx)) {
    // Check if colours are not all the same
    // OR if some colours occur more than once
    return false;
  }

  if (patterns.join("") !== patterns[0].repeat(3)
    && patterns.some((item, idx, arr) => arr.indexOf(item) !== idx)) {
    // Check if patterns are not all the same
    // OR if some patterns occur more than once
    return false;
  }

  return true;
}


// Solution 7
function isValidSet(quantities, shapes, colours, patterns) {
  let quantity = [...new Set(quantities)]
  let shape = [...new Set(shapes)]
  let colour = [...new Set(colours)]
  let pattern = [...new Set(patterns)]
  return (quantity.length === 1 || quantity.length === 3) &&
    (shape.length === 1 || shape.length === 3) &&
    (colour.length === 1 || colour.length === 3) &&
    (pattern.length === 1 || pattern.length === 3) ? true : false
}


// Solution 8
const isValidSet = (...args) => args.every(set => [1, 3].includes(new Set(set).size));


// Solution 9
function isValidSet(quantities, shapes, colours, patterns) {
  if (quantities[0] === quantities[1] && quantities[0] === quantities[2]) {
    return true;
  }
  else if (shapes[0] === shapes[1] && shapes[0] === shapes[2]) {
    return true;
  }
  else if (shapes[0] === shapes[1] && shapes[0] === shapes[2]) {
    return true;
  }
  else if (patterns[0] === patterns[1] && patterns[0] === patterns[2]) {
    return true;
  }
  else if (quantities[0] !== quantities[1] && quantities[0] !== quantities[2] && quantities[1] !== quantities[2] &&
    shapes[0] !== shapes[1] && shapes[0] !== shapes[2] && shapes[1] !== shapes[2] &&
    colours[0] !== colours[1] && colours[0] !== colours[2] && colours[1] !== colours[2] &&
    patterns[0] !== patterns[1] && patterns[0] !== patterns[2] && patterns[1] !== patterns[2]) {
    return true
  }
  else return false;
}


// Solution 10
function isValid(prop) {
  let set = new Set()
  for (let item of prop) {
    set.add(item);
  }
  return set.size === 1 || set.size === 3
}

function isValidSet(...properties) {
  return properties.every(isValid);
}


// Solution 11
function isValidSet(quantities, shapes, colours, patterns) {
  let sets = [new Set(quantities).size, new Set(shapes).size,
  new Set(colours).size, new Set(patterns).size];
  return sets.every(l => l === 3) || sets.some(l => l === 1);
}


// Solution 12
function isValidSet(quantities, shapes, colours, patterns) {
  let input = [];
  input.push(quantities, shapes, colours, patterns)
  for (i in input) {
    if (!((input[i][0] == input[i][1] && input[i][1] == input[i][2]) ||
      (input[i][0] != input[i][1] && input[i][1] != input[i][2] && input[i][0] != input[i][2]))
    ) {
      return false;
    }
  }
  return true;
}