// A wolf in sheep's clothing

// Wolves have been reintroduced to Great Britain. 
// You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
// Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. 
// Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1    (length 8)
//    0      1      2      3      4      5     6      7    (length 8)
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {

    if (queue.indexOf("wolf") === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else { 

        // console.log(queue.length)
        // console.log(queue.indexOf("wolf"))
        // console.log(queue.length - queue.indexOf("wolf") - 1)

        return `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`;
    }
}

warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
//"Oi! Sheep number 2! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
//"Oi! Sheep number 5! You are about to be eaten by a wolf!"
warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
//"Oi! Sheep number 6! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "wolf", "sheep"])
//"Oi! Sheep number 1! You are about to be eaten by a wolf!"
warnTheSheep(["wolf"])
//"Pls go away and stop eating my sheep"
warnTheSheep(["sheep", "sheep", "wolf"])
// "Pls go away and stop eating my sheep"

// Solution 1
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

// Solution 2
function warnTheSheep(q) {
    return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}

// Solution 3
function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}

// Solution 4
const warnTheSheep = a => (a = a.length - a.indexOf('wolf') - 1) ?
  `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`:
  'Pls go away and stop eating my sheep';

// Solution 5
const warnTheSheep = queue =>
  (val => val ? `Oi! Sheep number ${val}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`)
  (queue.reverse().indexOf('wolf'));