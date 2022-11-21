// Count the number of cubes with paint on

// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98

var countSquares = function(cuts){
  if (cuts === 0) {
    return 1;
  } else {
    // this was all just guessed from the input/ouput
    return Math.pow(cuts+1, 3) - Math.pow(cuts-1, 3)
  }
}

console.log(countSquares(1));
// 8
console.log(countSquares(2));
// 26
console.log(countSquares(4));
// 98
console.log(countSquares(5));
// 152
console.log(countSquares(16));
// 1538
console.log(countSquares(23));
// 3176


// Solution 1
/**
 * Given a cube painted in red and sliced `N` times in the XYZ axis, this function (that should be named countCubes instead of countSquares) counts the number
 * of small cubes with at least one red face.
 *
 * This function avoids the use of `pow` on purpose. See references for more info. 
 *
 * Special thanks to the people in math.exchange, they were kind and awesome.
 *
 * @param    {number}    cuts    The number of 3D cuts done to the painted cube.
 * @returns  {number}    The number of cubes with at least one red face.
 * @see      {@link http://math.stackexchange.com/questions/1874787/puzzle-find-number-of-cubes-with-1-red-face} for the mathematical algorithm behind the scenes. 
 * @see      {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions} for information about Arrow functions in ECMA6
 * @see      {@link http://stackoverflow.com/questions/18382967/is-math-pow-more-expensive-than-multiplication-using-temporary-assignments} Comparison of multiply VS `pow`
 */
 const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;


// Solution 2
let countSquares = c => c ? 6 * c * c + 2 : 1;


// Solution 3
var countSquares = function(cuts){
  if (!cuts) {
    return 1;
  }

  const totalCubes = Math.pow(cuts + 1, 3);
  const innerCubes = Math.pow(cuts - 1, 3);
  
  return totalCubes - innerCubes;
}


// Solution 4
var countSquares = function(cuts){
  if(cuts===0){
    return 1
  }
  let innerCube = Math.pow(cuts-1,3)
  let outerCube = Math.pow(cuts+1,3)
  return outerCube-innerCube
}


// Solution 5
const countSquares = cuts => (6 * cuts ** 2 + 2) ** !!cuts;


// Solution 6
const countSquares = n => n ? 6*n*n+2 : 1


// Solution 7
let countSquares=c=>c?2+c**2*6:1;


// Solution 8
countSquares = cuts => cuts == 0 ? 1 : (6 * cuts * cuts) + 2


// Solution 9
var countSquares = (cuts) => cuts ? 6 * cuts**2 + 2 : 1


// Solution 10
var countSquares = function(cuts){
  return cuts < 1 ? 1 : 6 * (cuts ** 2) + 2;
}


// Solution 11
var countSquares = function(cuts){
  return cuts===0? 1:(cuts+1)*(cuts+1)*(cuts+1)-(cuts-1)*(cuts-1)*(cuts-1);  
}


// Solution 12
var countSquares = function(cuts){
  return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1)
}


// Solution 13
var countSquares = function(c){
  return c>0?6*c*c+2:1
}


// Solution 14
const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;