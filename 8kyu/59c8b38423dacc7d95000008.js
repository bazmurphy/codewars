// Simple Fun #352: Reagent Formula

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// Task

// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example

// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.
// Note

// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// Happy Coding ^_^


// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

function isValid(formula){
  if (
    ((formula.includes(1) && formula.includes(2)) !== true) &&
    ((formula.includes(3) && formula.includes(4)) !== true) &&
    (formula.includes(5) === formula.includes(6)) &&
    (formula.includes(7) || formula.includes(8))
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid([1,3,7]));
// true
console.log(isValid([7,1,2,3]));
// false
console.log(isValid([1,3,5,7]));
// false
console.log(isValid([1,5,6,7,3]));
// true
console.log(isValid([5,6,7]));
// true
console.log(isValid([5,6,7,8]));
// true
console.log(isValid([6,7,8]));
// false
console.log(isValid([7,8]));
// true


// Solution 1
isValid = a => 
  !(a.includes(1) && a.includes(2)) &&
  !(a.includes(3) && a.includes(4)) &&
  a.includes(5) === a.includes(6) &&
  (a.includes(7) || a.includes(8));


// Solution 2
function isValid(formula){
  
  const cannot = (a, b) => {
       const containsA = formula.includes(a);
       const containsB = formula.includes(b);
       return containsA !== containsB || !containsA;
  }                        
  const must = (a, b) => formula.includes(a) === formula.includes(b);
  
  const any = (a, b) => formula.includes(a) || formula.includes(b);
 
  return cannot(1, 2) && cannot(3, 4) && must(5, 6) && any(7, 8);
}


// Solution 3
let isValid = a => !(a.includes(1) && a.includes(2)) && !(a.includes(3) && a.includes(4)) && a.includes(5) === a.includes(6) && (a.includes(7) || a.includes(8));


// Solution 4
function isValid(f) {
  return (
      !(f.includes(1) && f.includes(2)) &&
      !(f.includes(3) && f.includes(4)) &&
      (f.includes(5) === f.includes(6)) &&
      (f.includes(7) || f.includes(8))
  )
}


// Solution 5
function isValid(formula){
  const has = formula.includes.bind(formula)

  return (
    has(1) && has(2) ? false :
    has(3) && has(4) ? false :
    has(5) ^ has(6) ? false :
    !has(7) && !has(8) ? false :
    true
  )
}


// Solution 6
function isValid(formula){
  if(formula.includes(1) && formula.includes(2)) {
    return false;
  }
  else if(formula.includes(3) && formula.includes(4)) {
    return false;
  }
  else if(formula.includes(5) != formula.includes(6)) {
    return false;
  }
  else if(formula.includes(7) || formula.includes(8)) {
    return true; 
  } 
  else {
    return false;
  }
}


// Solution 7
const isValid = (formula) => {
  const containsMaterial1Or2 = formula.filter(material => material === 1 || material === 2);
  const containsMaterial3Or4 = formula.filter(material => material === 3 || material === 4);
  const containsMaterial5Or6 = formula.filter(material => material === 5 || material === 6);
  const containsMaterial7Or8 = formula.filter(material => material >= 7);

  return containsMaterial1Or2.length < 2 && containsMaterial3Or4.length < 2 && containsMaterial7Or8.length > 0
    && (containsMaterial5Or6.length === 0 || containsMaterial5Or6.length === 2);
};


// Solution 8
let isValid = formula => {
  if(formula.includes(1) && formula.includes(2)){
    return false
  }
  if(formula.includes(3) && formula.includes(4)){
    return false
  }
  if((formula.includes(5) && !formula.includes(6)) || 
  (!formula.includes(5) && formula.includes(6))){
    return false
  }
  if(!formula.includes(7) && !formula.includes(8)){
    return false
  }
  return true
}


// Solution 9
function isValid(formula){
  const not = x => arr => arr.every(y => y !== x);
  const and = x => arr => arr.some(y => y === x);
  const replace = x => () => x;
  const rules = {
    1 : not(2),
    2 : not(1),
    3 : not(4),
    4 : not(3),
    5 : and(6),
    6 : and(5),
    7 : replace('*'), 
    8 : replace('*')
  };
  const rulesResult = formula.map(x => rules[x] && rules[x](formula));
  return rulesResult.includes('*') && rulesResult.every(x => !!x);
}


// Solution 10
function isValid(formula){
 let c1 = !(formula.indexOf(1) > -1  && formula.indexOf(2) > -1)
 let c2 = !(formula.indexOf(3) > -1  && formula.indexOf(4) > -1)
 let c3 = (formula.indexOf(5) > -1  && formula.indexOf(6) > -1) || (formula.indexOf(5) === -1  && formula.indexOf(6) === -1) 
 let c4 = formula.indexOf(7) > -1  || formula.indexOf(8) > -1
 return c1 && c2 && c3 && c4
}


// Solution 11
function isValid(formula){
  function arrayHas(value){
    return formula.includes(value);
  }
  if (arrayHas(1) == true && arrayHas(2) == true){return false;}
  if (arrayHas(3) == true && arrayHas(4) == true){return false;}

  if (arrayHas(5) == true || arrayHas(6) == true){
    if (arrayHas(5) == false || arrayHas(6) == false){return false;}
    else {return true;}
  }
  
  if (arrayHas(7) == true || arrayHas(8) == true){return true;}
  if (arrayHas(7) == false && arrayHas(8) == false){return false;}
}


// Solution 12
const isValid = (formula) => {
  return (
    !(formula.includes(1) && formula.includes(2)) &&
    !(formula.includes(3) && formula.includes(4)) &&
    formula.includes(5) == formula.includes(6) &&
    (formula.includes(7) || formula.includes(8))
  );
};


// Solution 13
function isValid(formula){
  let m = [0, 0, 0, 0];
  formula.forEach(e => {
    m[Math.ceil(e / 2 - 1)]++;
  });
  return m[0] < 2 && m[1] < 2 && (m[2] === 0 || m[2] === 2) && m[3] > 0;
}


// Solution 14
isValid = formula => !(formula.includes(1) && formula.includes(2)) && !(formula.includes(3) && formula.includes(4)) && (formula.includes(5) == formula.includes(6)) && (formula.includes(7) || formula.includes(8))