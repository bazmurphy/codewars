// Pete, the baker

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {

  let availableIngredientsMultiples = [];

  for (item in recipe) {
    if (available.hasOwnProperty(item) === false || available[item] < recipe[item]) {
      return 0;
    } else {
      availableIngredientsMultiples.push(Math.floor(available[item] / recipe[item]))
    }
  }

  return Math.min(...availableIngredientsMultiples);

}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));
// 2

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available));
// 0


recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 } 
available = { sugar: 500, flour: 2000, milk: 2000, apples: 15, oil: 20 }
console.log(cakes(recipe, available));
// 0


// Solution 1
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}


// Solution 2
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)


// Solution 3
function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}


// Solution 4
function cakes(recipe, available) {
  return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
}


// Solution 5
function cakes(recipe, initial){
  return Math.floor(Object.keys(recipe).reduce(function(min, key){
     return Math.min(initial[key] / recipe[key] || 0, min);
  }, Infinity));
}


// Solution 6
function cakes(recipe, available) {

  let result = Infinity;
  
  for (let x in recipe) {
  result = Math.min(Math.floor(available[x] / recipe[x]), result);
  
  };
  
  return result || 0;
}


// Solution 7
function cakes(recipe, supplies)
{
  var n = [];
  for (var key in recipe)
    if (key in supplies)
      n.push(Math.floor(supplies[key]/recipe[key]));
    else
      return 0;
  return Math.min.apply(Math, n);
}


// Solution 8
function cakes(recipe, available) {
  var numbers = [];
  for(var ingredient in recipe) {
    if(!available[ingredient]) return 0;
    numbers.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return Math.min.apply(null, numbers);
}


// Solution 9
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(prev, key) {
    var need = recipe[key];
    var avail = available[key];
    return Math.min(prev, (avail) ? Math.floor(avail/need) : 0);
  }, Infinity);
}


// Solution 10
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(acc, ingredient) {
    return Math.min(acc, Math.floor(available[ingredient]/recipe[ingredient]) || 0);
  }, Number.MAX_VALUE);
}


// Solution 11
function cakes(recipe, available) {
  let reqIng = Object.keys(recipe);
  let availIng = Object.keys(available);
  let count = 0;
  let amount = [];
  
  if (availIng.length === 0) {
    return 0
  }
  
  if (reqIng.length > availIng.length) {
    return 0;
  }
  
  for (const [keys1, values1] of Object.entries(recipe)) {
    for (const[keys2, values2] of Object.entries(available)) {
      if (keys1 === keys2) {
        amount.push(Math.floor(values2 / values1))
      }
    }
  }
  return Math.min.apply(Math, amount);
}


// Solution 12
function cakes(recipe, available) {
  return Math.min(...Object.entries(recipe).map(([key, value]) => available[key] ? Math.floor(available[key] / value) : 0));
}


// Solution 13
function cakes(recipe, available) {
  let cakesAmount = 0;
  let ingradientsLeft = {};
  
  for (let key in recipe) {
    ingradientsLeft[key] = available[key] || 0;
  }
  
  let tryAgain = true;
  
  while(tryAgain) {
    for (let ingradientName in recipe) {
      ingradientsLeft[ingradientName] -= recipe[ingradientName];
    }
    
    if (Object.values(ingradientsLeft).every((ingradient) => ingradient >= 0)) {
      cakesAmount++;
    } else {
      tryAgain = false;
    }
  }
  
  return cakesAmount;
}


// Solution 14
function cakes(recipe, available) {  
  const possibleValues = [];
  for(const key in recipe) {
   possibleValues.push(Math.floor(available[key] / recipe[key]));
  }
  
  return Math.min(...possibleValues) || 0;
}