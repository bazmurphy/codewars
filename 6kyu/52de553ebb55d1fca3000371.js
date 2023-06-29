// Find the missing term in an Arithmetic Progression

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
// Example

// findMissing([1, 3, 5, 9, 11]) == 7

// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

var findMissing = function (list) {  
 
  // let smallestDifference = Math.abs(list[1]) - Math.abs(list[0]);
  let smallestDifference = Math.abs(list[1]) - Math.abs(list[0]);

  for (let i = 0; i < list.length -1; i++) {

    let currentDifference = Math.abs(list[i+1]) - Math.abs(list[i]);

    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
    }

  }

  // for (let i = 0; i < list.length - 1; i++) {

  //   if (Math.abs(list[i+1]) - Math.abs(list[i]) !== smallestDifference) {
  //     if (list[i+1] > list[i]) {
  //       return list[i] + smallestDifference;
  //     } else {
  //       return list[i] - smallestDifference;
  //     }
  //   }
    
  // }

  let value = list.filter((element, index, array) => element - array[index+1] !== smallestDifference)[0];
  console.log(value);
  console.log(smallestDifference);
  let result = value - smallestDifference;
  console.log(result);
}

console.log(findMissing([1, 3, 4]));
// 2
console.log(findMissing([ -10, -16, -28 ]));
// -22
console.log(findMissing([ -11, -19, -27, -35, -43, -51, -67, -75 ]));
// -59