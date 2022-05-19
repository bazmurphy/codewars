// Implement Array.prototype.filter()

// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

// More info can be found here:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


Array.prototype.filter = function (func) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        newArray.push(this[i])
      }
    }
    return newArray;
}

console.log([1,2,3,4].filter((num)=>{ return num > 3}));
// [4]


// Solution 1
Array.prototype.filter = function(fn){
    var res = [];
    for (var i = 0; i<this.length; i++){
      if (fn(this[i])){
        res.push(this[i]);
      }
    }
    return res;
}


// Solution 2
// This filter function return an array with values that meet 
// the conditions set in the ruleCondition callback function.

Array.prototype.filter = function( ruleCondition ) {
    // Create an empty array to store the values that satisfy the ruleCondition
      var arr = [];
      
      this.forEach( function( currentValue ) {
      // Evaluate each element and push the value when content in array meet condition
        if( ruleCondition( currentValue ) ) arr.push( currentValue );
      });
      return arr;
}
    


// Solution 3
Array.prototype.filter=function(fn){
    return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
}


// Solution 4
Array.prototype.filter = function (callback, context) {
    arr = [];
    for(var i = 0; i < this.length; i++) {
      if(callback.call(context, this[i], i, this)) {
          arr.push(this[i]);
      }
    }
  return arr;
}


// Solution 5
Array.prototype.filter = function ( func, arr = [] ) {
    for ( let i = 0; i < this.length; i++ ) {
        if ( func(this[i]) ) { arr.push(this[i]) }
    }
    return arr
}


// Solution 6
Array.prototype.filter = function (fn) {
    return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, []);
};


// Solution 7
Array.prototype.filter = function(callback) {
    var result = [];
    this.forEach(function(element) {
      if (callback(element))
        result.push(element);
    });
    return result;
}


// Solution 8
Array.prototype.filter = function (cb) {
    var result = [];
  
    for(const el of this) {
      if (cb(el)) {
        result.push(el);
      }
    }
  
    return result;
}