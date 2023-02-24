// Add property to every object in array 

// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

// For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// After adding the property the result should be:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];

// The questions array is already defined for you and is not the same as the one in the example.

// for (let element of questions) {
//   element.usersAnswer = null;
// }
questions.forEach((element) => element.usersAnswer = null);

console.log(questions[0].usersAnswer === null);


// Solution 1
questions.forEach(function (i) {
        i.usersAnswer = null;
    });


// Solution 2
questions.forEach(x => x.usersAnswer = null);


// Solution 3
questions.forEach(function(q) {
  q.usersAnswer = null
})


// Solution 4
for (i=0; i<questions.length; i++) {
questions[i].usersAnswer = null;
};


// Solution 5
for (key in questions)
  questions[key].usersAnswer = null;


// Solution 6
for (obj of questions) {
  obj['usersAnswer'] = null;
}


// Solution 7
for(var i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
}


// Solution 8
questions.forEach( (obj) => obj.usersAnswer = null);


// Solution 9
questions = questions.map(function(v){
  return v.usersAnswer = null, v;
});


// Solution 10
questions.forEach( item => item.usersAnswer = null)