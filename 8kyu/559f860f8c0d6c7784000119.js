// Are there any arrows left?

// Check your arrows

// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.

// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])

// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

function anyArrows(arrows){
  return arrows.some((arrow) => (Object.keys(arrow).length === 1 && arrow.hasOwnProperty("range")) || (arrow.damaged === false || undefined));
}

console.log(anyArrows([]));
// false, "Should handle empty quiver"
console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]));
// true, "Should handle quiver with undamaged arrows"
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}]));
// false, "Should handle quiver with damaged arrows"
console.log(anyArrows(
  [ 
    { damaged: true },
    { damaged: true },
    { damaged: true },
    { damaged: true },
    { damaged: true },
    { damaged: true },
    { damaged: true },
    { damaged: false }
  ]
));
// true


// Solution 1
function anyArrows(arrows){
  return arrows.some(a => !a.damaged);
}


// Solution 2
const anyArrows = arrows => arrows.some(arrow => !arrow.damaged);


// Solution 3
function anyArrows(arrows){
  return arrows.some(arrow => !arrow.damaged);
}


// Solution 4
function anyArrows(arrows) {
  return arrows.some(({ damaged }) => !damaged)
}


// Solution 5
anyArrows = aa => aa.some(a => !a.damaged)


// Solution 6
const anyArrows = arrows => 
  arrows.some(val => !val.damaged);


// Solution 7
function anyArrows(arrows){
  return arrows.some(obj => obj.damaged ? false: true)
}


// Solution 8
function anyArrows(arrows){
  // arrow it
  return arrows.some(el => !el.damaged);
}


// Solution 9
function anyArrows(arrows){
  return arrows.some(x => !x.damaged);
}


// Solution 10
function anyArrows(arrows){
  return arrows.some(e => e.damaged ? false : true);
}


// Solution 11
var anyArrows=(arrows)=>arrows.some(e=>!e.damaged);


// Solution 12
const anyArrows = (arrows) => arrows.some( a => !a.damaged );


// Solution 13
function anyArrows(arrows) {
  return arrows.some(q => q.damaged !== true);
}


// Solution 14
const anyArrows = arrows => arrows.some(a => !a.damaged);