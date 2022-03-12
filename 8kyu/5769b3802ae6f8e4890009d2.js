// Removing Elements

// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArray.push(arr[i]);
        }
    }

    return newArray;

}

removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);
// ['Hello', 'Hello Again']
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// [1, 3, 5, 7, 9]
removeEveryOther([[1, 2]]);
// [[1, 2]]
removeEveryOther([['Goodbye'], {'Great': 'Job'}]);
// [['Goodbye']]


// Solution 1
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }


// Solution 2
function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }
  

// Solution 3
function removeEveryOther(arr){
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
}


// Solution 4
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));


// Solution 5
const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);


// Solution 6
function removeEveryOther(arr){
  return arr.filter((_,i)=>i%2==0)
}

// Solution 7
const removeEveryOther = arr => arr.filter((_, idx) => !(idx & 1));