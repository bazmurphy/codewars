// Remove First and Last Character Part Two

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      
// "2"
// "1,2,3,4"
// "2 3"
// "1,2,3,4,5"
// "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


function array(str){
    
    let newArray = str.split(',')
    // console.log(newArray)
    
    if (newArray.length <= 2)
        return null;
    else {
        newArray.shift()
        newArray.pop()
        // console.log(newArray)
        
        if (newArray.length > 0) {
            newArray = newArray.join(" ")
            return newArray
        } else {
            return newArray;
        }
    }
}

array('1,2,3')
// '2'
array('1,2,3,4')
// '2 3'
array('1,2,3,4,5')
// '2 3 4'
array('')
// null
array('1')
// null
array('1,2')
// null


// Solution 1
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}


// Solution 2
const array = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === '' ? null : arr.join(' ')
}


// Solution 3

function array(arr){
    var data = arr.split(',');
    data.pop()
    data.shift();
    return data.length ? data.join(' ') : null;
}


// Solution 4
function array(arr){
    arr = arr.split(',');
    
    if (arr.length < 3) {
      return null;
    }
  
    return arr.slice(1, arr.length - 1).join(' ');
}