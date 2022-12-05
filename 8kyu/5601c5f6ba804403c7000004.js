
// Localize The Barycenter of a Triangle

// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

// You know that the coordinates of the barycenter are given by the following formulas.

// For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

// Let's see some cases:

// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

// barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]

// The given points form a real or a degenerate triangle but in each case the above formulas can be used.


function barTriang(p1, p2, p3){
  let x = (p1[0] + p2[0] + p3[0]) / 3;
  let y = (p1[1] + p2[1] + p3[1]) / 3;
  x = x.toFixed(4);
  y = y.toFixed(4);
  x = parseFloat(x);
  y = parseFloat(y);
  return [x, y];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]));
// [8.6667, 6.6667])
console.log(barTriang([4, 2], [12, 2], [6, 10]));
// [7.3333, 4.6667])
console.log(barTriang([4, 8], [8, 2], [16, 6]));
// [9.3333, 5.3333])
console.log(barTriang([0, 0], [1, 3], [-1, 6]));
// [0, 3])
console.log(barTriang([0, 0], [1, 6], [8, -6]));
// [3, 0])


// Solution 1
function barTriang(p1, p2, p3){
  return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4),
          +((p1[1]+p2[1]+p3[1])/3).toFixed(4)];
}

// Solution 2
function barTriang(p1, p2, p3){
  var x = parseFloat(parseFloat((p1[0] + p2[0] + p3[0]) / 3).toFixed(4));
  var y = parseFloat(parseFloat((p1[1] + p2[1] + p3[1]) / 3).toFixed(4));
  
  return [x, y];
}


// Solution 3
const barTriang = ([xA, yA], [xB, yB], [xC, yC]) => [Math.round((xA + xB + xC) / .0003) / 10000, Math.round((yA + yB + yC) / .0003) / 10000];


// Solution 4
function barTriang(p1, p2, p3){
  let x = (p1[0] + p2[0] + p3[0]) / 3;
  let y = (p1[1] + p2[1] + p3[1]) / 3;
  
  return [+x.toFixed(4), +y.toFixed(4)];
}


// Solution 5
function barTriang(p1, p2, p3){
  return [point(p1[0], p2[0], p3[0]), point(p1[1], p2[1], p3[1])]
}

function point(p1, p2, p3){
  return Math.round((p1+p2+p3)/3*10000)/10000;
}


// Solution 6
const roundToFour = n => +`${Math.round(`${n}e+4`)}e-4`;
const barTriang = ([xA, yA], [xB, yB], [xC, yC]) => [
	roundToFour((xA + xB + xC) / 3),
	roundToFour((yA + yB + yC) / 3)
];


// Solution 7
const barTriang = (p1, p2, p3) =>
  [(p1[0] + p2[0] +p3[0]) / 3, (p1[1] + p2[1] +p3[1]) / 3].map(val => Math.round(val * 10**4) / 10**4);


// Solution 8
function barTriang ([x1, y1], [x2, y2], [x3, y3]) {
  const x0 = Number( ( (x1 + x2 + x3) / 3 ).toFixed(4) );
  const y0 = Number( ( (y1 + y2 + y3) / 3 ).toFixed(4) );
  
  return [x0, y0];
}


// Solution 9
const barTriang = (p1, p2, p3) => [parseFloat(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4)), parseFloat(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4))];


// Solution 10
function barTriang(p1, p2, p3){
  var xC = (p1[0] + p2[0] + p3[0]) / 3;
  var yC = (p1[1] + p2[1] + p3[1]) / 3;
  return [parseFloat(xC.toFixed(4)), parseFloat(yC.toFixed(4))];
}


// Solution 11
function barTriang([xA, yA], [xB, yB], [xC, yC]){
  return [[xA, xB, xC], [yA, yB, yC]].map(a => +(a.reduce((s, n) => s + n, 0) / 3).toFixed(4));
}


// Solution 12
barTriang=([Q,W],[A,S],[Z,X])=>[Q+A+Z,W+S+X].map(V=>+(V/3).toFixed(4))


// Solution 13
function barTriang([xA,yA], [xB,yB], [xC, yC]) {
  return [+((xA + xB + xC) / 3).toFixed(4),
          +((yA + yB + yC) / 3).toFixed(4)];
}


// Solution 14
const barTriang = (p1, p2, p3) => [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4), +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)];