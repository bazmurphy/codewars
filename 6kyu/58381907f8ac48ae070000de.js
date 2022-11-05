// Coding Meetup #13 - Higher - Order Functions Series - Is the meetup language - diverse ?

// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];

// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

// Notes:

// The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
// The input array will always be valid and formatted as in the example above.
// Each of the 3 programming languages will always be represented.

function isLanguageDiverse(list) {
    const languageCount = {};
    list.forEach(element => languageCount.hasOwnProperty(element.language) ? languageCount[element.language] += 1 : languageCount[element.language] = 1);
    // console.log(languageCount);
    return Math.max(...Object.values(languageCount)) / Math.min(...Object.values(languageCount)) <= 2 ? true : false;
}

var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

var list2 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

var list3 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

var list4 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];


console.log(isLanguageDiverse(list1));
// false
console.log(isLanguageDiverse(list2));
// false
console.log(isLanguageDiverse(list3));
// true
console.log(isLanguageDiverse(list4));
// true


// Solution 1
function isLanguageDiverse(list) {
    var counts = {}
        , min = Number.MAX_VALUE
        , max = 0;

    for (var dev of list)
        counts[dev.language] = (counts[dev.language] || 0) + 1;

    for (var lang in counts) {
        min = Math.min(counts[lang], min);
        max = Math.max(counts[lang], max);
    }

    return max <= 2 * min;
}


// Solution 2
function isLanguageDiverse(list) {
    list = list.map(dev => dev.language);
    const num = [...new Set(list)].map(el => list.filter(e => e === el).length);
    return Math.max(...num) / Math.min(...num) <= 2;
}


// Solution 3
const isLanguageDiverse = list => {
    list = [list.filter(a => a.language === 'Python').length, list.filter(a => a.language === 'Ruby').length, list.filter(a => a.language === 'JavaScript').length]
    return Math.max.apply(null, list) / Math.min.apply(null, list) <= 2
}


// Solution 4
const isLanguageDiverse = (list) => {
    const devCountByLang = Object.values(list.reduce((count, { language }) => ({
        ...count,
        [language]: (count[language] || 0) + 1,
    }), {}));
    return Math.max(...devCountByLang) / 2 <= Math.min(...devCountByLang);
};


// Solution 5
function isLanguageDiverse(list) {
    const js = list.filter(e => e.language === 'JavaScript').length;
    const ruby = list.filter(e => e.language === 'Ruby').length;
    const python = list.filter(e => e.language === 'Python').length;

    return Math.max(js, ruby, python) <= Math.min(js, ruby, python) * 2 ? true : false;
}


// Solution 6
const isLanguageDiverse = list =>
    (arr => Math.max(...arr) / Math.min(...arr) <= 2)
        (Object.values(list.reduce((pre, val) => (pre[val.language] = -~pre[val.language], pre), {})));


// Solution 7
isLanguageDiverse = (a, b = {}) => ((_, c = Object.values(b)) => c.every((x, y) => c.every((z, w) => w == y || x / z <= 2)))(a.forEach(({ language: l }) => b[l] = ++b[l] || 1))


// Solution 8
function isLanguageDiverse(arr) {
    const cnt = Object.values(arr.reduce((res, dev) => (res[dev.language] += 1, res), { Python: 0, Ruby: 0, JavaScript: 0 }));
    return 2 * Math.min(...cnt) >= Math.max(...cnt);
}


// Solution 9
function isLanguageDiverse(list) {
    let cou = [0, 0, 0];

    list.forEach(function (person) {
        if (person.language === "Python") {
            cou[0]++;
        } else if (person.language === "Ruby") {
            cou[1]++;
        } else if (person.language === "JavaScript") {
            cou[2]++;
        }
    });

    let min = Math.min.apply(null, cou);
    let max = Math.max.apply(null, cou);

    if (max <= 2 * min) {
        return true;
    } else if (max > 2 * min) {
        return false;
    }
}


// Solution 10
function isLanguageDiverse(list) {
    var ranking = list.reduce((p, c) => {
        p[c.language == "JavaScript" ? 0 : c.language == "Python" ? 1 : 2]++;
        return p;
    },
        [0, 0, 0]).sort((a, b) => b - a);

    return ranking[0] <= 2 * ranking[2];
}


// Solution 11
function isLanguageDiverse(list) {
    const answer = { 'Python': 0, 'Ruby': 0, 'JavaScript': 0 };
    const callbackFn = (element) => {
        const keys = Object.keys(answer);
        const language = element.language;
        if (keys.includes(language)) {
            answer[language]++
        }
    }
    list.forEach(callbackFn);
    const values = Object.values(answer).sort((a, b) => { return a - b });
    const maxValue = Math.max(...values)
    const minValue = Math.min(...values)
    return maxValue <= 2 * minValue ? true : false;
}


// Solution 12
isLanguageDiverse = a => (a = [...new Set(a.map(e => e.language))].map(
    e => a.filter(i => i.language === e).length)
    .sort((x, y) => x - y), a[0] >= a[a.length - 1] / 2)


// Solution 13
function isLanguageDiverse(list) {
    const languageFrequency = { Python: 0, Ruby: 0, JavaScript: 0 }

    for (let { language } of list)
        languageFrequency[language]++

    const frequencies = Object.values(languageFrequency)

    return frequencies.every((value1) =>
        frequencies.every((value2) => value1 <= 2 * value2)
    )
}


// Solution 14
function isLanguageDiverse(list) {
    const pythonSet = new Set(list.filter(x => x.language === 'Python')).size;
    const JavascriptSet = new Set(list.filter(x => x.language === 'JavaScript')).size;
    const rubySet = new Set(list.filter(x => x.language === 'Ruby')).size;

    return Math.min(pythonSet, JavascriptSet, rubySet) * 2
        >= Math.max(pythonSet, JavascriptSet, rubySet) ? true : false;
}