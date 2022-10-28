// Power

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
// Examples

// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000

// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
  let total = 1;
  for (let i = 0; i < power; i++) {
    total *= number;
  }
  return total;
}

console.log(numberToPower(4, 2))
// 16
console.log(numberToPower(10, 4))
// 10000
console.log(numberToPower(10, 0))
// 1


// Solution 1
function numberToPower(number, power){
  var total = 1;
  for (var i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
}


// Solution 2
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;


// Solution 3
function numberToPower(number, power){
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1)
}


// Solution 4
function numberToPower(number, power) {
  var result = 1;
  for (let i = 0; i < power; ++i)
      result *= number;
  return result;
}


// Solution 5
function numberToPower(number, power){
  return Array(power).fill(number).reduce((res, n) => res * n, 1);
}


// Solution 6
function numberToPower(fuck, anus) {
  let your = Buffer.from("Kio=", "base64").toString();
  return [].map.constructor(`return ${fuck}${your}${anus}`)();
}


// Solution 7
function numberToPower(number, power){
  let total = 1;
  for(i = 0; i < power; i++){
    total *= number
  }
  return total;
}


// Solution 8
function numberToPower(number, power){
  let pow = 1;
  for(let i = 1; i <= power; i ++) pow *= number;
  return pow;
}


// Solution 9
const numberToPower = (number, power) => [...new Array(power)].fill(number).reduce((a,c)=>a*c,1)


// Solution 10
const numberToPower = (n,p) => p == 0 ? 1 : Array.from({length: p}, (v,i) => n).reduce((a,b) => a * b)


// Solution 11
numberToPower=(n,p)=>[...Array(p)].reduce((x)=>x*n,1)


// Solution 12
const numberToPower=(n,p)=>Array(p).fill(n).reduce((a, b)=>a*b, 1)


// Solution 13
function numberToPower(number, power) {
  if (power === 0) return 1;
  return numberToPower(number, power - 1) * number;
}


// Solution 14
function numberToPower(number, power) {
  return vm.runInThisContext(number + '*' + '*' + power);
}