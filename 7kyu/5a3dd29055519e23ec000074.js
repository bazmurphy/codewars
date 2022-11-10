// Check the exam

// The first input array is the key to the correct answers to an exam, like["a", "a", "b", "d"].
// The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length.
// Return the score for this array of answers, 
// giving + 4 for each correct answer, 
// -1 for each incorrect answer, 
// and + 0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) → 0

function checkExam(array1, array2) {

    let output = 0;

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === array1[i]) {
            output += 4;
        } else if (array2[i] === '') {
            output += 0;
        } else if (array2[i] !== array1[i]) {
            output -= 1;
        }
    }

    if (output < 0) {
        return 0;
    } else {
        return output;
    }
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
// 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))
// 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
// 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]))
// 0


// Solution 1
function checkExam(array1, array2) {
    var score = 0;

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            score += 4;
        }
        else if (array2[i] === "") {
            score += 0
        }
        else {
            score -= 1
        }
    }

    if (score < 0) {
        score = 0
    }

    return score
}


// Solution 2
function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
        if (e === "") {
            return a;
        }

        if (e === array1[idx]) {
            return a += 4;
        }

        return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
}


// Solution 3
checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;


// Solution 4
function checkExam(array1, array2) {
    var score = 0;
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] === "") {
            score += 0
        } else if (array1[i] === array2[i]) {
            score += 4
        } else if (array1[i] !== array2[i]) {
            score -= 1
        }
    }
    if (score >= 0) {
        return score;
    } else {
        return 0
    }
}


// Solution 5
const checkExam = (array1, array2) => {
    let result = array2.reduce(
        (score, answer, i) => {
            if (answer == array1[i]) return score += 4;
            else if (answer == 0) return score += 0;
            else return score - 1;
        }
        , 0);
    return result < 0 ? 0 : result;
}


// Solution 6
checkExam = (arr1, arr2) => Math.max(arr2.reduce((a, b, i) => b == arr1[i] ? a + 4 : b ? a - 1 : a, 0), 0)


// Solution 7
function checkExam(arr1, arr2) {
    let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c + 4 : c - 1) : c, 0);
    return result < 0 ? 0 : result;
}


// Solution 8
const checkExam = (array1, array2) =>
    Math.max(array2.reduce((pre, val, idx) => val ? val === array1[idx] ? pre + 4 : --pre : pre, 0), 0);


// Solution 9
const checkExam = (arr1, arr2) => { const num = arr2.map((e, i) => e === '' ? 0 : e === arr1[i] ? 4 : -1).reduce((x, y) => x + y); return num > 0 ? num : 0 }


// Solution 10
function checkExam(array1, array2) {
    const arr = array2.map((el, i) => array1[i] === el ? 4 : el === '' ? 0 : -1)
    return arr.reduce((a, b) => a + b, 0) > 0 ? arr.reduce((a, b) => a + b, 0) : 0
}


// Solution 11
function checkExam(a1, a2) {
    return Math.max(0, a2.reduce((s, a, i) => s + (a ? a === a1[i] ? 4 : -1 : 0), 0));
}


// Solution 12
function checkExam(array1, array2) {
    let score = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") {
            score += 0;
            continue;
        }
        if (array1[i] === array2[i]) {
            score += 4;
        }
        if (array1[i] !== array2[i]) {
            score -= 1;
        }
    }

    if (score < 0) {
        return 0;
    }
    return score;
}