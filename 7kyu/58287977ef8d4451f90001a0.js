// Coding Meetup #6 - Higher - Order Functions Series - Can they code in the same language ?

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];

// your function should return true.

// Notes:

// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.

function isSameLanguage(list) {
    return list.every((element, index, array) => element.language === array[0].language);
}

const list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

const list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];

console.log(isSameLanguage(list1))
// true
console.log(isSameLanguage(list2))
// false


// Solution 1
function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
}


// Solution 2
function isSameLanguage(list) {
    return list.every((a, _, b) => a.language === b[0].language);
}


// Solution 3
const isSameLanguage = list => {
    return [...new Set(list.map(el => el['language']))].length === 1
}


// Solution 4
function isSameLanguage(list) {
    let tester = list[0].language;
    return list.every(dev => dev.language === tester);
}


// Solution 5
function isSameLanguage(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[0].language !== list[i].language) {
            return false;
        }
    }
    return true;
}


// Solution 6
function isSameLanguage(list) {
    return list.every((d, i, arr) => d.language === arr[0].language);
}


// Solution 7
function isSameLanguage(list) {
    return list.every(dev => dev.language === list[0].language);
}


// Solution 8
const isSameLanguage = list => new Set(list.map(cur => cur.language)).size === 1;


// Solution 9
const isSameLanguage = ([x, ...xs]) =>
    xs.every(e => x.language === e.language)


// Solution 10
function isSameLanguage(list) {
    return new Set(list.map(x => x.language)).size === 1
}


// Solution 11
function isSameLanguage(list) {
    const lang = list[0].language
    return list.every((index) => index.language === lang)
}


// Solution 12
function isSameLanguage(lists) {
    let languageChecker = lists[0].language

    for (let list of lists) {
        if (list.language !== languageChecker) {
            return false
        }
    }
    return true
}