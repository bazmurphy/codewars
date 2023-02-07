// My Language Skills

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
// Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    return Object.entries(results)
    .filter(element => element[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(element => element[0]);
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));
// ["Ruby", "Python"]
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));
// ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}));
// []


// Solution 1
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}


// Solution 2
const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);


// Solution 3
myLanguages = r => Object.keys(r).sort((a,b) => r[b]-r[a]).filter(k => r[k] >= 60)


// Solution 4
const myLanguages = results => 
  Object.entries(results)
        .sort((a,b)=> b[1] - a[1])
        .filter(i=> i[1] >= 60)
        .map(i => i[0])


// Solution 5
const myLanguages = ( dic ) => Object.keys(dic).sort((a, b )=> dic[a] < dic[b] ).filter(el=> dic[el] >= 60 ? el : '')


// Solution 6
function myLanguages(results) {
  for(var i in results){
    if(results[i]<60){
      delete results[i];
    }
  }
  return Object.keys(results).sort(function(a,b){return results[b]-results[a]})
}


// Solution 7
function myLanguages(results) {
  return Object.entries(results).filter(el => el[1] >= 60).sort((a, b) => b[1] - a[1]).map(item => item[0]);
}


// Solution 8
const myLanguages = results =>
  Object.keys(results).sort((a, b) => results[b] - results[a]).filter(val => results[val] > 59);


// Solution 9
function myLanguages(results) {
  return Object.keys(results)
    .filter(x => results[x] > 59)
    .sort(function(a,b){return results[b]-results[a]});
}


// Solution 10
const myLanguages = langs => Object.entries(langs)
  .filter(([_, score]) => score >= 60)
  .sort(([_, score1], [__, score2]) => score2 - score1)
  .reduce((acc, [lang]) => [...acc, lang], []);


// Solution 11
function myLanguages(results) {
  return Object.entries(results).sort((a,b) => b[1] - a[1]).filter( item => item[1] >= 60).map(item => item[0]);
}


// Solution 12
function myLanguages(a) {
  return Object.keys(a).filter(x=>a[x]>=60).sort((x,y)=>a[y]-a[x])
}


// Solution 13
const myLanguages = results => Object
  .entries(results)
  .filter(([_, score]) => score >=60)
  .sort(([_langA, scoreA],[_langB, scoreB]) => scoreB - scoreA)
  .map(([language]) => language)


// Solution 14
myLanguages = results => Object.keys(results).sort((a, b) => results[b] - results[a]).filter(score => results[score] >= 60)