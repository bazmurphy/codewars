// Coding Meetup #11 - Higher - Order Functions Series - Find the average age

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// write a function that returns the average age of developers (rounded to the nearest integer). 
// In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
    return Math.round(list.map(element => element.age).reduce((pV,cV) => pV + cV, 0) / list.length);

    // this is how to achieve it with ONLY reduce.. 
    // lesson: you MUST NOT use the property "age" on the previousValue (???)
    // return Math.round(list.reduce((pV, cV) => pV + cV.age, 0) / list.length);
}


const list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
const list2 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];
console.log(getAverageAge(list1))
// 50
console.log(getAverageAge(list2))
// 21


// Solution 1
function getAverageAge(list) {
    return Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);
}


// Solution 2
function getAverageAge(list) {
    let count = 0;
    let sum = 0;

    for (let dev of list) {
        count++;
        sum += dev.age;
    }

    return Math.round(sum / count);
}


// Solution 3
const getAverageAge = ($) => Math.round($.reduce((a, b) => a + b.age, 0) / $.length)


// Solution 4
const addAllAges = (acc, { age }) => acc + age;

const getAverageAge = (list) =>
    Math.round(list.reduce(addAllAges, 0) / list.length);


// Solution 5
const getAverageAge = list =>
    Math.round(list.reduce((pre, val) => pre + val.age, 0) / list.length);


// Solution 6
function getAverageAge(list) {

    var total_years = 0;

    for (i = 0; i < list.length; i++) {
        total_years += list[i].age;
    }

    return Math.round(total_years / list.length);
}



// Solution 7
function getAverageAge(list) {
    // thank you for checking out the Coding Meetup kata :)
    // console.log(list.map((el,i,arr)=> arr[i].map(letter => letter))
    //   let myArr = []
    //   let myObj = {}
    //p: an array of objects
    //r:  a num that represents the average age
    //e: var list1 = [ {  age: 30} { age: 70},]; => 50);
    //p: iterrate over the array of objects and push the ages into a new array and then reduce them 
    console.log('this is list:', list)
    return Math.round(list.map((dev, i, arr) => dev.age).reduce((startingAge, currentAge) => startingAge + currentAge) / list.length)
}


// Solution 9
function getAverageAge(list) {
    return Math.round(list.reduce((acc, actual) => acc + actual.age, 0) / list.length);
}


// Solution 10
function getAverageAge(list) {
    return Math.round(list.reduce((a, c) => a + c.age, 0) / list.length)
}


// Solution 11
function getAverageAge(list) {
    let soma = 0;
    const callbackFn = (element, index, array) => {
        soma += element.age;
    }
    list.forEach(callbackFn);
    return Math.round(soma / list.length);
}


// Solution 12
function getAverageAge(list) {
    return Math.round(list.reduce((avg, dev) => avg += dev.age, 0) / list.length);
}