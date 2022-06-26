// Student's Final Grade

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: 
// exam - grade for exam(from 0 to 100); 
// projects - number of completed projects(from 0 and above);

// This function should return a number(final grade).
// There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

// Examples(Inputs-- > Output):

// 100, 12 -- > 100
// 99, 0 -- > 100
// 10, 15 -- > 100

// 85, 5 -- > 90

// 55, 3 -- > 75

// 55, 0 -- > 0
// 20, 2 -- > 0

// * Use Comparison and Logical Operators.

function finalGrade(exam, projects) {

    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }

}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);


// Solution 1
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 & projects >= 5) return 90;
    if (exam > 50 & projects >= 2) return 75;
    return 0;
}


// Solution 2
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    return 0;
}


// Solution 3
const finalGrade = (exam, projects) => {
    return (
        exam > 90 || projects > 10 ? 100 :
            exam > 75 && projects >= 5 ? 90 :
                exam > 50 && projects >= 2 ? 75 : 0
    )
}


// Solution 4
const finalGrade = (grade, projects) => grade > 90 || projects > 10 ? 100 : grade > 75 && projects > 4 ? 90 : grade > 50 && projects > 1 ? 75 : 0;


// Solution 5
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    else if (exam > 75 && projects >= 5) return 90;
    else if (exam > 50 && projects >= 2) return 75;
    else return 0;
}


// Solution 6
const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10) return 100
    if (exam > 75 && projects > 4) return 90
    if (exam > 50 && projects > 1) return 75
    return 0;
}


// Solution 7
const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0


// Solution 8
const finalGrade = (e, p) => e > 90 || p > 10 ? 100 : e > 75 && p > 4 ? 90 : e > 50 && p > 1 ? 75 : 0;


// Solution 9
function finalGrade(e, p) {
    return e > 90 || p > 10 ? 100 :
        e > 75 && p >= 5 ? 90 :
            e > 50 && p >= 2 ? 75 : 0;
}


// Solution 10
finalGrade = function (e, p) { return e > 90 || p > 10 ? 100 : e > 75 && p >= 5 ? 90 : e > 50 && p >= 2 ? 75 : 0 };


// Solution 11
finalGrade = (exam, projects) => {
    switch (true) {
        case (exam > 90 || projects > 10):
            return 100
            break;
        case (exam > 75 && projects >= 5):
            return 90;
            break;
        case (exam > 50 && projects >= 2):
            return 75
            break;
        case (exam <= 55 || projects <= 2):
            return 0;
            break;

    }
}


// Solution 12
function finalGrade(exam, projects) {
    switch (true) {
        case exam > 90 || projects > 10: return 100;
        case exam > 75 && projects >= 5: return 90;
        case exam > 50 && projects >= 2: return 75;
        default: return 0;
    }
}