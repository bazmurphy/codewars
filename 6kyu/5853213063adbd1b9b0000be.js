// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);

// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']

// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

function streetFighterSelection(fighters, position, moves) {
  let resultArray = [];

  let currentPosition = position;

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    if (move === "left") {
      if (currentPosition[1] - 1 < 0) {
        currentPosition[1] = fighters[0].length - 1;
      } else {
        currentPosition[1] -= 1;
      }
    } else if (move === "right") {
      if (currentPosition[1] + 1 > fighters[0].length - 1) {
        currentPosition[1] = 0;
      } else {
        currentPosition[1] += 1;
      }
    } else if (move === "up") {
      if (position[0] === 1) {
        currentPosition[0] = 0;
      }
    } else if (move === "down") {
      if (position[0] === 0) {
        currentPosition[0] = 1;
      }
    }
    resultArray.push(fighters[currentPosition[0]][currentPosition[1]]);
  }

  return resultArray;
}

var describe = require("mocha").describe;
var it = require("mocha").it;
var assert = require("chai").assert;

let moves = [];
let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

describe("Testing...", function () {
  it("should work with few moves", function () {
    moves = ["up", "left", "right", "left", "left"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ["Ryu", "Vega", "Ryu", "Vega", "Balrog"]);
  });

  it("should work with no selection cursor moves", function () {
    moves = [];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);
  });

  it("should work when always moving left", function () {
    moves = ["left", "left", "left", "left", "left", "left", "left", "left"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Vega",
      "Balrog",
      "Guile",
      "Blanka",
      "E.Honda",
      "Ryu",
      "Vega",
      "Balrog",
    ]);
  });

  it("should work when always moving right", function () {
    moves = ["right", "right", "right", "right", "right", "right", "right", "right"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "E.Honda",
      "Blanka",
      "Guile",
      "Balrog",
      "Vega",
      "Ryu",
      "E.Honda",
      "Blanka",
    ]);
  });

  it("should use all 4 directions clockwise twice", function () {
    moves = ["up", "left", "down", "right", "up", "left", "down", "right"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Ryu",
      "Vega",
      "M.Bison",
      "Ken",
      "Ryu",
      "Vega",
      "M.Bison",
      "Ken",
    ]);
  });

  it("should work when always moving down", function () {
    moves = ["down", "down", "down", "down"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ["Ken", "Ken", "Ken", "Ken"]);
  });

  it("should work when always moving up", function () {
    moves = ["up", "up", "up", "up"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ["Ryu", "Ryu", "Ryu", "Ryu"]);
  });
});
