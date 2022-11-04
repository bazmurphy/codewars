// Coding Meetup #10 - Higher - Order Functions Series - Create usernames

// Given the following input array:

// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// write a function that adds the username property to each object in the input array:

// [
//     {
//         firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//         username: 'emilyn1990'
//     },
//     {
//         firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//         username: 'nore2000'
//     }
// ]

// The value of the username property is composed by concatenating:

// firstName in lower -case;
// first letter of the lastName in lower -case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10 - years - time.The example above assumes that the function is run in year 2020.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
// Lastname will always be one upper - cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

function addUsername(list) {
    return list.map((element) => {
        element.username = `${element.firstName.toLowerCase()}${element.lastName[0].toLowerCase()}${(new Date).getFullYear() - element.age}`
        return element;
    });
}

const userList = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

addUsername(userList);
console.log(userList);
// [
//     {
//         firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//         username: 'emilyn1990'
//     },
//     {
//         firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//         username: 'nore2000'
//     }
// ]


// Solution 1
function addUsername(list) {
    return list.map(function (x) {
        x.username = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (new Date().getFullYear() - x.age);
        return x;
    });
}


// Solution 2
function addUsername(list) {
    const currentYear = (new Date()).getFullYear();
    list.forEach(dev => dev.username = (dev.firstName + dev.lastName.charAt()).toLowerCase() + (currentYear - dev.age));
    return list;
}


// Solution 3
const addUsername = (list, year = new Date().getFullYear()) =>
    list.forEach(x =>
        x.username = `${x.firstName.toLowerCase()}${x.lastName[0].toLowerCase()}${year - x.age}`
    ) || list;


// Solution 4
addUsername = a => a.map(e => (e.username = (e.firstName + e.lastName[0]).toLowerCase() + ((new Date).getFullYear() - e.age), e))


// Solution 5
function addUsername(list) {
    var year = new Date().getFullYear();
    list.forEach(function (dev) {
        dev.username = dev.firstName.toLowerCase() + dev.lastName[0].toLowerCase() + (year - dev.age);
    });
    return list;
}


// Solution 6
function addUsername(list) {
    //P: given an input array 
    //R:array of objects with a username property for each object in array


    const d = new Date()
    const year = d.getFullYear()
    list.forEach(obj => {
        obj.username = `${obj.firstName.toLowerCase()}${obj.lastName.split('.')[0].toLowerCase()}${year - obj.age}`
    })
    return list
}


// Solution 7
function addUsername(list) {
    return list.map((user) => ({
        ...user,
        username: [
            user.firstName.toLowerCase(),
            user.lastName.toLowerCase()[0],
            (new Date).getFullYear() - user.age
        ].join('')
    }))
}


// Solution 8
const addUsername = list =>
    list.forEach(val => val.username = (val.firstName + val.lastName[0] + (new Date().getFullYear() - val.age)).toLowerCase()) || list;


// Solution 9
function addUsername(list) {
    return list.map(x => (x.username = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (new Date().getFullYear() - x.age), x))
}


// Solution 10
const addUsername = users => users.map(user => ({ ...user, username: `${user.firstName.toLowerCase()}${user.lastName[0].toLowerCase()}${new Date().getFullYear() - user.age}` }));


// Solution 11
function addUsername(list) {
    const callback = (element) => {
        const date = new Date();
        return { ...element, username: element.firstName.toLowerCase().concat(element.lastName.replace(".", "").toLowerCase(), `${date.getFullYear() - element.age}`) }
    }
    return list.map(callback);
}


// Solution 12
function addUsername(list) {
    return list.map(user => {
        const lastNameFirstLetter = user.lastName.charAt(0)
        const year = new Date().getFullYear() - user.age;
        const username = user.firstName.concat(lastNameFirstLetter, year).toLowerCase();
        return {
            ...user,
            username
        }
    })
}