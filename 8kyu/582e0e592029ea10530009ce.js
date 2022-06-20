// Duck Duck Goose

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {

    return players[(goose - 1) % players.length].name
    
}


console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 1))
// "a"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 3))
// "c"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 10))
// "z"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 20))
// "z"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 30))
// "z"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 18))
// "g"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 28))
// "g"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 12))
// "b"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 2))
// "b"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 7))
// "f"


// Solution 1
function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name
}

// Solution 2
const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// Solution 3
var duckDuckGoose = (p, g) => p[(g - 1) % p.length].name

// Solution 4
function duckDuckGoose(players, goose) {
    return goose ? players[(goose - 1) % players.length].name : '';
}

// Solution 5
function duckDuckGoose(players, goose) {
    let circle = goose;
    while(players.length < circle) {
      circle -= players.length
    }
    return players[circle - 1 ].name
}

// Solution 6
duckDuckGoose=(p,g)=>p[(g-1)%p.length].name;