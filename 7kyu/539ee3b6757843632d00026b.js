// Find the capitals

// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


var capitals = function (word) {

    word = word.split("");

    newArr = [];
    
    for (let i = 0; i < word.length; i++) {
        if (/[A-Z]/.test(word[i])) {
            newArr.push(i)
        }
   }
   
    return newArr;

    // return word
    //     .split("")
    //     .map((element, index) => /[A-Z]/.test(element) === true ? index : undefined)
    //     .filter(element => typeof element === 'number')

}

console.log(capitals('CodEWaRs'))
// [0,3,4,6];



// Solution 1
var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};


// Solution 2
var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
      return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
};


// Solution 3
var capitals = function (word) {
    return word.split('')
               .map(function(l, i) { if (l.toUpperCase() === l) return i; })
               .filter(function(i) { return i != null })
};


// Solution 4
var capitals = function (word) {
    return word.split('').reduce(function(n, l, i){
      return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
};


// Solution 5
const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }


// Solution 6
var capitals = function (word) {
    return word.split('').reduce(function(result, c, i) {
      if (c.toUpperCase() === c) result.push(i);
      return result;
    }, []);
};


// Solution 7
const capitals = word =>
  [...word].reduce((pre, val, idx) => /[A-Z]/.test(val)? [...pre, idx] : pre, []);


// Solution 8
var capitals = function (word) {
    var ret = [];
    word.replace(/[A-Z]/g, function(_, i){ ret.push(i) });
    return ret;
};