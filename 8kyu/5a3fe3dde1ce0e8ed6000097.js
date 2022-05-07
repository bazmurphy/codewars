// Century From Year

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    
  return Math.ceil(year / 100)
  
//   from 1 <= 100
//   from 101 <= 199
    
//   1705 = 18
//   1900 = 19
//   1601 = 17
//   2000 = 20
 
//   let deconstructedYear = year.toString().split('');

//   let reconstructedFirstHalfofYear = deconstructedYear.map([0] + [1])
  
//   return;

}

century(1705);
// 18
century(1900);
// 19
century(1601);
// 17
century(2000);
// 20
century(89);
// 1


// Solution 1
const century = year => Math.ceil(year/100)


// Solution 2
function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}


// Solution 3
function century(year) {
  return (year + 99) / 100 | 0;
}


// Solution 4
const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;


// Solution 6
function century(year) {
  if (year <= 100){
    return 1;
  }

  let cen = parseInt(year / 100);
  let rem = year % 100;
  
  return rem === 0 ? cen : cen + 1;
}
