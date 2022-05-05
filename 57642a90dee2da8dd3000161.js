// Arguments to Binary addition

// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be added.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

arr2bin([1,2])
// "11"
arr2bin([1,2,3,4,5])
// "1111"
arr2bin([1,10,100,1000]) //
"10001010111"
arr2bin([null])
// "0"
arr2bin([true,true,false,15])
// "1111"


function arr2bin(arr){

    return Number(arr.reduce((sum, element) => typeof element === 'number' ? sum + element : sum + 0, 0)).toString(2);

    // let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'number') {
    //         sum += arr[i]
    //     } else {
    //         sum += 0;
    //     }
    // }

    // return Number(sum).toString(2);    

}


// Solution 1
function arr2bin(arr){
    return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
}


// Solution 2
function arr2bin(arr) {
    return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);
}


// Solution 3
const arr2bin = arr => arr.filter(x => typeof x == 'number').reduce((x, y) => x + y, 0).toString(2);


// Solution 4
const arr2bin = ( $ ) => $.reduce((acc, el)=> (typeof el === 'number' ? acc + el : acc),0).toString(2)


// Solution 5
const arr2bin = arr => arr.reduce((pre, val) => typeof val === `number` ? pre + val : pre, 0).toString(2);


// Solution 6
const arr2bin = (arr) => {
    return arr
      .filter( (e) => typeof e == 'number' )
      .reduce( (a, b) => a + b, 0 ).toString(2);
};