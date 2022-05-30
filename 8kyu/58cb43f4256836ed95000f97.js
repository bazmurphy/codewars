// Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


function findDifference(a, b) {
    const aVolume = a[0] * a[1] * a[2];
    const bVolume = b[0] * b[1] * b[2];
    if (aVolume > bVolume) {
      return aVolume - bVolume;
    } else if (bVolume > aVolume) {
      return bVolume - aVolume;
    } else {
      return 0;
    }
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
// 14
console.log(findDifference([9, 7, 2], [5, 2, 2]));
// 106
console.log(findDifference([11, 2, 5], [1, 10, 8]));
// 30
console.log(findDifference([4, 4, 7], [3, 9, 3]));
// 31
console.log(findDifference([15, 20, 25], [10, 30, 25]));
// 0


// Solution 1
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}


// Solution 2
function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}


// Solution 3
function volume(c) {
  return c.reduce((x, y) => x * y);
}

function find_difference(a, b) {
  return Math.abs(volume(a) - volume(b));
}


// Solution 4
function find_difference([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c-d*e*f)
}


// Solution 5
function find_difference(a, b) {
  return Math.abs(a.reduce(function(x,y){return x*y;}) - b.reduce(function(x,y){return x*y;}))
}


// Solution 6
function findDifference(a, b) {
  return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]);
}