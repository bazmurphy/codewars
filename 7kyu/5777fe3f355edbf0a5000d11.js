// 'x' marks the spot.

// Task:

// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
// Examples

// Input: []

// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]

// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]

// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]

const xMarksTheSpot = (input) => {
  let count = 0;
  let result;
  for (let i = 0; i < input.length; i++) {
    if (input[i].indexOf("x") > -1) {
      count++;
      result = [i, input[i].indexOf("x")];
    }
  }
  if (count === 1) {
    return result;
  } else {
    return [];
  }
}

console.log(xMarksTheSpot([]))
// []
console.log(xMarksTheSpot([['o', 'o'], ['o', 'o']]))
// []
console.log(xMarksTheSpot([['x', 'o'], ['o', 'x']]))
// []
console.log(xMarksTheSpot([['x', 'o'], ['o', 'o']]))
// [0, 0]
console.log(xMarksTheSpot([
['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]));
// [4, 6]


// Solution 1
const xMarksTheSpot = (input) => {
  let coords = []

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("x")) {
      coords.push([i, input[i].indexOf("x")])
    }
  }
  if (coords.length === 1) {
    return coords[0]
  } else {
    return []
  }
}


// Solution 2
const xMarksTheSpot = (input) => {
  return loc = [], f = 0, input.map((a, x) => {
    return a.map((b, y) => {
      return loc = b === 'x' && (++f) ? [x, y] : loc, b;
    });
  }), f === 1 ? loc : [];
}


// Solution 3
const xMarksTheSpot = (input) => {
  var arr=[];
  for (var i=0; i<input.length; ++i)
    for (var j=0; j<input[i].length; ++j)
      if (input[i][j]=='x')
        arr.push([i,j]);
  return arr.length==1?arr[0]:[];
}


// Solution 4
const xMarksTheSpot = (input) => {
  const xs = input.filter(e => e.filter(e => e.indexOf('x') !== -1).length);
  if (xs.length !== 1 || (xs.length === 1  && xs[0].filter(e => e === 'x').length !== 1)) return []
  
  return input.map((e, idx) => e.map((x, idx2) => x === 'x' ? [idx, idx2] : '').filter(e => e !== '')).filter(e => e.length > 0)[0][0]
}


// Solution 5
const xMarksTheSpot = (input) => {
  let count = 0;
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    let arr = input[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "x") {
        newArr.push(i);
        newArr.push(j);
        count++;
      }
    }
  }
  if (count > 1) return [];
  return newArr;
}


// Solution 6
const xMarksTheSpot = (input) => {
  let idxs = input.map((rows, i) => rows.map((x, j) => [i, j])).reduce((a,b) => a.concat(b), []);
  idxs = idxs.filter(([i, j]) => input[i][j] == 'x');
  return idxs.length === 1 ? idxs[0] : [];
}


// Solution 7
const xMarksTheSpot = input => input.reduce((acc, v, i) => {
  if(v.includes('x')) acc = [...acc, i, v.indexOf('x')]
  if(acc.length > 2) acc = [];
  
  return acc;
}, []);


// Solution 8
const xMarksTheSpot = (input) => {
  if(input.length === 0) return []
  
  const rowLength = input[0].length;
  let smushedArr = [].concat(...input)

  //if non existent
  let firstX = smushedArr.indexOf('x');
  if(firstX < 0) return [];

  //if multiple
  let lastX = smushedArr.lastIndexOf('x')
  if(firstX !== lastX) return [];

  let x = Math.floor(firstX / rowLength)
  let y = firstX - x*rowLength;
  return [x,y]
}


// Solution 9
const xMarksTheSpot = (arr) => {
  var res=[];
    for (var i = 0; i < arr.length; i++) {
      var index = arr[i].indexOf('x');
      if (index > -1) {
        res.push(i, index);
      }
    }
  return (res.length>2 || res== undefined) ? [] : res
  }


// Solution 10
const xMarksTheSpot = (t) => {
  let n = [].concat(...t).join(''),
    e = n.indexOf('x');
  return 1 !== (n.match(/x/g) || []).length ? [] : [Math.floor(e / t[0].length), e % t[0].length];
};


// Solution 11
const xMarksTheSpot = (input) => {
  let x = 0
  let y = []
  input.forEach(e => e.forEach(el=> el.includes('x')? x++ : false))
  if(x != 1){
    return []
  }else {
    input.forEach((e,i)=> e.forEach((el,index)=> el.includes('x') ? y.push(i,index) : false))
  }
  console.log(y)
  return y
}


// Solution 12
const xMarksTheSpot = (input) => {
  let x = 0
  let y = []
  input.forEach(e => e.forEach(el=> el.includes('x')? x++ : false))
  if(x != 1){
    return []
  }else {
    input.forEach((e,i)=> e.forEach(el=> el.includes('x') ? y.push(i,e.indexOf('x')) : false))
  }
  return y
}


// Solution 13
const xMarksTheSpot = (input) => {
  const coordinates = [];
  let count = 0;
  let index1,
    index2 = 0;

  for (let a = 0; a < input.length; a++) {
    const arr = input[a];

    // We check the internal array, if we find x we increase the counter, we write down the index of the array in which x was found and its index in this array, then we look for the next x.
    for (let b = 0; b < arr.length; b++) {
      if (arr[b] === "x") {
        count++;
        index1 = a;
        index2 = b;
      }
    }
  }

  // If in the end count is greater than one or equal to zero (which means that we did not find any x), we return an empty array. If everything is fine, one x was met, then we add its coordinates to the array.
  if (count > 1 || count === 0) {
    return coordinates;
  } else {
    coordinates.push(index1, index2);
  }

  return coordinates;
};


// Solution 14
const xMarksTheSpot = (I) => {
  if (!I.length) return [];
  let line = -1, pos = -1, x_count = 0;
  for ( let l=0; l<I.length; l++ ) {
    for ( let p=0; p<I[0].length; p++ ){
      if ( I[l][p]==='x' ){
        if ( x_count ) return [];
        line = l;
        pos  = p;
        x_count++;
      }
    }
  }
  return x_count ? [line, pos] : []
}