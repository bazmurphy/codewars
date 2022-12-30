// Coding Meetup #5 - Higher - Order Functions Series - Prepare the count of languages

// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }

// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.


// function countLanguages(list) {

//     let result = {};

//     for (let item of list) {

//         // console.log(item.language)

//         if (result.hasOwnProperty(item.language)) {
//             result[item.language] += 1;
//         } else {
//             result[item.language] = 1;
//         }

//     }

//     return result;
// }

const countLanguages = (list) => {
    let result = {};
    list.forEach(element => result.hasOwnProperty(element.language) ? result[element.language] += 1 : result[element.language] = 1)
    return result;
};

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list1))
// { C: 2, JavaScript: 1, Ruby: 1 };


// Solution 1
function countLanguages(list) {
    var count = {};
    list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
    return count;
}


// Solution 2
function countLanguages(list) {
    return list.reduce(function (s, c) {

        if (c.language in s)
            s[c.language]++;
        else
            s[c.language] = 1;

        return s;
    }, {});
}


// Solution 3
function countLanguages(list) {
    let langCount = {};

    // loop through each object in the array
    for (let i = 0; i < list.length; i++) {

        // find language for each developer
        // add language to object if it does exist
        if (langCount[list[i].language] === undefined) {
            langCount[list[i].language] = 1;
        } else {
            // otherwise increment language count by 1
            langCount[list[i].language]++;
        }
    }

    // return object
    return langCount;
}


// Solution 4
function countLanguages(list) {
    const arr = list.map(el => el['language'])
    return arr.reduce((a, i) => {
        a[i] = a[i] + 1 || 1
        return a
    }, {})
}


// Solution 5
function countLanguages(list) {
    return list.reduce((langs, dev) => {
        langs.hasOwnProperty(dev.language)
            ? langs[dev.language] += 1
            : langs[dev.language] = 1;
        return langs;
    }, {});
}


// Solution 6
const countLanguages = list =>
    list.reduce((pre, val) => (pre[val.language] = -~pre[val.language], pre), {});


// Solution 7
function countLanguages(list) {
    var r = {};
    list.forEach(x => {
        let p = [x.language];
        r.hasOwnProperty(p) ? r[p]++ : r[p] = 1;
    });
    return r;
}


// Solution 8
const countLanguages = list =>
    list.reduce((p, c) => {
        p[c.language] = (p[c.language] || 0) + 1
        return p
    }, {})


// Solution 9
function countLanguages(list) {
    return list.reduce((acc, x) => (acc[x.language] ? acc[x.language]++ : acc[x.language] = 1, acc), {});
}


// Solution 10
function countLanguages(developers) {
  let counts = {};
  for (const developer of developers)
    counts[developer.language] = (counts[developer.language] || 0) + 1;
  return counts;
}


// Solution 11
function countLanguages(list) {
  let obj = {};
  list.forEach( (x) => {obj[x.language] == undefined ? obj[x.language] = 1 : obj[x.language]++;} );
  return obj;
}


// Solution 12
function countLanguages(list) {
  let res = {}
  list.forEach(e => {
    !res[e.language] ? res[e.language] = 1 : res[e.language]++
  })
  return res
}