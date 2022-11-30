// !a == a ?!

// You task to pass only this tests :

// a == false
// !a == false
// a == !a

const a = [];

console.log(a == false)
// true
// `a != false`
console.log( !a == false)
// true
// `!a != false`
console.log( a == !a)
// true
// `a != !a`


// Solution 1
const a = []
// The abstract or loose equality operator (written ==) first coerces the two operands to a common type before comparing them. You follow this table to know how the type comparison works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// In this solution, ![] becomes false. It is then compared to []. According to the table they are first coerced to a number, which in both cases is 0.

// Solution 2
const a = '0';


// Solution 3
const a = new Boolean();


// Solution 4
// First
const a = []

// Second
// const a = ' '

// Third
// const a = '0'

// Fourth
// const a = new Boolean

// Fifth
// const a = {
//   num: true,
//   valueOf: function() {
//     return !this.num
//   }
// }



// Solution 5
const a = '0'


// Solution 6
const a = `0`;


// Solution 7
const a = ' ';


// Solution 8
const a = '\t'


// Solution 9
const a = ['\n0']


// Solution 10
const a = new Number


// Solution 11
let b = [ false, false, true ];
const a = {
  valueOf() {
    return b.shift();
  }
};


// Solution 12
count = 0;
Object.defineProperty(this, "a", {
	get: ()=>(
		count++%2?true:false
	)
})


// Solution 13
const a = [];
function assertEquals(a){
  if(a == false){
  return true;
  }; 
  if(!a == false){
  return true;
  }; 
  if(a == false) {
  return true;
  }; 
}


// Solution 14
let value = true;
let a = {[Symbol.toPrimitive]: () => !value};