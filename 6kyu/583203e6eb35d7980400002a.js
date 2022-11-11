// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. 
// Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. 
// Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. 
// You will not be tested with invalid input (input will always be an array). 
// Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  let smileyCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 2 && (arr[i][0] === ":" || arr[i][0] === ";") && (arr[i][1] === ")" || arr[i][1] === "D")) {
      // console.log("valid 2 character smiley");
      smileyCount++;
    } else if (arr[i].length === 3 && (arr[i][0] === ":" || arr[i][0] === ";") && (arr[i][1] === "-" || arr[i][1] === "~") && (arr[i][2] === ")" || arr[i][2] === "D")) {
      // console.log("valid 3 character smiley");
      smileyCount++;
    }
  }
  return smileyCount;
}

console.log(countSmileys([]))
// 0
console.log(countSmileys([':D', ':~)', ';~D', ':)']))
// 4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']))
// 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
// 1


// Solution 1
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}


// Solution 2
function countSmileys(arr) {
  var smileys = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}


// Solution 3
const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);


// Solution 4
const SMILING = /[:;]{1}[-~]?[)D]{1}/;

const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;


// Solution 5
const smileyIsValid = smiley =>
  smiley.length === 3 || smiley.length === 2

const smileyHasValidEye = smiley => {
  const maybeEye = smiley.charAt(0)
  return maybeEye === ':' || maybeEye === ';'
}

const smileyHasNose = smiley =>
  smiley.length === 3

const smileyHasValidNose = smiley => {
  const maybeNose = smiley.charAt(1)
  return smileyHasNose(smiley) ? maybeNose === '-' || maybeNose === '~' : true
}

const smileyHasValidMouth = smiley => {
  const maybeMouth = smileyHasNose(smiley) ? smiley.charAt(2) : smiley.charAt(1)
  return maybeMouth === ')' || maybeMouth === 'D'
}

const countSmileys = smileys =>
  smileys.filter(smiley =>
    smileyIsValid(smiley) &&
    smileyHasValidEye(smiley) &&
    smileyHasValidNose(smiley) &&
    smileyHasValidMouth(smiley)
  ).length


// Solution 6
function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}


// Solution 7
const VALID_EYES = [':', ';']
const VALID_NOSES = ['-', '~']
const VALID_MOUTHS = [')', 'D']

function isSmiley(str) {
  const [eyes, noseOrMouth, mouthOrNothing] = str
  let nose
  let mouth

  if (mouthOrNothing) {
    nose = noseOrMouth
    mouth = mouthOrNothing
  } else {
    mouth = noseOrMouth
  }

  if (!eyes || !VALID_EYES.includes(eyes)) return false

  if (nose && !VALID_NOSES.includes(nose)) return false

  if (!mouth || !VALID_MOUTHS.includes(mouth)) return false

  return true
}

function countSmileys(arr) {
  return arr.reduce((acc, str) => isSmiley(str) ? acc + 1 : acc, 0)
}


// Solution 8
countSmileys = arr => arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length; 


// Solution 9
function countSmileys(arr) {
  return arr.reduce((n, s) => /^[:;][-~]?[)D]$/.test(s) ? n + 1 : n, 0)
}


// Solution 10
const smileyRegEx = new RegExp(/[:;][-~]?[)D]/)
const isSmiley = s => smileyRegEx.test(s)
const countSmileys = a => a.filter(isSmiley).length


// Solution 11
const faces = new Set()
for (let eyes of [':', ';'])
  for (let nose of ['-', '~', ''])
    for (let mouth of [')', 'D'])
      faces.add(eyes + nose + mouth)

countSmileys = (arr) => arr.filter(x => faces.has(x)).length


// Solution 12
const countSmileys = arr => arr.filter(s => s.match(/((:|;)(~|-){0,1}(\)|D))/)).length;