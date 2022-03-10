// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {

    let invertedArray = [];
    
    for (let i = array.length; i >= 0; i--) {
                
        if (array[i] === Math.abs(array[i])) {
            // console.log(i);
            // console.log('positive');
            // console.log('inverting to negative')
            invertedArray[i] = Math.abs(array[i]) * -1;
        }

        else if (array[i] === Math.abs(array[i] * -1)) {
            // console.log(i);
            // console.log('negative');
            // console.log('inverting to positive')
            invertedArray[i] = Math.abs(array[i]);
        }
    }
    
    // console.log(`original array: ${array}\noriginal array length: ${array.length}`);
    // console.log(`inverted array: ${invertedArray}\ninverted array length: ${invertedArray.length}`);    

    return invertedArray;

}

invert([1,2,3,4,5]);
// [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) 
// [-1,2,-3,4,-5]
invert([]) 
// []


// Solution 1
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}

// Solution 2
function invert(array) {
    return array.map(i => 0 - i);
}

// Solution 3
const invert = array => array.map(num => -num);

// Solution 4
function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
}

// Solution 5
function invert(array) {
    return array.map(e=> e*-1);
}