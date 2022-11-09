// FizzBuzz++

// There is a common problem given to interviewees in software.
// It is called FizzBuzz.
// It works as follows: For the numbers between 1 and 100, print fizz if it is a multiple of 3 and buzz if it is a mutiple of 5, else print the number itself.

// You are in an interview and they ask you to complete fizzbuzz(which can be done in a one - liner in a few langs) and you knock it out of the park.

// Surprised by your ability, the interviewer gives you a harder problem.

// Given a list of coprime numbers, (that is that the g.c.d.of all the numbers == 1) and an equally sized list of words.
// compute its fizzbuzz representation up until the pattern of strings repeats itself.

// Here's an example

// fizzbuzz_plusplus([2, 3, 5], ['fizz', 'buzz', 'bazz']); // => [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']

// Things to note:

// Your function should return an Array of the output for each index, not print it.
// If elements are 1 - indexed, the 10th item is fizz + bazz as 10 == 0(mod 2) and 10 == 0(mod 5).
// The strings are always concatenated from left to right in appearance of array.
// The number array may not always be sorted - just use the given order of the numbers
// All numbers in the first array will always be coprime.This is a safe assumption for your program.
// The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.

// Hint: What is the relation to the numbers given in the list and the length of the list ?


function fizzbuzzPlusPlus(numbers, words) {

    let result = [];
    // initialise an empty "result" array

    let total = numbers.reduce((acc, cv) => acc * cv, 1);
    // multiply all the items in the "numbers" array, to get "total" which is the final length of the "result" array
    
    for (let i = 1; i <= total; i++) {
    // loop from 1 to that "total"

        let elementToAdd = i;
        // initially set the "elementToAdd" as "i" (a number)
        
        for (let j = 0; j < numbers.length; j++) {
        // loop through the numbers array (the values we will use to check "if divisible by")

            if (i % numbers[j] === 0) {
            // if "i" divided by the current number returns 0 remainder then it fulfills the condition

                if (typeof elementToAdd === "number") {
                    // to stop the number being added to the start of the string which is pushed to the result array
                    elementToAdd = "";
                    // we set it to an empty string
                }
                
                elementToAdd += words[j];
                // then concatenate the word to the end of the elementToAdd
            }

        }

        result.push(elementToAdd);
        // when everything is finished push the elementToAdd to the result array  

    }

    return result;
    // return the result array

}


console.log(fizzbuzzPlusPlus([3, 5], ["fizz", "buzz"]));
// [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]

console.log(fizzbuzzPlusPlus([2, 3, 5], ["fizz", "buzz", "bazz"]));
// [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29, 'fizzbuzzbazz']
































// const referenceObject = {};
// for (let i = 0; i < numbers.length; i++) {
//     referenceObject[words[i]] = numbers[i]
// }
// console.log(referenceObject)

// const resultArrayLength = numbers.reduce((a, b) => a * b);

// let result = Array.from({ length: numbers.reduce((a, b) => a * b) }, (_, i) => i + 1);

// let resultArray = [];

// for (let i = 1; i <= resultArrayLength; i++) {
//     console.log(`i ${i}`)
//     for (let j = 0; i < referenceObject.length; j++) {
//         console.log(`j ${j}`)
//         if (i % referenceObject[j] === 0) {
//             resultArray[i-1] =+ Object.keys(referenceObject)
//         }
//     }
// }

// return result;