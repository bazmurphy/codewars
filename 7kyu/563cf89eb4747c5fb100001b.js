// Remove the minimum

// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


function removeSmallest(numbers) {

    if (numbers.length === false) {
        return [];

    } else {

        let currentLowestNumber = numbers[0]
        let indexOfCurrentLowestNumber = 0;

        // console.log('BEFORE currentLowestNumber', currentLowestNumber)
        // console.log('BEFORE indexOfCurrentLowestNumber', indexOfCurrentLowestNumber)

        for (let i = 0; i < numbers.length; i++) {
            console.log('numbers[i]', numbers[i])
            if (currentLowestNumber > numbers[i]) {
                currentLowestNumber = numbers[i]
                // console.log('OPERATION currentLowestNumber', currentLowestNumber)
                indexOfCurrentLowestNumber = i
                // console.log('OPERATION indexOfCurrentLowestNumber', indexOfCurrentLowestNumber)
            }
        }

        // console.log('AFTER currentLowestNumber', currentLowestNumber)
        // console.log('AFTER indexOfCurrentLowestNumber', indexOfCurrentLowestNumber)

        let newArr = [...numbers]
        newArr.splice(indexOfCurrentLowestNumber, 1)

        return newArr;

    }

}


console.log(removeSmallest([1,2,3,4,5]))
// [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4]))
// [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1]))
// [2,2,2,1]


// Solution 1
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}


// Solution 2
function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}


// Solution 3
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));


// Solution 4
function removeSmallest(numbers) {
    var smallest;
    var newNums = [];
    numbers.forEach(function(num) {
      if (smallest > num || smallest === undefined) {
        smallest = num;
      }
    });
    var index = numbers.indexOf(smallest);
    numbers.forEach(function(n, i) {
      if (i !== index) {
        newNums.push(n);
      }
    });
    return newNums;
}


// Solution 5
function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}


// Solution 6
function removeSmallest(numbers) {
    let min = Infinity, index
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) min = numbers[index = i]
    }
  
    return numbers.slice(0, index).concat(numbers.slice(index + 1))
}


// Solution 7
function removeSmallest(numbers) {
    let copy = [...numbers]
    let smallest = Math.min(...numbers);
    let smallestIdx = numbers.indexOf(smallest)
    copy.splice(smallestIdx, 1)
    return copy
}


// Solution 8
function removeSmallest(numbers) {
    const index = numbers.reduce((m, n, i) => n < numbers[m] ? i : m, 0)
  
    return numbers.filter((n, i) => i !== index)
}