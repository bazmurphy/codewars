// Adding values of arrays in a shifted way

// You have to write a method, that gets two parameter:

// 1. An array of arrays with int-numbers
// 2. The shifting value

// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.

// #1. Example:

// [[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

// 1,2,3,4,5,6
// 7,7,7,7,7,-7

// --> [8,9,10,11,12,-1]

// #2. Example

// [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]

// #3. Example

// [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3


// 1,2,3,4,5,6
//       7,7,7,-7,7,7
//             1,1,1,1,1,1

// --> [1,2,3,11,12,13,-6,8,8,1,1,1]

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.


function addingShifted (arrayOfArrays, shift) {
  
    // if (shift = 0) {
      
    // }
    
    // for (let i = 0; i < arrayOfArrays.length; i++) {
    //   for (element in arrayOfArrays[i]) {
    //     // console.log(arrayOfArrays[i][element])
    //     let newElement = arrayOfArrays[i][element] + arrayOfArrays[i+1][element];
    //     console.log(newElement)
    //   }
    // }
  
    // console.log(arrayOfArrays)
    

    // array[0]index[shift-1] + array[1]index[0]

    // if (shift > 0) {

    //     console.log(arrayOfArrays)


    //     console.log(arrayOfArrays)

    // }


    // console.log('arrayOfArrays[0][shift]', arrayOfArrays[0][shift]);
    // console.log('arrayOfArrays[1][0]', arrayOfArrays[1][0]);

    // let result = arrayOfArrays[0][shift] + arrayOfArrays[1][0]
    // console.log('result', result)


    let returnArray = [];

    let firstArrayFirstChunk;
    let firstArrayLastChunk;

    let secondArrayFirstChunk;
    let secondArrayLastChunk;

    for (let i = 0; i < arrayOfArrays.length; i++) {
        console.log(arrayOfArrays[i])
        
        if (shift > 0) {

            arrayFirstChunk = arrayOfArrays[i].slice(0, shift)
            arrayLastChunk = arrayOfArrays[i].slice(shift-1, -1)
            console.log('arrayFirstChunk', arrayFirstChunk)
            console.log('arrayLastChunk', arrayLastChunk)

        } else if (shift === 0) {

        }



        // for (let j = shift; j < arrayOfArrays[i].length; j++) {
        //     console.log(arrayOfArrays[i][j])
            
        // }
    }

    // let combinedChunk =





}


console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]], 0));
// 1,2,3,4,5,6
// 7,7,7,7,7,-7

// --> [8,9,10,11,12,-1]


console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, 7]], 3));
// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]

console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]], 3));
// 1,2,3,4,5,6
//       7,7,7,-7,7,7
//             1,1,1,1,1,1

// --> [1,2,3,11,12,13,-6,8,8,1,1,1]