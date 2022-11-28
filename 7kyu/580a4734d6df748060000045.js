// Sorted ? yes ? no ? how ?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {
    
    let ascending = [...array].sort((a, b) => a - b);
    let descending = [...array].sort((a, b) => b - a);
    // we have to make a copy not to mutate the original array
    
    // console.log('array', array)
    // console.log('ascending', ascending)
    // console.log('descending', descending)
  
    if (array.every((element, index) => element === ascending[index])) {
        return 'yes, ascending'
    } else if (array.every((element, index) => element === descending[index])) {
        return 'yes, descending'
    } else {
        return 'no'
    }

}

console.log(isSortedAndHow([1, 2]));
// 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8]));
// 'yes, descending'
console.log(isSortedAndHow([4, 2, 30]));
// 'no'


// Solution 1
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
            arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}


// Solution 2
const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0

    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}


// Solution 3
function isSortedAndHow(array) {
    var ans;
    if (array[1] > array[0]) {
        ans = "yes, ascending";
    }

    if (ans === "yes, ascending") {
        for (var i = 1; i < array.length; i++) {
            if (array[i] >= array[i - 1]) {
                ans = "yes, ascending";
            } else return ans = "no";
        }
    }
    if (ans !== "yes, ascending") {
        for (var i = 1; i < array.length; i++) {
            if (array[i] <= array[i - 1]) {
                ans = "yes, descending";
            } else return ans = "no";
        }
    }
    return ans;
}


// Solution 4
const isSortedAndHow = a => {
  const s = a.join``;
  return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
         s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
}


// Solution 5
function isSortedAndHow(array) {
    let asc = true;
    let des = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) des = false;
        if (array[i] < array[i - 1]) asc = false;
    }
    return asc ? 'yes, ascending' : des ? 'yes, descending' : 'no'
}


// Solution 6
function isSortedAndHow(array) {
    let arrayCopy = array.slice();
    let sorted = arrayCopy.sort((a, b) => {
        return a - b;
    });
    if (JSON.stringify(sorted) === JSON.stringify(array)) {
        return "yes, ascending";
    } else if (JSON.stringify(sorted.reverse()) === JSON.stringify(array)) {
        return "yes, descending";
    } else {
        return "no";
    };
}


// Solution 7
const isSortedAndHow = array =>
    array.slice(1).every((val, idx) => val >= array[idx]) ? `yes, ascending` :
        array.slice(1).every((val, idx) => val <= array[idx]) ? `yes, descending` : `no`;


// Solution 8
function isSortedAndHow(array) {

    var arr1 = [];
    arr1 = arr1.concat(array);
    arr1.sort(function (a, b) { return b - a });
    arr1 = arr1.join('');
    var arr = [];
    arr = arr.concat(array);
    arr.sort(function (a, b) { return a - b });
    arr = arr.join('');
    array = array.join('');
    if (arr === array) {
        return 'yes, ascending';
    } else if (arr1 === array) {
        return 'yes, descending';
    } else { return 'no' }



}


// Solution 9
function isSortedAndHow(array) {
    switch (JSON.stringify(array)) {
        case JSON.stringify(array.sort((a, b) => a - b)): return 'yes, ascending';
        case JSON.stringify(array.sort((a, b) => b - a)): return 'yes, descending';
        default: return 'no';
    }
}


// Solution 10
function isSortedAndHow(array) {

    for (var i = 0; i <= array.length - 1; i++) {
        if (array[i] <= array[i + 1]) {
            return 'yes, ascending';
        }
        else if (array[i] >= array[i + 1] && array[i + 1] >= array[i + 2]) {
            return 'yes, descending';
        }
        else {
            return 'no';
        }
    }

}


// Solution 11
function isSortedAndHow(array) {
    var asc = 1, desc = 1;
    for (var i = 1; i < array.length; i++) {
        asc *= array[i] >= array[i - 1];
        desc *= array[i] <= array[i - 1];
    }
    return asc ? 'yes, ascending' : desc ? 'yes, descending' : 'no';
}


// Solution 12
function isSortedAndHow(array) {
  const sortArr = array.slice().sort((a, b) => a - b);
  
  return String(sortArr) === String(array) ? "yes, ascending"
  : String(sortArr.reverse()) === String(array) ? "yes, descending"
  : "no";
}