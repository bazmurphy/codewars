// Coding Meetup #3 - Higher - Order Functions Series - Is Ruby coming ?

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];

// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

function isRubyComing(list) {
    return list.some((element) => element.language === "Ruby");
}

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

console.log(isRubyComing(list1));
// true
console.log(isRubyComing(list2)); 
// false


// Solution 1
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}


// Solution 2
function isRubyComing(list) {
    return list.some(developer => developer.language === "Ruby");
}


// Solution 3
const isRubyComing = list => list.some(({ language }) => language === 'Ruby');


// Solution 4
function isRubyComing(list) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].hasOwnProperty('language')) {
            if (list[i].language === 'Ruby') {
                arr.push(true)
            } else {
                arr.push(false);
            }
        }
    }
    arr = arr.filter(function (x) {
        return x === true;
    });
    return arr[0] || false;
};


// Solution 5
const isRubyComing = (dic) => dic.some(el => el.language === 'Ruby')


// Solution 6
const isRubyComing = ds => ds.some(d => d.language == 'Ruby');


// Solution 7
function isRubyComing(list) {
    return list.find(x => x.language == 'Ruby') ? true : false;
}


// Solution 8
function isRubyComing(list) {
    return list.filter(el => el.language == 'Ruby').length != 0;
}


// Solution 9
function isRubyComing(list) {
    return list.some(dev => dev.language === 'Ruby');
}


// Solution 10
function isRubyComing(list) {
    let rubyAttendees = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].language == "Ruby") {
            rubyAttendees++
        }
    } if (rubyAttendees > 0) {
        return true
    } else {
        return false
    }
} 


// Solution 11
function isRubyComing(list) {
    return list.filter(ele => ele.language === 'Ruby').length > 0 ? true : false;
}


// Solution 12
function isRubyComing(list) {
    return list.some(x => x.language === 'Ruby');
}