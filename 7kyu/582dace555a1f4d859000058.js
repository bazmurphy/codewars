// Coding Meetup #12 - Higher - Order Functions Series - Find GitHub admins

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
// { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
// { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
// { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
// { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ];

// write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

// [
// { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
// { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
// ]

// Notes:

// The original order should be preserved.
// If there are no GitHub admin developers in a given language then return an empty array[].
// The input array will always be valid and formatted as in the example above.
// The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no'(all lower -case).
// The strings representing a given language will always be formatted in the same way(e.g. 'JavaScript' will always be formatted with upper -case 'J' and 'S'.


function findAdmin(list, lang) {
    return list.filter(element => element.language === lang && element.githubAdmin === "yes");
}

const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

const answer1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
];

console.log(findAdmin(list1, 'JavaScript'))
// [
// { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
// { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
// ];
console.log(findAdmin(list1, 'Ruby'));
// [];
console.log(findAdmin(list1, 'Python'));
// [];



// Solution 1
function findAdmin(list, lang) {
    return list.filter(function (dev) { return dev.language == lang && dev.githubAdmin == 'yes' });
}


// Solution 2
function findAdmin(list, lang) {
    return list.filter(p => p.language === lang && p.githubAdmin === 'yes');
}


// Solution 3
const findAdmin = (list, lang) =>
    list.filter(({ language, githubAdmin }) => language === lang && githubAdmin === `yes`);


// Solution 4
const findAdmin = (list, lang) =>
    list.filter(
        (el) => el['language'] === lang && el['githubAdmin'] === 'yes'
    )


// Solution 5
function findAdmin(list, lang) {
    return list.filter(e => e.language === lang && e.githubAdmin === 'yes');
}


// Solution 6
const findAdmin = (list, lang) => {
    return list.filter(({ language, githubAdmin }) => githubAdmin == 'yes' && language == lang)
}


// Solution 7
const findAdmin = (list, lang) => list.filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes')


// Solution 8
function findAdmin(list, lang) {
    return list.filter(dev => dev.githubAdmin === 'yes' && dev.language === lang);
}


// Solution 9
function findAdmin(list, lang) {
    return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes');
}


// Solution 10
function findAdmin(developers, lang) {
    const isGitHubAdmin = ({githubAdmin}) => githubAdmin === "yes";
    const know = (lng) => ({language}) => lng === language;
    const both = (prep1, prep2) => developer => (prep1(developer) && prep2(developer));
    const knowLangAndIsGitHubAdmin =both(know(lang), isGitHubAdmin);
    
    return developers.filter(knowLangAndIsGitHubAdmin);
}


// Solution 11
function findAdmin(list, lang) {
    return list.filter(
        (index) => index.language === lang && index.githubAdmin === 'yes'
    )
}


// Solution 12
function findAdmin(list, lang) {
    return list.filter((actual) => actual.language === lang && actual.githubAdmin === 'yes');
}