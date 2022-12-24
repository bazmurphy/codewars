// Flatten

// Write a function that flattens an Array of Array objects into a flat Array. 
// Your function must only do one level of flattening.

// flatten([1,2,3]) 
// [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  
// [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) 
// [[1,2,3]]

// function flatten(array) {
//     return array.reduce((pV, cV) => pV.concat(cV), []);
// }

const flatten = (array) => array.reduce((pV, cV) => pV.concat(cV), []);

// function flatten(array) {
//     return array.flat(1);
// }

// const flatten = (array) => array.flat(1);

// .flat doesn't work on codewars

console.log(flatten([]));
// []
console.log(flatten([1, 2, 3]));
// [1, 2, 3]
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]));
// [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]));
// [3, 4, 5, [9, 9, 9], "a,b,c"]
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]));
// [[3], [4], [5], 9, 9, 8, [1, 2, 3]]


// Solution 1
var flatten = function (lol){
    return [].concat.apply([],lol);
  }


// Solution 2
var flatten = function (array){
    return array.reduce(function(a,z) {
      return a.concat(z);
    }, []);
  }


// Solution 3
const flatten = (array) => [].concat(...array);


// Solution 4
var flatten = function (array){
    var res = [];
    for(var i=0; i<array.length; i++) {
      var el = array[i];
      if(el instanceof Array) {
        for(var j=0; j<el.length; j++) {
          res.push(el[j]);
        }
      } else {
        res.push(el);
      }
    }
    return res;
  }


// Solution 5
var flatten = function (array){
    return Array.prototype.concat.apply([],array);
}


// Solution 6
function flatten(array) {
    return [].concat(...array);
  }


// Solution 7
var flatten = (sarray) => [].concat(...sarray);


// Solution 8
const flatten = (xs) => xs.reduce((yss, ys) => yss.concat(ys), []);


// Solution 9
var flatten = function (array){
    return [].concat.apply([], array);
}


// Solution 10
var flatten = function (array){
    if (!array.length){ return [] }
    for(let i of array){
     if(typeof i === 'number' || typeof i === 'letter'){
       return array
    }
    return [].concat(...array)
   }
}


// Solution 11
var flatten = function (lol){
    var arr = [];
    lol.forEach(function(el){ arr = arr.concat(el);});
    return arr;
}


// Solution 12
var flatten = function (array){
    // TODO: Program me
    var flat = [];
    
    for (var i in array)
      flat = flat.concat(array[i]);
    
    return flat;
}