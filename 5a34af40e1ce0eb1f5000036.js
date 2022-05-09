// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'


function toCsvText(arr) {

    finalString = ""

    for (let i = 0; i < arr.length; i++) {
        
        finalString += arr[i].join(",");
        
        if (i < arr.length - 1) {
            finalString += "\n"
        }
    }

    return finalString;
} 

toCsvText([ 
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] )

// '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'


// Solution 1
function toCsvText(array) {
    return array.join('\n');
 }

// Solution 2
const toCsvText = array => array.map(row => row.join(',')).join('\n');

// Solution 3
const toCsvText = array => array.join('\n');

// Solution 4
function toCsvText(array) {
    return array.map(list => list.join(',')).join('\n')
}