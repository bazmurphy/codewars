// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
        
    return yourPoints > classPoints.reduce( (a,b) => a + b) / classPoints.length ? true : false;

    // const classPointsTotal = classPoints.reduce( (a,b) => a + b);
    // const classPointsAverage = classPointsTotal / (classPoints.length);
            
    // if (yourPoints > classPointsAverage) {
    //     return true;
    // } else {
    //     return false;
    // }

  }

console.log(betterThanAverage([2, 3], 5));
// true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
// false
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
// false
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));
// false


// Solution 1
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

// Solution 2
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

// Solution 3
function betterThanAverage(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
  const classAverage = classPointsSum / classPoints.length;
  const isBetter = yourPoints > classAverage;
  return isBetter;
}

// Solution 4
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
}

// Solution 5
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
}

// Solution 6
const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > classPoints.reduce((pre, val) => pre + val, yourPoints) / (classPoints.length + 1);