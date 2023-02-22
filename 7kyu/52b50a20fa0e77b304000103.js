// SantaClausable Interface

// You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.

// Rules

// The SantaClausable interface is implemented, if all of the following methods are defined on an object:

// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney

// Example

// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };

// var notSanta = {
//     sayHoHoHo: function() { console.log('Oink Oink!') }
//     // no distributeGifts() and no goDownTheChimney()
// };

// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE

// Additional Information on this Topic

// http://en.wikipedia.org/wiki/Duck_typing


function isSantaClausable(obj) {
  // if (typeof obj.sayHoHoHo === "function" 
  //   && typeof obj.distributeGifts === "function" 
  //   && typeof obj.goDownTheChimney === "function") {
  //   return true;
  // } else {
  //   return false;
  // }
  return typeof obj.sayHoHoHo === "function" && typeof obj.distributeGifts === "function" && typeof obj.goDownTheChimney === "function";
};

var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
  // no distributeGifts() and no goDownTheChimney()
};

console.log(isSantaClausable(santa)); // must return TRUE
console.log(isSantaClausable(notSanta)); // must return FALSE


// Solution 1
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}


// Solution 3
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(meth => typeof obj[meth] === 'function');
}


// Solution 4
function isSantaClausable(obj) {
  return 'function' == typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}


// Solution 5
function isSantaClausable(obj) {
  /*return (
  obj.hasOwnProperty('sayHoHoHo') && 
  obj.hasOwnProperty('distributeGifts') && 
  obj.hasOwnProperty('goDownTheChimney')
    );*/
    return (
    (typeof obj.sayHoHoHo==='function')
    &&(typeof obj.distributeGifts=== 'function')
    &&(typeof obj.goDownTheChimney==='function')
    );
 }


// Solution 6
function isSantaClausable(obj) {
  // TODO
  if(typeof obj.sayHoHoHo !== 'function' ) return false;
  if(typeof obj.distributeGifts !== 'function') return false;
  if(typeof obj.goDownTheChimney !== 'function') return false;
  else return true;
}


// Solution 7
const isSantaClausable = obj =>
[`sayHoHoHo`, `distributeGifts`, `goDownTheChimney`].every(val => typeof obj[val] === `function`);


// Solution 8
function isSantaClausable(obj) {
  return ((typeof obj.sayHoHoHo === 'function' || typeof obj.say_ho_ho_ho === 'function') &&
    (typeof obj.distributeGifts === 'function' || typeof obj.distribute_gifts === 'function') &&
    (typeof obj.goDownTheChimney === 'function' || typeof obj.go_down_the_chimney === 'function'));
}


// Solution 9
const isSantaClausable = o => typeof (o.sayHoHoHo && o.distributeGifts && o.goDownTheChimney) === 'function';


// Solution 10
function isSantaClausable(obj) {
  if (typeof obj !== 'object')
    return false;
  if ('name' in obj && obj['name'] === undefined)
    return false;
  return ('sayHoHoHo' in obj ? 
  ('distributeGifts' in obj ?
  ('goDownTheChimney' in obj ? true : false) : false) : false);
}


// Solution 11
const isSantaClausable = obj => [
  'sayHoHoHo',
  'distributeGifts',
  'goDownTheChimney'
].every(x => typeof obj[x] == 'function');


// Solution 12

const isSantaClausable = ({ sayHoHoHo, distributeGifts, goDownTheChimney }) =>
      typeof sayHoHoHo === 'function' &&
      typeof distributeGifts === 'function' &&
      typeof goDownTheChimney === 'function'


// Solution 13
function isSantaClausable(obj) {
  return !['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].some(fnc => typeof obj[fnc] !== 'function');
}


// Solution 14
const isSantaClausable = obj =>
  ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
    methodName => typeof obj[methodName] === 'function'
  )