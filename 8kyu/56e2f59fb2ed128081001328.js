// Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"
// Note: if this seems too simple for you try the next level

function printArray(array){
    return array.join(',');
}

printArray(["h","o","l","a"])
// h,o,l,a


// Solution 4
const printArray = arr => arr.join(',')