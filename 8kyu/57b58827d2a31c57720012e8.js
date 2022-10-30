// Fuel Calculator 

// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!
// Note

// 1 Dollar = 100 Cents

// function fuelPrice(litres, pricePerLitre) {
//   // 2 = 0.05
//   // 4 = 0.10
//   // 6 = 0.15
//   // 8 = 0.20
//   // 10 = 0.25
//   if (litres >= 10 ) {
//     discountedPrice = pricePerLitre - 0.25;
//   } else if (litres >= 8) {
//     discountedPrice = pricePerLitre - 0.20;
//   } else if (litres >= 6) {
//     discountedPrice = pricePerLitre - 0.15;
//   } else if (litres >= 4) {
//     discountedPrice = pricePerLitre - 0.10;
//   } else if (litres >= 2) {
//     discountedPrice = pricePerLitre - 0.05;
//   }

//   return Number((litres * discountedPrice).toFixed(2));
// }

function fuelPrice(litres, pricePerLitre) {
  // return litres * ((1 - (Math.floor(litres / 2) * 0.05)) * pricePerLitre);
  return (litres * (pricePerLitre - ((Math.floor(litres / 2)) * 0.05))).toFixed(2);
}

console.log(fuelPrice(5, 1.23));
// 5.65
console.log(fuelPrice(8, 2.5));
// 18.40
console.log(fuelPrice(5, 5.6));
// 27.50


// Solution 1
function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}


// Solution 2
function fuelPrice(litres, pricePerLiter) {
  var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
  var price = litres * (pricePerLiter - discount);
  return Math.round(price*100) / 100;
}


// Solution 3
function fuelPrice(litres, pricePerLitre) {
  
  if (litres > 0 && litres < 2) {
    return +(litres * pricePerLitre).toFixed(2);
  }
  
  if (litres >= 2 && litres < 4) {
    return +(litres * (pricePerLitre - 0.05)).toFixed(2);
  }  
  
   if (litres >= 4 && litres < 6) {
    return +(litres * (pricePerLitre - 0.1)).toFixed(2);
  }  
  
  if (litres >= 6 && litres < 8) {
    return +(litres * (pricePerLitre - 0.15)).toFixed(2);
  }
  if (litres >= 8 && litres < 10) {
    return +(litres * (pricePerLitre - 0.2)).toFixed(2);
  }
  if (litres >= 10) {
    return +(litres * (pricePerLitre - 0.25)).toFixed(2);
  }  
}


// Solution 4
function roundPlus(x, n) { //x - number, n - amount of decimal places

  if(isNaN(x) || isNaN(n)) return false;

  var m = Math.pow(10,n);

  return Math.round(x*m)/m;

}

function fuelPrice(litres, pricePerLiter) {
  
  var discountPerLiter = Math.floor(litres / 2);
  
  var totalDiscount = 0.05 * discountPerLiter;
  
  if (totalDiscount > 0.25) {
    totalDiscount = 0.25;  
  };
  
  var priceAfterDiscount = pricePerLiter - totalDiscount;
  
  var totalPricePerLitre = litres * priceAfterDiscount;
  
  return roundPlus(totalPricePerLitre, 2);
}


// Solution 5
function fuelPrice(l, p) {
  return Math.round(100 * l * Math.max(p - 0.05 * ~~(l / 2), p - 0.25)) / 100;
}


// Solution 6
function fuelPrice(l, p) {
  var d = Math.min(~~(l / 2), 5);
  p = p * 100 - d * 5;
  return Math.round(l * p) / 100;
}


// Solution 7
// Litres(l), Price Per Litre (ppl)
const fuelPrice = (l,ppl) => {
  let discountRate = l < 10 ? Math.floor(l/2)*0.05 : 0.25
  return +((ppl - discountRate) * l).toFixed(2)
}


// Solution 8
const fuelPrice = (litres, pricePerLiter) =>
  +(litres * (pricePerLiter - Math.min((litres / 2 ^ 0) * 0.05, 0.25))).toFixed(2);


// Solution 9
function fuelPrice(litres, pricePerLiter) {
  if (litres <  2) return +(litres * pricePerLiter).toFixed(2);
  if (litres <  4) return +(litres * (pricePerLiter - 0.05) ).toFixed(2);
  if (litres <  6) return +(litres * (pricePerLiter - 0.10) ).toFixed(2);
  if (litres <  8) return +(litres * (pricePerLiter - 0.15) ).toFixed(2);
  if (litres < 10) return +(litres * (pricePerLiter - 0.20) ).toFixed(2);
                   return +(litres * (pricePerLiter - 0.25) ).toFixed(2);
}


// Solution 10
function fuelPrice(litres, pricePerLitre) {
  for(i = 2; i <= 10; i += 2)
    if(litres >= i)
      pricePerLitre -= .05
  return +(litres * pricePerLitre).toFixed(2)
}


// Solution 11
function fuelPrice(a, b) {
  return +(a*b-Math.min(~~(a/2)*0.05,0.25)*a).toFixed(4);
}


// Solution 12
function fuelPrice(lits,price) {
  price-= lits>=10? .25: Math.floor(lits/2)*.05;
  return Math.round(100*lits*price)/100;
}


// Solution 13
function fuelPrice(litres, pricePerLitre) {
  // Finds minimum of discount calculation or .25
  let discount = Math.min(Math.floor(litres / 2) * .05, .25)
  
  return +(litres * (pricePerLitre - discount)).toFixed(2)
}


// Solution 14
function fuelPrice(litres, pricePerLitre) {
  if(litres >= 2 && litres < 4){
    return +((litres * (pricePerLitre - 0.05)).toFixed(2))
  }else if(litres >= 4 && litres < 6){
    return +((litres *(pricePerLitre - 0.10)).toFixed(2))
  }else if(litres >= 6 && litres < 8){
    return +((litres * (pricePerLitre - 0.15)).toFixed(2))
  }else if(litres >= 8 && litres < 10){
    return +((litres * (pricePerLitre - 0.20)).toFixed(2))
  }else return +((litres * (pricePerLitre - 0.25)).toFixed(2))
}