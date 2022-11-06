// How much water do I need?

// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

function howMuchWater(water, load, clothes){
  if (clothes > load * 2) {
    return "Too much clothes"
  } else if (clothes < load) {
    return "Not enough clothes"
  } else {
    return Number((water * Math.pow(1.1, clothes - load)).toFixed(2));
  }
}

console.log(howMuchWater(10,10,21));
// 'Too much clothes'
console.log(howMuchWater(10,10,2));
// 'Not enough clothes'
console.log(howMuchWater(10,11,20));
// 23.58
console.log(howMuchWater(50,15,29));
// 189.87


// Solution 1
function howMuchWater(L,X,N){
  if (N > 2 * X) return "Too much clothes";
  if (N < X) return "Not enough clothes";
  return +(L * 1.1 ** (N - X)).toFixed(2);
}


// Solution 2
let 
howMuchWater
= ( Ⰴ , Ⰰ , Ⰲ )=>
Ⰲ <= Ⰰ + Ⰰ ? Ⰲ >=
Ⰰ? + ( Ⰴ * 1.1 ** (Ⰲ-Ⰰ)).
  toFixed
    `2`:
`Not enough clothes` : `Too much clothes`


// Solution 3
const howMuchWater = (water, load, clothes) =>
   clothes > 2 * load ? 'Too much clothes' 
  : clothes < load ? 'Not enough clothes' 
  : Math.round(water * Math.pow(1.1, clothes-load)*100)/100;   


// Solution 4
const howMuchWater = (water, load, clothes) =>
  clothes < load ? `Not enough clothes` : clothes > 2 * load ? `Too much clothes` : Math.round(water * 1.1 ** (clothes - load) * 1e2) / 1e2;


// Solution 5
// function howMuchWater(water, load, clothes){
//   if ( clothes > 2 * load ) { return 'Too much clothes' }
//   if ( load > clothes ) { return 'Not enough clothes' }
//   return +( water * 1.1 ** ( clothes - load ) ).toFixed(2)
// }
const howMuchWater = (water, load, clothes) => clothes > 2 * load ? 'Too much clothes' : load > clothes ? 'Not enough clothes' : +( water * 1.1 ** ( clothes - load ) ).toFixed(2)


// Solution 6
function howMuchWater(water, load, clothes){
 
  
  if (clothes >= 2*load){
    return 'Too much clothes'
  } else if (clothes < load){
    return 'Not enough clothes'
  } else {
    return Number((water * Math.pow(1.1, clothes - load)).toFixed(2))
   
  }
  
}


// Solution 7
const howMuchWater = (w, l, c) => c > l * 2 ? 'Too much clothes' : l > c ? 'Not enough clothes' : +(w * 1.1 ** (c - l)).toFixed(2)


// Solution 8
function howMuchWater(water, load, clothes){  
  const maxLoad = load * 2  
  
  if(clothes < load) return 'Not enough clothes'
  
  if(clothes > maxLoad) return 'Too much clothes'
  
  const amountOfWater = water * 1.1 ** (clothes - load)
    
  return parseFloat(amountOfWater.toFixed(2))
}


// Solution 9
howMuchWater=(a,b,c)=>c>b*2?'Too much clothes':c<b?'Not enough clothes':+(a*1.1**(c-b)).toFixed(2)


// Solution 10
function howMuchWater(water, load, clothes){
  if (clothes/load > 2) return 'Too much clothes'
  if (clothes < load) return 'Not enough clothes'
  return +(water * Math.pow(1.1, (clothes - load))).toFixed(2)
}


// Solution 11
function howMuchWater(water, load, clothes){
  if (load * 2 < clothes) {
    return 'Too much clothes';
  } else if (load > clothes) {
    return 'Not enough clothes';
  } else {
    return +(water * 1.1 ** (clothes - load)).toFixed(2);
  }
}


// Solution 12
howMuchWater = (water, load, clothes) => clothes < load ? 'Not enough clothes' : clothes > 2 * load ? 'Too much clothes' : +(water * 1.1 ** (clothes - load)).toFixed(2)


// Solution 13
function howMuchWater(water, load, clothes){
  if(clothes >= 2 * load){
    return 'Too much clothes';
  } else if(clothes < load){
    return 'Not enough clothes';
  }   else {
       //10% mas
     return Math.round(water * Math.pow(1.1,(clothes-load))*100)/100;
    }
}


// Solution 14
function howMuchWater(water, load, clothes){
  if(clothes / load > 2) return "Too much clothes"
  if(clothes < load) return "Not enough clothes"
  return Number((water * 1.1**(clothes - load)).toFixed(2))
}