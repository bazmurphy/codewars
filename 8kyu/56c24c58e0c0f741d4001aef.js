// isReallyNaN

// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

console.log(isReallyNaN(37));
// false
console.log(isReallyNaN('37'));
// false
console.log(isReallyNaN(NaN));
// true
console.log(isReallyNaN(undefined));
// false


// Solution 1
const isReallyNaN = Number.isNaN


// Solution 2
const isReallyNaN = val => val != val


// Solution 3
function isReallyNaN(val) {
  return val != val;
};


// Solution 4
const isReallyNaN = $ => typeof $ === 'number' && isNaN( $ )


// Solution 5
const isReallyNaN = (val) => Object.is(val, NaN);


// Solution 6
const isReallyNaN = x => x !== x


// Solution 7
const isReallyNaN = (val) => Number.isNaN(val);


// Solution 8
const isReallyNaN = val => val !== val;


// Solution 9
const isReallyNaN = (val) => {
    if (val === undefined){
        return false
    }else if (typeof(val) === "object"){
      return false
    }else if (typeof(val) === "string"){
      return false
    }else if (typeof(val) === "function"){
      return false 
    }else if (isNaN(val)){
        return true
    }else
      return false
}


// Solution 10
const isReallyNaN = val => typeof val === 'number' && isNaN(val)