// Pythagorean Triple

// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:
// c(squared) = a(squared) + b(squared)

// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 5(squared) = 3(squared) + 4(squared)

// Return Values

// 1 if a, b and c form a pythagorean triple
// 0 if a, b and c do not form a pythagorean triple
// For Python: return True or False
// For JavaScript: return true or false

function isPythagoreanTriple(integers) {
  const largestFirst = integers.sort((elementOne, elementTwo) => elementTwo - elementOne);
  // c(squared) = a(squared) + b(squared)
  return Math.pow(largestFirst[0], 2) === Math.pow(largestFirst[2], 2) + Math.pow(largestFirst[1], 2)
}

console.log(isPythagoreanTriple([3, 4, 5]));
// true
console.log(isPythagoreanTriple([3, 5, 9]));
// false


// Solution 1
function isPythagoreanTriple(integers) {
  let massiv = integers.sort((a, b) => a - b)
  return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}


// Solution 2
function isPythagoreanTriple(nums) {
  const [a,b,c] = nums.sort((a,b) => a - b)

  return a**2 + b**2 === c**2
}


// Solution 3
function isPythagoreanTriple(integers) {
  let [a, b, c] = integers.sort((x, y) => x - y)
  return Math.abs(Math.hypot(a, b) - c) <= 1e-6
}


// Solution 4
function isPythagoreanTriple(i) {
  var [a, b, c] = i.sort((a, b) => a - b)
  
  return (a*a + b*b) === c*c
}


// Solution 5
function isPythagoreanTriple([a,b,c],p=(a,b,c)=>a*a+b*b==c*c) {
  return p(a,b,c) || p(a,c,b) || p(c,b,a);
}


// Solution 6
function isPythagoreanTriple(integers) {
  let [a,b,c] = integers.sort((a,b) => a - b)
  return a ** 2 + b ** 2 == c ** 2
}


// Solution 7
function isPythagoreanTriple(i) {
  i=i.sort((a,b)=>b-a)
 
 return i[0]**2==i[1]**2+i[2]**2
}


// Solution 8
const isPythagoreanTriple = integers => {
  const [a, b, c] = integers.sort((x, y) => x - y);
  return a * a + b * b === c * c;
}


// Solution 9
const isPythagoreanTriple = (arr) => {
  
  const [a, b, c] = arr.sort((a, b) => a - b)
  const a2 = a * a;
  const b2 = b * b;
  const c2 = c * c;
  return a2 + b2 === c2;
  
};


// Solution 10
function isPythagoreanTriple(integers) {
  const maxi = Math.max(...integers);
  const mins = integers.filter(num => num != maxi);
  
  console.log(mins, maxi);
  return mins[0]**2 + mins[1]**2 == maxi**2;
}


// Solution 11
function isPythagoreanTriple(integers) {
  integers.sort((a, b) => b - a);
  return Math.pow(integers[0], 2) === Math.pow(integers[1], 2) + Math.pow(integers[2], 2)
}


// Solution 12
function isPythagoreanTriple(arr) {
  arr = arr.map(n => n * n).sort((a, b) => b - a);
  return arr[0] === arr[1] + arr[2];
}


// Solution 13
function isPythagoreanTriple(integers) {
  const [a, b, c] = integers.sort((a, b) => a - b);
  return a**2 + b**2 === c**2;
}


// Solution 14
function isPythagoreanTriple(arreglo) {
  
   let numeroMayor = 0;
    let suma = 0;
    let indice = 0;

    for (let i = 0; i < arreglo.length; i++) {

        if (numeroMayor < arreglo[i]) {
            numeroMayor = arreglo[i];
            indice = arreglo[i];
        }
    }
    let myIndex = arreglo.indexOf(indice);
    arreglo.splice(myIndex, 1);


    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]**2;
    }

    let expoC = numeroMayor ** 2;



    if (expoC == suma) {
        return true;


    }

    return false;

}